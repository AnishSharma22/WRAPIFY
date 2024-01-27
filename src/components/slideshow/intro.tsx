  // import { userState } from '@/recoil/userState';
  // import { useEffect } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { useRecoilState } from 'recoil';
  import { useEffect, useState } from 'react';
  import { useNavigate } from "react-router-dom";
  import heartSVG from '../images/heart.png'
  import repeatPNG from '../images/repeat.png';
  import backPNG from '../images/reverse.png';
  import pausePNG from '../images/pause.png';
  import nextPNG from '../images/next.png';
  import sharePNG from '../images/share.png';
  import '../css/main.css';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { boolState, userState } from '@/recoil/userState';


  // interface User {
  //   display_name?: string;
  //   email?: string;
  //   images?: { url?: string }[];
  //   // Add other properties here if they exist in the `userState`
  // }

  const TextOnly = () => {

    const [user] =  useRecoilState(userState);
    const setShowButton = useSetRecoilState(boolState);
    const navigate = useNavigate();

    useEffect(()=>{
      setShowButton(true);
    },[])
   
    const [filterValues, setFilterValues] = useState({
      invert: Math.random() * 100,
      sepia: Math.random() * 100,
      saturate: Math.random() * 2000,
      hueRotate: Math.random() * 360,
      brightness: 100,
      contrast: Math.random() * 200,
    });

    const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  
    const handleButtonClick = () => {
      setHasButtonBeenClicked(true);
      console.log('change');
      setFilterValues({
        invert: Math.random() * 100,
        sepia: Math.random() * 100,
        saturate: Math.random() * 2000,
        hueRotate: Math.random() * 360,
        brightness: 100,
        contrast: Math.random() * 200,
      });
    };

    const filterStyle = {
      filter: `invert(${filterValues.invert}%) sepia(${filterValues.sepia}%) saturate(${filterValues.saturate}%) hue-rotate(${filterValues.hueRotate}deg) brightness(${filterValues.brightness}%) contrast(${filterValues.contrast}%)`,
    };

    
    // const [user] = useRecoilState(userState);
    // const navigate = useNavigate();

    // useEffect(() => {
    //   const timeout = setTimeout(() => {
    //     navigate('/secondPage'); // Replace '/third' with the actual route path for Third component
    //   }, 3000); // 3000 milliseconds = 3 seconds

    //   return () => clearTimeout(timeout);
    // }, [navigate]);

    // Check if user exists and has required properties before accessing them
    return (
      <div className='super-div py-20'>

        <div className='pager'>

          <div className='fader w-full pt-0 h-20 flex justify-end flex-col items-center text-white' style={{ fontSize: '1.7rem', textAlign: 'center' }}>
            <a> <img className='icons press mr-10' src={sharePNG} style={{ height: '25px', alignSelf: 'end', position: 'absolute', top: '2rem', right: '0' }} alt="Share" /> </a>
            {/* <p>We noticed you have been recently obsessed with this song!</p> */}
            {/* <p>so far...</p> */}
          </div>

          <div className='limiter genre fader p-6 flex justify-center items-center text-white' style={{position: 'relative'}}>
            <p style={{maxWidth: '30rem', position: 'relative', width: 'auto',left: '5rem', fontSize:'2rem', textAlign: 'center' ,height: '10rem', whiteSpace: 'wrap', lineHeight: '2.5rem'}}>Welcome {user.display_name}, let's revisit your listening history!</p>
            <ul className='pl-12 ml-0' style={{ maxWidth: '20rem', maxHeight: '30vh', position: 'relative'}}>
            {/* <div className='mainImage' style={{ backgroundImage: `url(${MJPG})`}}> </div> */}
              <li>&nbsp;</li>
              {/* <p className='artist'>&nbsp; After Oceans</p> */}
              <li> &nbsp;</li>
              {/* <p className='artist'>&nbsp; Daniel Allan, Lyrah</p> */}
              <li>&nbsp;</li>
              {/* <p className='artist'>&nbsp; New Navy</p> */}
              <li>&nbsp;</li>
              {/* <p className='artist'>&nbsp; Drvmmer, Maelle</p> */}
              <li>&nbsp; </li>
              {/* <p className='artist'>&nbsp; The Cranberries</p> */}
            </ul>
          </div>

          <div className='wrapper' style={{ marginTop: '1rem' }}>
            <div className='flex justify-center items-center p-10  '>
            <a onClick={handleButtonClick} style={hasButtonBeenClicked ? filterStyle : {}}  ><img src={heartSVG} alt="Like" className='icons heart press icons w-6' style={{ minWidth: '1.5rem'}} /> </a>
              <div className='fader text-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <p style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem' }}>{user.display_name}</p>
                <p className='limiter' style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '0.34em' }}>Click next button to proceed!</p>
              </div>
              <img src={repeatPNG} alt="Repeat" className='icons w-5 ' />
            </div>


            <div className='grid fader justify-center items-center'>
              <input type="range" min="1" max="100" value="3" className='slider' style={{   background: 'linear-gradient(to right, #ffffff 2%, #B287D4 3%)', right: '0.9rem'}}/>


              {/* <input type="range" min="1" max="100" value="50" className='slider2' /> */}
            </div>
          </div>

          {/* <div className='flex justify-center items-center h-10'>
          <svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e71313" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f01919" stroke-width="0.24000000000000005"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div> */}


          <div className='flex justify-center items-start my-12 z-10'>
          <div className='flex justify-center items-center' >
            <button className='press' onClick={()=>navigate('/landingPage')}>
            <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
            </button>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <button className='press' onClick={()=>navigate('/second')}>
                <a> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a>
                </button>



            {/* <div className='flex justify-center items-center' >
              <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <a className='press'> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a> */}
              {/* <div className="circle"></div> */}
            </div>
          </div>
        </div>


      </div>

    );
  };

  export default TextOnly;



