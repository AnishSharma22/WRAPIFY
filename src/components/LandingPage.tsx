import axios from "axios";
import "./css/main.css";
import { useNavigate } from "react-router-dom";
import spotLogo from './images/wrapify_logo2.png';
import { useEffect } from 'react';
import { audioState, isPlayingState, loadingState, longArtistState, longTrackState, mediumArtistState, mediumTrackState, shortArtistState, shortTrackState, timeFrameState, topGenreState, userState } from '@/recoil/userState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import Cookies from "universal-cookie";
import Loader from "./slideshow/loader";



const LandingPage = () => {

    const navigate = useNavigate();
  const [audio] = useRecoilState(audioState);
  const  setIsPlaying = useSetRecoilState(isPlayingState);
  const [timeFrame, setTimeFrame] = useRecoilState(timeFrameState);
  const [shortArtist,setShortArtist] = useRecoilState(shortArtistState);
  const [mediumArtist,setMediumArtist] = useRecoilState(mediumArtistState);
  const [longArtist,setLongArtist] = useRecoilState(longArtistState);
  const [shortTrack,setShortTrack] = useRecoilState(shortTrackState);
  const [mediumTrack,setMediumTrack] = useRecoilState(mediumTrackState);
  const [longTrack,setLongTrack] = useRecoilState(longTrackState);
  const [topGenre,setTopGenre] = useRecoilState(topGenreState);
  const [user,setUser] = useRecoilState(userState);
  const [loading,setLoading] = useRecoilState(loadingState);

  const handleButtonClick = (timeframe : 'short_term' | 'medium_term' | 'long_term') => {
    setTimeFrame(timeframe);
  };

  const playMusic = () => {
    audio.play();
    setIsPlaying(true);
  };

  const stopMusic = () => {
    audio.pause();
    audio.currentTime = 0;
    setIsPlaying(false);
  };

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
        // console.log(response.data);
        setUser(response.data);
      } catch (error) {
        // Handle errors
        console.error("Error fetching data:", error);
        navigate("/");
      }
    };

    fetchData(); // Call the async function immediately
  }, []);


  useEffect(() => {
   stopMusic();
  }, []);

  const handleWrap = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`http://localhost:3000/wrapper`, {
        withCredentials: true,
      });

      const userData = response.data;
      // setArtist(userData.topArtists);
      // setTrack(userData.topTracks);
      setShortArtist(userData.topShortArtists);
      setMediumArtist(userData.topMediumArtists);
      setLongArtist(userData.topLongArtists);
      setShortTrack(userData.topShortTracks);
      setMediumTrack(userData.topMediumTracks);
      setLongTrack(userData.topLongTracks);
      setTopGenre(userData.topGenres);

      setLoading(false);
      playMusic();
      navigate("/first");
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

  if(loading){
    <Loader/>
  }else{
    return (
        <div className='parent-div fader-2 ' style={{background:"linear-gradient(rgb(0, 0, 0) 0%, #37503A 80%)",color:"white",fontFamily:"Poppins",overflowY:"auto",fontWeight:"500",height:"100vh"}}>
    
          <div className='head flex items-center ml-6 sm:ml-6 md:ml-4 lg:ml-20' style={{ position: 'relative', marginTop: '2rem' }} >
            <img src={spotLogo} alt="Logo" className='w-10 ssm:w-16' />
            <span className='ml-2 ssm:text-3xl text-xl text-[#1DB954]  font-semibold'>Wrapify®</span>
    
            <img src={user?.images && user.images[1]?.url} alt="Logo" className='w-10 ml-auto' style={{ borderRadius: '100%' }} />
            <button onClick={handleLogout} className='ml-4 text-sm mr-4 lg:mr-20 tapper' style={{ backgroundColor: '#2A2A2A', width: '6rem', borderRadius: '2rem', height: '2.5rem' }}>Logout</button>
          </div>
    
          <div className='flex items-center justify-center' style={{ position: 'relative', marginTop: '6rem', width: '100%' }} >
            <button onClick={handleWrap} className='button-85 h-14' style={{ fontWeight: '400' }}>Make My Wrap!</button>
          </div>
    
          <div className='mt-16 lg:ml-16'>
          <button
                className='timeframe tapper ml-4 text-sm mr-2'
                style={{
                    backgroundColor: timeFrame === 'short_term' ? '#10A928' : '#2A2A2A',
                    color: timeFrame === 'short_term' ? 'white' : '#10A928',
                    width: '6rem',
                    borderRadius: '3rem',
                    height: '2rem',
                }}
                onClick={() => handleButtonClick('short_term')}
                >
                4 Weeks
                </button>
                <button
                className='timeframe tapper ml-4 text-sm mr-2'
                style={{
                    backgroundColor: timeFrame === 'medium_term' ? '#10A928' : '#2A2A2A',
                    color: timeFrame === 'medium_term' ? 'white' : '#10A928',
                    width: '6rem',
                    borderRadius: '3rem',
                    height: '2rem',
                }}
                onClick={() => handleButtonClick('medium_term')}
                >
                6 Months
                </button>
                <button
                className='timeframe tapper ml-4 text-sm mr-2'
                style={{
                    backgroundColor: timeFrame === 'long_term' ? '#10A928' : '#2A2A2A',
                    color: timeFrame === 'long_term' ? 'white' : '#10A928',
                    width: '6rem',
                    borderRadius: '3rem',
                    height: '2rem',
                }}
                onClick={() => handleButtonClick('long_term')}
                >
                All Time
                </button>
          </div>
    
    
    
    
          <div className='mt-10 border-l-4 ml-6 lg:ml-20'>
            <div className='ml-4 text-2xl'>
              Your Top Artists
              <div className={`flex  flex-row xl:overflow-hidden ${shortArtist.length > 0 ? '-mx-2 overflow-x-scroll' : ''}`} style={{ width: '100%' }}>
              {shortArtist.length>0 ? timeFrame === 'short_term'
                  ? shortArtist.map((val, index) => (
                    <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                    <img src={val.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                    <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' ,textAlign:"center"}}>{val.name}</span>
                  </div>
                    ))
                  : timeFrame === 'medium_term'
                  ? mediumArtist.map((val, index) => (
                    <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                    <img src={val.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                    <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' ,textAlign:"center"}}>{val.name}</span>
                  </div>
                    ))
                  : longArtist.map((val, index) => (
                    <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                    <img src={val.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                    <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis' ,textAlign:"center"}}>{val.name}</span>
                  </div>
                    )) : 
                    <div className='flex justify-center flex-col mx-2' style={{ width: '25rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
                    <span className='sm:text-xl text-base ' style={{ fontWeight: '500', color: '#989898' }}>Start your wrap to view this item...</span>
                    </div>
                    }
              </div>
            </div>
          </div>
    
          <div className='mt-10 border-l-4 ml-6  lg:ml-20'>
            <div className='ml-4 text-2xl'>
              Your Top Songs
              <div className={`flex flex-row xl:overflow-hidden ${shortArtist.length > 0 ? '-mx-2 overflow-x-scroll' : ''}`} style={{ width: '100%' }}>
                {shortTrack.length>0 ?
                    timeFrame === 'short_term'
                    ? shortTrack.map((val, index) => (
                        <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                        <img src={val.album.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                        <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',textAlign:"center" }}>{val.name}</span>
                      </div>
                    )) : timeFrame ==='medium_term' 
                    ? mediumTrack.map((val, index) => (
                        <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                        <img src={val.album.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                        <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',textAlign:"center" }}>{val.name}</span>
                      </div>
                    )) : 
                    longTrack.map((val, index) => (
                        <div className='flex justify-center flex-col mx-2' style={{ width: '14rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }} key={index}>
                        <img src={val.album.images[0].url} alt="" style={{ width: '14rem', height: '14rem', objectFit: 'cover' }} />
                        <span style={{ fontWeight: '400', fontSize: '1rem', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis',textAlign:"center" }}>{val.name}</span>
                      </div>
                    )) 
                    :
                    <div className='flex justify-center flex-col mx-2' style={{ width: '25rem', height: '16rem', marginTop: '1.4rem', minWidth: '14rem' }}>
                        <span className='sm:text-xl text-base ' style={{ fontWeight: '500', color: '#989898' }}>Start your wrap to view this item...</span>
                    </div>
                }
              </div>
            </div>
          </div>
    
          {topGenre.length>0 && <div className='mt-10 border-l-4 ml-6  lg:ml-20'>
            <div className='ml-4 text-2xl'>
              Genres
              <div className='flex flex-row overflow-x-scroll -mx-2 xl:overflow-hidden mt-2' style={{ width: '100%' }}>
                <button className='genre-2 ml-1 text-sm' style={{}} disabled>{topGenre[0]}</button>
                <button className='genre-2 ml-4 text-sm sm:min-w-fit' style={{}} disabled>{topGenre[1]}</button>
                <button className='genre-2 ml-4 text-sm ssm:min-w-fit' style={{}} disabled>{topGenre[2]}</button>
                <button className='genre-2 ml-4 text-sm sm:min-w-fit' style={{}} disabled>{topGenre[3]}</button>
                <button className='genre-2 ml-4 text-sm sm:min-w-fit' style={{}} disabled>{topGenre[4]}</button>
    
              </div>
    
    
            </div>
          </div>}
    
    
    
    
          <div className="flex justify-center items-center h-20 text-xs ssm:text-sm" style={{ fontWeight: '300' }}>
            Made with &nbsp; <img className='w-6' src="https://em-content.zobj.net/source/skype/289/red-heart_2764-fe0f.png" alt="heart" height="1px" /> &nbsp; by&nbsp;<a style={{ fontWeight: '400', textDecoration: 'underline dotted' }} href="https://github.com/AnishSharma22/WRAPIFY" target="_blank"> Anish Sharma and Vibhor Sharma </a>
          </div>
    
    
        </div>
      )
  }
  
}

export default LandingPage