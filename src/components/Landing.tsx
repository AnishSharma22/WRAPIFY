import axios from "axios";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { artistState, trackState, userState } from "@/recoil/userState.tsx";
import "./css/auth.css";
import spofifyLogo from "./images/spotify.png";
import { useEffect } from "react";
import Cookies from "universal-cookie";
import '../App.css';


const Landing = () => {
  const [artistProps] = useRecoilState(artistState);
  const [trackProps] = useRecoilState(trackState);
  const [user] = useRecoilState(userState);
  const setUser = useSetRecoilState(userState);
  const setArtist = useSetRecoilState(artistState);
  const setTrack = useSetRecoilState(trackState);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cookies = new Cookies();
        const token = cookies.get("access_token"); // Access the cookie value using proper syntax
        const response = await axios.get("https://api.spotify.com/v1/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        // Handle the response data here
        console.log(response.data);
        setUser(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        navigate("/");
      }
    };

    fetchData(); // Call the async function immediately
  }, []);

  const handleWrap = async () => {
    try {
      const response = await axios.get("http://localhost:3000/wrapper", {
        withCredentials: true,
      });

      const userData = response.data;
      setArtist(userData.topArtists);
      setTrack(userData.topTracks);

      navigate("/firstPage");
    } catch (error) {
      console.error("Error occurred:", error);
      navigate("/");
    }
  };
  const handleLogout = async () => {
    try {
      const cookies = new Cookies();
      cookies.remove("access_token");
      navigate("/");
    } catch (error) {
      console.error("Error occurred:", error);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white items-center">
      <div className="h-1/5 text-white flex items-center justify-between w-3/4">
        <div className="flex">
          <img src={spofifyLogo} width={40} height={40} alt="logo" />
          <h1 className="text-center uppercase mx-2 tracking-wider font-ProximaBold my-2">
            WRAPIFY
          </h1>
        </div>
        <div className="w-11 rounded-2xl flex justify-center items-center">
          
            <img
              src={user?.images && user.images[1]?.url}
              alt="User"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "20px",
                marginRight: "10px",
                border: "3px solid green",
              }}
            />
          <Button variant="ghost" onClick={handleLogout} className="button1" >Logout</Button>
        </div>
        
      </div>

      {/* <div>{user.display_name}</div> */}

      {/* <div><button onClick={handleLogout}>logout</button></div> */}

      <div className="flex justify-center items-center mt-8">
        <div>
          <Button className="glow-on-hover text-white" onClick={handleWrap}>
            Make a Wrap
          </Button>
        </div>
        <div></div>
      </div>

      {artistProps.length > 0 && (
        <div className="bg-black h-3/5 w-11/12 mt-6 text-white rounded-2xl">
          <div className="bg-transparent h-10 w-auto m-4 text-white">
            <p className="font-proximaBold text-2xl font-bold">
              Your Top Artists
            </p>
          </div>
          <div className="flex m-4 justify-between h-auto">
            {artistProps.map((val, index) => (
              <div
                className="bg-transparent h-40 w-40 rounded-2xl flex justify-center items-center flex-col"
                key={index}
              >
                <img
                  src={val.images[0].url}
                  alt="User"
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                <p>{val.name}</p>
              </div>
            ))}
          </div>
          {/* <div>hello</div> */}
          <div className="bg-transparent h-10 w-auto m-4 text-white">
            <p className="font-proximaBold text-2xl font-bold">
              Your Top Songs
            </p>
          </div>
          <div className="flex m-4 justify-between h-auto">
            {trackProps.map((val, index) => (
              <div
                className="bg-trasparent h-40 w-40 rounded-2xl flex justify-center items-center flex-col"
                key={index}
              >
                <img
                  src={val.album.images[0].url}
                  alt="User"
                  style={{
                    width: "80%",
                    height: "80%",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
                <p>{val.name}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Landing;
