import { InstagramIcon } from "@animateicons/react/lucide";
import StarPattern from '../components/StarPattern';
import { GithubIcon } from "@animateicons/react/lucide";
import { LinkedinIcon } from "@animateicons/react/lucide";
import { TwitterIcon } from "@animateicons/react/lucide";
import ScrollFloat from '../animation/ScrollFloat';
import ScrollReveal from '../animation/ScrollReveal';
import CurvedLoop from '../animation/CurvedLoop';
import Folder from '../animation/Folder';
import { temp1, temp2, temp3, temp4, temp5 } from '../assets/assets';
// import TextScramble from '../animation/TextScramble';
// import TextLoop from '../components/motion-primitives/text-loop';

const HomePage = () => {
  return (
    <div className="flex flex-col relative overflow-hidden">
      <StarPattern />

      {/* MAIN CONTENT*/}
      <div className="absolute inset-0 left-1/2 top-[40vh]  transform -translate-x-1/2 -translate-y-1/2 pointer-events-none  h-[40vh] w-1/3 z-10 flex items-center justify-center flex-col">
        <div  className=" text-white w-full">
          <div id="font-rem" className="text-2xl font-semibold tracking-widest text-left">MOHAMMED HANIS</div>
          <div id="font-rem" className="font-bold text-7xl font-mono tracking-widest text-left"><span className="text-nowrap bg-gradient-to-r from-purple-500 via-green-500 to-green-400 text-transparent bg-clip-text">FULL STACK</span><br/> <span className="bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 text-transparent bg-clip-text">DEVELOPER</span>
          </div>
          <p id="font-rem" className="text-md mt-2 text-gray-400 text-center w-full  tracking-widest">
            Helping brands and businesses transform ideas into visually stunning digital products, design and develop immersive digital experiences that blend creativity, performance, and modern interaction.
          </p>
        </div>
        <div className=" top-0 left-1/2 mt-2 text-purple-500 text-nowrap">
          <GithubIcon className="mx-2 cursor-pointer" size={18} duration={1} />
          <InstagramIcon className="mx-2 cursor-pointer" size={18} duration={1} />
          <TwitterIcon className="mx-2 cursor-pointer" size={18} duration={1} />
          <LinkedinIcon className="mx-2 cursor-pointer" size={18} duration={1}/>
        </div>
        
      </div>

      {/*MAIN TEXT*/}
      <div className="pointer-events-auto text-center h-[40vh] pt-20 bg-black">
        <div className="inline-flex flex-wrap items-center justify-center gap-4 animate-fade-up">
          <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">STRATEGIC</p>
          <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">DESIGN<span className="text-cyan-400">.</span></p>
        </div>
        <div className="inline-flex flex-wrap items-center justify-center gap-4 animate-fade-up animate-fade-up-delay-200">
          <p id="font-rem" className="tracking-wider text-pretty text-2xl md:text-8xl text-center font-thin text-white">SEAMLESS</p>
          <p id="font-rem" className="inline-block tracking-wider text-2xl md:text-8xl text-center font-normal bg-gradient-to-r from-purple-500 via-blue-500 to-green-400 text-transparent bg-clip-text">DEVELOPMENT</p>
        </div>
      </div>

      {/*The Vision*/}
      <div id="font-rem" className="pb-56 px-16 text-black pt-[150px] bg-gradient-to-r from-purple-500 via-blue-500 to-green-500 flex flex-col justify-center relative">
          <ScrollFloat className="top-[28%] pt-60" animationDuration={1} ease='back.inOut(2)' scrollStart='center bottom+=50%' scrollEnd='bottom bottom-=40%' stagger={0.03}>
             The Vision  
          </ScrollFloat>
          <ScrollReveal className="" baseOpacity={0.1} enableBlur baseRotation={3} blurStrength={4}>
              I believe great digital experiences are built through the perfect balance of design, technology, and innovation. As a developer, I focus on creating scalable applications, smooth interactions, and visually refined interfaces that help transform ideas into meaningful online experiences.
          </ScrollReveal>
          <div className="absolute top-[70%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full text-black">
          <CurvedLoop  marqueeText="FULL STACK ✦ CREATIVE ✦ DEVELOPER ✦ MODERN WEB EXPERIENCE ✦ UI/UX" speed={2} curveAmount={400} direction="right" interactive className="custom-text-style"/>
          </div>

      </div>

      {/*SERVICES*/}
      <div className="px-16 bg-gradient-to-r from-purple-500 via-blue-500 to-green-500">
        <h2 id="font-rem" className=" text-9xl font-bold  mb-8 text-black pt-[150px] text-left ">I help companies to succeed on projects like:</h2>

        <div className="mt-44">
          <center className=" text-6xl font-bold text-black ">Websites &<br/> Landing pages</center>
          <center id="font-rem" className="mt-8  text-xl text-black font-semibold">Creating high-end and beautiful websites built to perform and convert.</center>

          <div className="w-full mt-8 flex justify-center items-center gap-4">
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp1} alt="Project 1" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp2} alt="Project 2" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp3} alt="Project 3" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp4} alt="Project 4" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp5} alt="Project 5" /></div>
          </div>
        </div>

        <div className="mt-48">
          <center className=" text-6xl font-bold text-black ">Visual Branding</center>
          <center id="font-rem" className="mt-8  text-xl text-black font-semibold">Helping brands find a distinctive visual language that truly stands out.</center>

          <div className="w-full mt-8 flex justify-center items-center gap-4">
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp1} alt="Project 1" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp2} alt="Project 2" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp3} alt="Project 3" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp4} alt="Project 4" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp5} alt="Project 5" /></div>
          </div>
        </div>

        <div className="mt-48">
          <center className=" text-6xl font-bold text-black ">Product Design <br/>Enhancement</center>
          <center id="font-rem" className="mt-8  text-xl text-black font-semibold">Bringing fresh ideas to turn complex products into intuitive experiences with an elevated visual layer.</center>

          <div className="w-full mt-8 flex justify-center items-center gap-4">
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp1} alt="Project 1" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp2} alt="Project 2" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp3} alt="Project 3" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp4} alt="Project 4" /></div>
            <div className="w-1/5 rounded-2xl"><img className="rounded-2xl" src={temp5} alt="Project 5" /></div>
          </div>
        </div>

        <div className="mt-48">
          <center className=" text-6xl font-bold text-black ">Webflow & <br/>Framer</center>
          <center id="font-rem" className="mt-8  text-xl text-black font-semibold">Building elegant and responsive projects featuring creative micro-interactions and seamless CMS hand-off.</center>
          <div className="select-none">
          <div className="min-h-screen pb-56 text-black  flex flex-col justify-center relative z-30 overflow-visible">
            <div className="flex items-center justify-center relative w-full" style={{ minHeight: '80vh' }}>
              <h2 id="font-rem" className="text-[7rem] md:text-[12rem] lg:text-[14rem] font-extrabold tracking-[0.4em] text-center flex items-center gap-6 leading-none max-w-full">
              <span className="text-[350px] pl-4">W</span>
              <span className="inline-flex items-center justify-center w-32 h-32 md:w-48 md:h-48 lg:w-56 lg:h-56 mr-20">
                <Folder size={3.5} gradient="linear-gradient(90deg, #a855f7, #3b82f6, #22c55e)" className="custom-folder inline-block" />
              </span>
              <span className="text-[350px]">r</span>
              <span className="text-[350px]">k</span>
              </h2>
            </div>
            </div>
          </div>
        </div>

        

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
      </div>


      {/*WORK*/}

        
        {/*VIDEO*/}

    </div>
  );
};

export default HomePage