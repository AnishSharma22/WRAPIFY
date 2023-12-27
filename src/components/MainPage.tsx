import { Link } from "react-router-dom";
import landingImage from './images/landing_page.png';
import octoImage from './images/Octocat.png';
import githubLogo from './images/GitHub_Logo.png';
import spofifyLogo from './images/spotify.png';
import vibhorLogo from './images/vibhor.jpeg';
import { Button } from "./ui/button";
import './css/auth.css';


const MainPage = () => {
  return (
    <div className="font-ProximaRegular bg-[#0d0d0d] text-white">
      <div className="fixed top-0 left-0 right-0 z-40 bg-[#0d0d0d]">
        <div className="flex flex-row max-w-[1280px] justify-between items-center mx-auto p-2">
          <div className="flex flex-row items-center">
            <img src={spofifyLogo} width={40} height={40} alt="logo" />
            

            <h1
              className="text-center uppercase mx-2 
              tracking-wider font-ProximaBold bg-[#0d0d0d]"
            >
              WRAPIFY
            </h1>
          </div>
          <div className="flex uppercase text-sm">
            
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          className="overflow-hidden pt-36 pb-20 mobile:pb-16  w-full 
        flex justify-center items-center "
        >
          <div
            className="cliped w-[600px] h-[300px] bg-[#2bb540]
          bg-gradient-to-r from-[#2bb] via-[#2bb540] to-yellow-200
           bg-opacity-80"
          ></div>
        </div>
        <div
          className="bg-[#0d0d0d] bg-opacity-30 pt-36 pb-20 mobile:pb-16 
          backdrop-blur-[70px] 
        absolute z-10 inset-0 max-w-[1280px] mx-auto 
         flex justify-center flex-col items-center"
        >
          <h1
            className="text-[70px] font-ProximaBold text-center font-bold
           leading-[5rem] mini-laptop:text-[60px] tablet:text-[50px] mini-laptop:leading-[4rem]
            tablet:leading-[4rem] mobile:text-[35px] mobile:leading-[2.5rem]"
          >
            Download & use Free
            <br /> Wrapify!
          </h1>
          <p className="text-center mt-4 max-w-[600px] mx-auto text-[18px] px-8">
            Explore & generate spotify wrap anywhere
            anytime with Wrapify.
          </p>
          <Link to="http://localhost:3000/login">
            <Button className="cursor-pointer shadow-md px-5 py-2 bg-[#2bb540] glow-on-hover rounded-3xl mt-6 w-fit">
              Get Started
            </Button>
          </Link> 
          
        </div>
      </div>
      <div>
        <div
          className=" bg-[#0d0d0d]  backdrop-blur-[50px] 
      max-w-[1280px] mx-auto mobile:hidden"
        >
          <div className="max-w-[1000px] mx-auto">
             <img
            src={landingImage}
            alt="image"
            className="rounded-md noDrag m-0 p-0"
            style={{ width: "1000px", height: "500px", objectFit: "contain" }}
            />

          </div>
        </div>
        <div className="overflow-hidden pl-10">
          <div className="hidden mobile:block relative h-[400px] w-[600px]">
          <img
                src={landingImage}
                alt="image"
                className="rounded-md noDrag m-0 p-0"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />

          </div>
        </div>
      </div>

      <div className="max-w-[1000px] mx-auto">
       <br /><br /> <hr />
        <h1 className="text-center text-3xl font-ProximaBold mt-10 mb-10 font-bold">
          Testimonials
        </h1>

        <div
          className="grid grid-cols-3 gap-4 mini-laptop:grid-cols-2 px-6
        tablet:grid-cols-1 mobile:grid-cols-1
        "
        >
          <div
            className="bg-gradient-to-tr to-[#a15c1c] 
          from-[#6a2009] py-4 px-6 rounded-md flex text-center 
          flex-col  items-center"
          >
            <div className=" mt-3 w-24 bg-transparent p-3 rounded-full text-center flex items-center">
            <img
                src={vibhorLogo}
                alt="logo"
                className="w-full h-full object-cover rounded-full"
            />
            </div>


            <h1 className="text-xl font-ProximaBold mb-2  "> - Vibhor Sharma</h1>
            <p className="font-light">
            Spot-Wrap has been a game-changer! It's purely dedicated to creating Spotify wraps across all devices. The simplicity in generating Spotify wraps for short, medium, or long terms is unparalleled. It's made my Spotify playlist curation effortless and fun!" - Emily
            </p>
          </div>
          <div
            className="bg-gradient-to-b from-[#8b0847] 
          to-[#580b64] py-4 px-6 rounded-md flex text-center 
          flex-col  items-center"
          >
            <div className=" mt-3 w-24 bg-transparent p-3 rounded-full text-center flex items-center">
            <img
                src={vibhorLogo}
                alt="logo"
                className="w-full h-full object-cover rounded-full"
            />
            </div>


            <h1 className="text-xl font-ProximaBold mb-2  "> - Vibhor Sharma</h1>
            <p className="font-light">
              Available for all screen Mobile, tablet, laptop and desktop. The
              app is made to give a user full experience of spotify client. it
              has almost same Ui as Spotify for every page.
            </p>
          </div>
          <div
            className="bg-gradient-to-tr to-[#0d2477] 
          from-[#522bbf] py-4 px-6 rounded-md flex text-center
           flex-col items-center"
          >
            <div className=" mt-3 w-24 bg-transparent p-3 rounded-full text-center flex items-center">
            <img
                src={vibhorLogo}
                alt="logo"
                className="w-full h-full object-cover rounded-full"
            />
            </div>


            <h1 className="text-xl font-ProximaBold mb-2  "> - Vibhor Sharma</h1>
            <p className="font-light">
              Available for all screen Mobile, tablet, laptop and desktop. The
              app is made to give a user full experience of spotify client. it
              has almost same Ui as Spotify for every page.
            </p>
          </div>
        </div>
        <div
          className="mt-10  py-10 border-t 
         items-center flex flex-col border-t-slate-800"
        >
          <p className="text-center">
            2023, Made by{" "}
            <Link to="https://github.com/AnishSharma22">
              <span className="underline text-[#2bb540] cursor-pointer">
                Anish Sharma
              </span>
            </Link>
          </p>
          <p className="text-sm mt-1 text-center">
            Tech stack: React-JS, Algolia, Nodejs and PostgreSQL.
          </p>
          <Link
            to="https://github.com/AnishSharma22"
            target="_blank"
          >
            <div className="mt-5 flex px-3 py-2 bg-[#fff] rounded-3xl">
              <div className="relative w-[40px] h-[30px]">
              <img
                src={octoImage}
                alt=""
                className="noDrag"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />

              </div>
              <div className="relative w-[70px] h-[30px] ">
              <img
                src={githubLogo}
                alt=""
                className="noDrag"
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                />

              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainPage