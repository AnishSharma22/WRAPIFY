
  import { useState,useEffect,useRef } from 'react';
  import ColorThief from 'colorthief';
  import { useNavigate } from "react-router-dom";
  import heartSVG from '../images/heart.png';
  import repeatPNG from '../images/repeat.png';
  import backPNG from '../images/reverse.png';
  import pausePNG from '../images/pause.png';
  import nextPNG from '../images/next.png';
  import sharePNG from '../images/share.png';
  import '../css/main.css';
import { useRecoilState } from 'recoil';
import { longArtistState } from '@/recoil/userState';


  const TopArt = () => {

    const [longArtist] = useRecoilState(longArtistState);
    const imageRef = useRef(null);
    const navigate = useNavigate();


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

    useEffect(() => {
      const fetchAndPrintColors = async () => {
        try {
          const colorThief = new ColorThief();
          const img = imageRef.current;
    
          if (img.complete) {
            console.log("in");
            const colorPalette = await colorThief.getPalette(img, 3);
            console.log('Color Palette:', colorPalette);
    
            // Extract the RGB values for the three dominant colors
            console.log("in1");

            const color1 = `rgb(${colorPalette[0][0]}, ${colorPalette[0][1]}, ${colorPalette[0][2]})`;
            // const color2 = `rgb(${colorPalette[1][0]}, ${colorPalette[1][1]}, ${colorPalette[1][2]})`;
            const color2 = `rgb(${colorPalette[2][0]}, ${colorPalette[2][1]}, ${colorPalette[2][2]})`;
            const color3 = `rgb(0,0,0)`;
    
            console.log("in2")

            // Apply gradient background to the super-div
            const superDiv = document.querySelector('.super-div') as HTMLDivElement | null;
            if (superDiv) {
              console.log("in3")
              superDiv.style.background = `linear-gradient(180deg, ${color1} 0%, ${color2} 45%, ${color3} 100%)`;
            }
          } else {
            img.addEventListener('load', async function () {
              const colorPalette = await colorThief.getPalette(img, 3);
              console.log('Color Palette:', colorPalette);
    
              // Extract the RGB values for the three dominant colors
              const color1 = `rgb(${colorPalette[0][0]}, ${colorPalette[0][1]}, ${colorPalette[0][2]})`;
            // const color2 = `rgb(${colorPalette[1][0]}, ${colorPalette[1][1]}, ${colorPalette[1][2]})`;
            const color2 = `rgb(${colorPalette[2][0]}, ${colorPalette[2][1]}, ${colorPalette[2][2]})`;
            const color3 = `rgb(0,0,0)`;
    
              // Apply gradient background to the super-div
              const superDiv = document.querySelector('.super-div') as HTMLDivElement | null;
              if (superDiv) {
                superDiv.style.background = `linear-gradient(180deg, ${color1} 0%, ${color2} 45%, ${color3} 100%)`;
              }
            });
          }
        } catch (error) {
          console.error('Error fetching or processing colors:', error);
        }
      };
    
      fetchAndPrintColors();
    }, []);
    
  
    return (
      <div className='super-div py-20'>

        <div className='pager'>

          <div className='fader w-full pt-0 h-20 flex justify-end flex-col items-center text-white' style={{ fontSize: '1.7rem', textAlign: 'center' }}>
            <a> <img className='icons press mr-10' src={sharePNG} style={{ height: '25px', alignSelf: 'end', position: 'absolute', top: '2rem', right: '0' }} alt="Share" /> </a>
            <p>Your most streamed artist of all time is</p>
            {/* <p>so far...</p> */}
          </div>

          <div className=' genre fader p-6 flex justify-center items-center text-white' style={{position: 'relative'}}>
            <ul className='limiter list-decimal pl-12 ml-0' style={{ maxWidth: '20rem', maxHeight: '30vh', position: 'relative'}}>
            <div className='mainImage' >
            <img
                ref={imageRef}
                src={longArtist[0].images[0].url}
                alt=""
                crossOrigin="anonymous"
              />
               </div>
            
              <li>&nbsp;</li>
              <li> &nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp;</li>
              <li>&nbsp; </li>
            </ul>
          </div>

          <div className='wrapper' style={{ marginTop: '1rem' }}>
            <div className='flex justify-center items-center p-10  '>
            <a onClick={handleButtonClick} style={hasButtonBeenClicked ? filterStyle : {}}  ><img src={heartSVG} alt="Like" className='icons heart press icons w-6' style={{ minWidth: '1.5rem'}} /> </a>
              <div className='fader text-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <p style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem' }}>{longArtist[0].name}</p>
                <p className='limiter' style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '0.34em', visibility: 'hidden'}}>VØJ</p>
              </div>
              <img src={repeatPNG} alt="Repeat" className='icons w-5 fader' />
            </div>


            <div className='grid fader justify-center items-center'>
              <input type="range" min="1" max="100" value="76" className='slider' style={{   background: 'linear-gradient(to right, #ffffff 2%, #B287D4 76%)', right: '0.9rem'}}/>
            </div>
          </div>


          <div className='flex justify-center items-start my-12 z-10'>
          <div className='flex justify-center items-center' >
            <button className='press' onClick={()=>navigate('/ninth')}>
            <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
            </button>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <button className='press' onClick={()=>navigate('/eleventh')}>
                <a> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a>
                </button>
            </div>
          </div>
        </div>


      </div>

    );
  };

  export default TopArt;



