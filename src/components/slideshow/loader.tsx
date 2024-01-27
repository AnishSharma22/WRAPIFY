  // import { userState } from '@/recoil/userState';
  // import { useEffect } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { useRecoilState } from 'recoil';
  // import { useState } from 'react';
  // import { useNavigate } from "react-router-dom";
  // import heartSVG from '../images/heart.png';
  // import repeatPNG from '../images/repeat.png';
  // import backPNG from '../images/reverse.png';
  // import pausePNG from '../images/pause.png';
  // import nextPNG from '../images/next.png';
  // import sharePNG from '../images/share.png';
  // import MJPG from '../images/memory.jpg';
  import '../css/main.css';


  // interface User {
  //   display_name?: string;
  //   email?: string;
  //   images?: { url?: string }[];
  //   // Add other properties here if they exist in the `userState`
  // }

  const Loader = () => {

    // const navigate = useNavigate();


    // const [filterValues] = useState({
    //   invert: Math.random() * 100,
    //   sepia: Math.random() * 100,
    //   saturate: Math.random() * 2000,
    //   hueRotate: Math.random() * 360,
    //   brightness: 100,
    //   contrast: Math.random() * 200,
    // });

    // const [hasButtonBeenClicked, setHasButtonBeenClicked] = useState(false);
  
    // const handleButtonClick = () => {
    //   setHasButtonBeenClicked(true);
    //   console.log('change');
    //   setFilterValues({
    //     invert: Math.random() * 100,
    //     sepia: Math.random() * 100,
    //     saturate: Math.random() * 2000,
    //     hueRotate: Math.random() * 360,
    //     brightness: 100,
    //     contrast: Math.random() * 200,
    //   });
    // };

    // const filterStyle = {
    //   filter: `invert(${filterValues.invert}%) sepia(${filterValues.sepia}%) saturate(${filterValues.saturate}%) hue-rotate(${filterValues.hueRotate}deg) brightness(${filterValues.brightness}%) contrast(${filterValues.contrast}%)`,
    // };

    
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
          <div className='skeleton  mr-10' style={{ height: '25px', width: '25px', alignSelf: 'end', position: 'absolute', top: '2rem', right: '0' }}></div>
            {/* <a> <img className='icons press mr-10' src={sharePNG} style={{ height: '25px', alignSelf: 'end', position: 'absolute', top: '2rem', right: '0' }} alt="Share" /> </a> */}
              <div className='skeleton-text skeleton'></div>
            
            {/* <p>so far...</p> */}
          </div>

          <div className='limiter genre fader p-6 flex justify-center items-center text-white' style={{position: 'relative'}}>
            <div className='skeleton' style={{ minWidth: '20rem', minHeight: '30vh', width: '21rem', height: '31vh', position: 'relative', left: '5rem', borderRadius: '0.235rem'}}></div>
            <ul className='list-decimal pl-12 ml-0' style={{ maxWidth: '20rem', maxHeight: '30vh', position: 'relative', visibility: 'hidden'}}>

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
            <div className='skeleton   w-6' style={{ minWidth: '1.7rem', height: '1.7rem' }}></div>

            {/* <a onClick={handleButtonClick} style={hasButtonBeenClicked ? filterStyle : {}}  ><img src={heartSVG} alt="Like" className='icons heart press w-10 icons w-6' style={{ minWidth: '1.5rem'}} /> </a> */}
              <div className='fader text-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
              <div className='skeleton-text skeleton' style={{ fontSize: '1.3em', textAlign: 'center', width: '15rem', margin: '0 4rem 0 4rem' }}></div>

                {/* <p style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem' }}>Memory Reboot</p> */}

                <div className='skeleton-text skeleton' style={{ fontSize: '1.3em', textAlign: 'center', width: '8rem', height: '1rem', margin: '0 4rem 0 4rem', marginTop: '0.34em' }}></div>
                {/* <p className='limiter' style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '0.34em' }}>VØJ, Narvent</p> */}
              </div>
              <div className='skeleton  w-5' style={{ minWidth: '1.7rem', height: '1.7rem' }}></div>
              {/* <img src={repeatPNG} alt="Repeat" className='icons w-5 ' /> */}
            </div>


            <div className='grid justify-center items-center'>
            <div className='skeleton-text skeleton' style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem', height: '1rem'}}></div>

              {/* <input type="range" min="1" max="100" value="50" className='slider' /> */}
              {/* <input type="range" min="1" max="100" value="50" className='slider2' /> */}
            </div>
          </div>

          <div className='flex justify-center items-start my-12 z-10'>
          <div className='flex justify-center items-center' >
          <div className='skeleton-text skeleton' style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem', height: '3rem'}}></div>

            {/* <button className='press' onClick={()=>navigate('/zero')}>
            <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
            </button>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <button className='press' onClick={()=>navigate('/first')}>
                <a> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a>
                </button> */}
              {/* <div className="circle"></div> */}
            </div>
          </div>
        </div>


      </div>

    );
  };

  export default Loader;



