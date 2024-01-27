import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./components/MainPage";
import { RecoilRoot } from "recoil";
import TextOnly from "./components/slideshow/intro";
import Single from "./components/slideshow/topSongMonth";
import TopFiveSongMonth from "./components/slideshow/topFiveSongMonth";
import TopFiveArtMonth from "./components/slideshow/topFiveArtMonth";
import TopFiveArtSixMonth from "./components/slideshow/topFiveArtSixMonth";
import TopFiveSongSixMonth from "./components/slideshow/topFiveSongSixMonth";
import Guess from "./components/slideshow/Guess";
import TopSong from "./components/slideshow/topSong";
import GuessArt from "./components/slideshow/GuessArt";
import TopArt from "./components/slideshow/topArt";
import TopFiveArt from "./components/slideshow/topFiveArt";
import TopFiveSong from "./components/slideshow/topFiveSong";
import Genre from "./components/slideshow/genre";
import LandingPage from "./components/LandingPage";

const App = () => {
  return (
    <div>
      <Router>
        <RecoilRoot>
          <Routes>
            <Route path={"/"} element={<MainPage />} />
            <Route path={"/landingPage"} element={<LandingPage />} />
            <Route path={"/first"} element={<TextOnly />} />
            <Route path={"/second"} element={<Single />} />
            <Route path={"/third"} element={<TopFiveSongMonth />} />
            <Route path={"/fourth"} element={<TopFiveArtMonth />} />
            <Route path={"/fifth"} element={<TopFiveArtSixMonth />} />
            <Route path={"/sixth"} element={<TopFiveSongSixMonth />} />
            <Route path={"/seventh"} element={<Guess />} />
            <Route path={"/eigth"} element={<TopSong />} />
            <Route path={"/ninth"} element={<GuessArt />} />
            <Route path={"/tenth"} element={<TopArt />} />
            <Route path={"/eleventh"} element={<TopFiveArt />} />
            <Route path={"/twel"} element={<TopFiveSong />} />
            <Route path={"/thirteen"} element={<Genre />} />            
          </Routes>
        </RecoilRoot>
      </Router>
    </div>
  );
};

export default App;
