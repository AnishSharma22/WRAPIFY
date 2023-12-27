import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './components/MainPage';
import Landing from './components/Landing';
import First from './components/First';
import Second from './components/Second';
import Third from './components/Third';
import {RecoilRoot} from 'recoil';




const App = () => {

  

  return (
    <div>
      <Router>
      <RecoilRoot>
        <Routes>
          <Route path={"/"} element={<MainPage />} />
          <Route path={"/landingPage"} element={<Landing />} />
          <Route path={"/firstPage"} element={<First />} />
          <Route path={"/secondPage"} element={<Second />} />
          <Route path={"/thirdPage"} element={<Third />} />
        </Routes>
      </RecoilRoot>
    </Router>
      
    </div>
  );
};

export default App;
