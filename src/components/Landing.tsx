import axios from "axios";
import { Button } from "./ui/button";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  artistState,
  trackState,
  userState,
} from "@/recoil/userState.tsx";
import "./css/auth.css";
import spofifyLogo from "./images/spotify.png";
import { useEffect } from "react";
import Cookies from 'universal-cookie';

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
            const token = cookies.get('access_token'); // Access the cookie value using proper syntax
            const response = await axios.get('https://api.spotify.com/v1/me', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            // Handle the response data here
            console.log(response.data);
            setUser(response.data);
        } catch (error) {
            // Handle errors
            console.error('Error fetching data:', error);
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
    }
  };  
  const handleLogout = async () => {
    try {
      navigate('/mainPage');
    } catch (error) {
      console.error("Error occurred:", error);
    }
  }

  return (
    <div className="flex flex-col h-screen bg-black text-white items-center">
      <div className="h-1/5 text-white flex items-center justify-between w-3/4">
        <div className="flex">
          <img src={spofifyLogo} width={40} height={40} alt="logo" />
          <h1 className="text-center uppercase mx-2 tracking-wider font-ProximaBold my-2">
            SPOT-WRAP
          </h1>
        </div>
        <div className="w-20 rounded-2xl">
          <div>name:{user.display_name   }</div>
          <img src={user?.images && user.images[1]?.url} alt="User" />
          <div><button onClick={handleLogout}>logout</button></div>
        </div>
      </div>

      
      <div className="flex justify-center items-center mt-8">
        {" "}
        <Button className="glow-on-hover text-white" onClick={handleWrap}>
          Make a Wrap
        </Button>
      </div>
      <div className="bg-red-200 h-40 w-40 mt-20 text-black">
        {artistProps.length}
        <br />
        {trackProps.length}
      </div>

    </div>
  );
};

export default Landing;
