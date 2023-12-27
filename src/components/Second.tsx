import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Second = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/thirdPage'); // Replace '/third' with the actual route path for Third component
    }, 3000); // 3000 milliseconds = 3 seconds

    return () => clearTimeout(timeout);
  }, [navigate]);

  return (
    <div className="grid place-items-center h-screen bg-black text-white ">
      Spotify wrapped !!
    </div>
  );
};

export default Second;