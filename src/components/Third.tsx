import { useNavigate } from 'react-router-dom';
import { useRecoilState} from 'recoil';
import { artistState, trackState } from '@/recoil/userState';
import { useEffect } from 'react';

const Third = () => {
  const [artistProps] = useRecoilState(artistState);
  const [trackProps] = useRecoilState(trackState);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/landingPage');
    }, 5000);

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className=" flex justify-center items-center  bg-black text-white h-screen">


      <div className='bg-red-500 w-3/4 h-3/4 flex justify-center items-center'>

        <div className='h-40 w-40'>
           <img src={artistProps[0].images[0].url }alt="" />
        </div>

        <div className='flex justify-center  flex-col bg-red-200 text-black w-1/5 h-2/5'>
          <h1 className='text-xl underline mb-2'>TOP ARTISTS</h1>
        {
          artistProps.map((val, index) => {
            return (
              <div key={index}>
                {index + 1}
                <span>. </span>
                {val.name}
              </div>
            );
          })}
        </div>

        {/* <div className='h-40 w-40'>
           <img src={trackProps[0].images[0].url }alt="" />
        </div> */}
        
          <div className='flex justify-center  flex-col bg-red-200 text-black w-1/5 h-2/5'>
          <h1 className='text-xl underline mb-2'>TOP SONGS</h1>
          {
          trackProps.map((val, index) => {
            return (
              <div key={index}>
                {index + 1}
                <span>. </span>
                {val.name}
              </div>
            );
          })}
          </div>

      </div>

      
      
    </div>
  );
};

export default Third;
