import { userState } from '@/recoil/userState';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRecoilState } from 'recoil';

// interface User {
//   display_name?: string;
//   email?: string;
//   images?: { url?: string }[];
//   // Add other properties here if they exist in the `userState`
// }

const First = () => {
  const [user] = useRecoilState(userState);
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/secondPage'); // Replace '/third' with the actual route path for Third component
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  // Check if user exists and has required properties before accessing them
  return (
   
      <div>
          <div>
            <h1 className="scroll-m-20 text-5xl font-semibold tracking-tight">
                Hello {user?.display_name} 
                
            </h1>
          </div>
      
     
      <div className="flex flex-col bg-black text-white h-screen justify-center items-center ">
          
          <div className='my-4'>
                <p>Its Wrapped time. </p>
                <p>Ready? Let's do this.</p>
          </div>    
      </div>
      
    </div>

    
  );
};

export default First;



