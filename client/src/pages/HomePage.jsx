import { MailIcon } from "@animateicons/react/lucide";
import { InstagramIcon } from "@animateicons/react/lucide";
import StarPattern from '../components/StarPattern';
import { GithubIcon } from "@animateicons/react/lucide";
import { LinkedinIcon } from "@animateicons/react/lucide";
import { TwitterIcon } from "@animateicons/react/lucide";
import { FacebookIcon } from "@animateicons/react/lucide";
import { ShareIcon } from "@animateicons/react/lucide";
// import TextScramble from '../animation/TextScramble';
// import TextLoop from '../components/motion-primitives/text-loop';

const HomePage = () => {
  return (
    <div className="relative">
      <StarPattern />

      <div  className=" text-white w-1/3 h-1/4 absolute z-10 top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div id="font-rem" className="text-2xl font-semibold tracking-widest text-left">MOHAMMED HANIS</div>
          <div id="font-rem" className="font-bold text-7xl font-mono tracking-widest text-left"><span className="text-nowrap bg-gradient-to-r from-purple-500 via-green-500 to-green-400 text-transparent bg-clip-text">FULL STACK</span><br/> <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 text-transparent bg-clip-text">DEVELOPER</span></div><br/>
        <p id="font-rem" className="text-md text-gray-400 text-left tracking-wider">
        Helping brands and businesses transform ideas into visually stunning digital products, design and develop immersive digital experiences that blend creativity, performance, and modern interaction.
        </p>

        <div className="absolute top-[380px] left-1/2 transform -translate-x-1/2 z-10 text-purple-500 text-nowrap">
          <TwitterIcon className="mx-2" size={30} duration={1} />
          <MailIcon className="mx-2" size={30} duration={1} />
          <InstagramIcon className="mx-2" size={30} duration={1} />
          <GithubIcon className="mx-2" size={30} duration={1} />
          <LinkedinIcon className="mx-2" size={30} duration={1}/>
          <FacebookIcon sclassName="mx-2" size={30} duration={1}/>
          <ShareIcon className="mx-2" size={30} duration={1}/>
         </div>

      </div>
      

      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 text-nowrap top-1/3">
        <div className="pointer-events-auto text-center transform -translate-y-1/2">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 animate-fade-up">
            <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">STRATEGIC</p>
            <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">DESIGN<span className="text-cyan-400">.</span></p>
          </div><br></br>
          <div className="inline-flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-200">
            <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">SEAMLESS</p>
            <p id="font-rem" className="inline-block tracking-wider text-2xl md:text-8xl text-center font-normal bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 text-transparent bg-clip-text">DEVELOPMENT</p>
          </div>
        </div>
      </div>

      <div className="bg-black/30 backdrop-blur-sm">
        HIiiii<br></br>



dsfsdfsdfsd<br></br>


fdsfsdf<br></br>

fdsfsdfddddddddddddddddddd<br></br>
ssssssssssssssddsf<br></br>
sf<br></br>
fs<br></br>
f<br></br>
f<br></br>
d<br></br>
fd<br></br>
fd
fd<br></br>
sf<br></br>
d<br></br>


        fdfd
      </div>
    </div>
  );
};

export default HomePage