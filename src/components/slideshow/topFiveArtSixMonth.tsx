  // import { userState } from '@/recoil/userState';
  // import { useEffect } from 'react';
  // import { useNavigate } from 'react-router-dom';
  // import { useRecoilState } from 'recoil';
  import { useState,useEffect,useRef } from 'react';
  import ColorThief from 'colorthief';
   import heartSVG from '../images/heart.png'
  import repeatPNG from '../images/repeat.png';
  import backPNG from '../images/reverse.png';
  import pausePNG from '../images/pause.png';
  import nextPNG from '../images/next.png';
  import sharePNG from '../images/share.png';
  import '../css/main.css';
import { useNavigate } from 'react-router-dom';
import { useRecoilState} from 'recoil';
import { mediumArtistState, userState } from '@/recoil/userState';


  // interface User {
  //   display_name?: string;
  //   email?: string;
  //   images?: { url?: string }[];
  //   // Add other properties here if they exist in the `userState`
  // }

  const TopFiveArtSixMonth = () => {

    const imageRef = useRef(null);
    const [user] = useRecoilState(userState);
    const [mediumArtist] = useRecoilState(mediumArtistState);
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
            <p>Your magnus opus of 6 months</p>
          </div>

          <div className=' genre p-6 flex justify-center items-center text-white' style={{position: 'relative'}}>
            <ul className='limiter list-decimal pl-12 border-l-2 border-white ml-20' style={{ maxWidth: '20rem', maxHeight: '291px', position: 'relative', height:'291px'}}>
              <div className='imagePlace' style={{ backgroundImage: `url(${mediumArtist[0].images[0].url})`, height:'4.2rem'}}>
              <img
                ref={imageRef}
                src={mediumArtist[2].images[0].url}
                alt=""
                crossOrigin="anonymous"
                style={{visibility:"hidden"}}
              />
                 </div>
              <li>&nbsp;{mediumArtist[0].name}</li>
              {/* <p className='artist'>&nbsp; After Oceans</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${mediumArtist[1].images[0].url})`, top: '4.2rem'}}> </div>
              <li> &nbsp;{mediumArtist[1].name}</li>
              {/* <p className='artist'>&nbsp; Daniel Allan, Lyrah Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum, aperiam corporis beatae libero vero inventore expedita totam doloremque odit accusamus tempora modi necessitatibus molestias laboriosam ad. Dolorum, tempore nesciunt.</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${mediumArtist[2].images[0].url})`, top: '7.7rem'}}> </div>
              <li>&nbsp;{mediumArtist[2].name}</li>
              {/* <p className='artist'>&nbsp; New Navy</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${mediumArtist[3].images[0].url})`, top: '11.2rem'}}> </div>
              <li>&nbsp;{mediumArtist[3].name}</li>
              {/* <p className='artist'>&nbsp; Drvmmer, Maelle</p> */}
              <div className='imagePlace' style={{ backgroundImage: `url(${mediumArtist[4].images[0].url})`, top: '14.7rem'}}> </div>
              <li>&nbsp;{mediumArtist[4].name}</li>
              {/* <p className='artist'>&nbsp; The Cranberries</p> */}
              <p className='artist' style={{visibility: 'hidden'}}>&nbsp; Daniel Allan, Lyrah Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim harum, aperiam corporis beatae libero vero inventore expedita totam doloremque odit accusamus tempora modi necessitatibus molestias laboriosam ad. Dolorum, tempore nesciunt.</p>

            </ul>
          </div>

          <div className='wrapper' style={{ marginTop: '1rem' }}>
            <div className='flex justify-center items-center p-10 ' style={{ paddingTop: '1.5rem' }}>
            <a onClick={handleButtonClick} style={hasButtonBeenClicked ? filterStyle : {}}  ><img src={heartSVG} alt="Like" className='icons heart press icons w-6' style={{ minWidth: '1.5rem'}} /> </a>
              <div className='fader text-white' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '20rem' }}>
                <p style={{ fontSize: '1.3em', textAlign: 'center', width: '20rem' }}>Top 5 Artists of Six Months!</p>
                <p className='limiter' style={{ textAlign: 'center', fontSize: '0.8em', marginTop: '0.34em' }}>{user.display_name}</p>
              </div>
              <img src={repeatPNG} alt="Repeat" className='icons w-5 ' />
            </div>


            <div className='grid fader justify-center items-center'>
              {/* <input type="range" min="1" max="100" value="50" className='slider' /> */}
              <input type="range" min="1" max="100" value="33" className='slider' style={{   background: 'linear-gradient(to right, #ffffff 2%, #B287D4 33%)', right: '0.9rem'}}/>

              {/* <input type="range" min="1" max="100" value="50" className='slider2' /> */}
            </div>
          </div>

          {/* <div className='flex justify-center items-center h-10'>
          <svg width="256px" height="256px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#e71313" transform="matrix(1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#f01919" stroke-width="0.24000000000000005"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g><g id="SVGRepo_iconCarrier"> <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ff00ae" stroke-width="0.24000000000000005" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
        </div> */}


          <div className='flex justify-center items-start my-12 z-10'>
            <div className='flex justify-center items-center' >
            <button className='press' onClick={()=>navigate('/fourth')}>
            <a className='press' > <img className='icons' src={backPNG} style={{ height: '25px', marginRight: '3rem' }} alt="" /></a>
            </button>
              <img className='icons' src={pausePNG} style={{ height: '40px' }} alt="" />
              <button className='press' onClick={()=>navigate('/sixth')}>
                <a> <img className='icons' src={nextPNG} style={{ height: '25px', marginLeft: '3rem' }} alt="" /></a>
                </button>
              {/* <div className="circle"></div> */}
            </div>
          </div>
        </div>


      </div>

    );
  };

  export default TopFiveArtSixMonth;



