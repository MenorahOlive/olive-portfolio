import Profile from "../../assets/profile-img.webp";
import Html from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/javascript.svg";
import nodeJS from "../../assets/node-js.svg";
import git from "../../assets/git.svg";
import React from "../../assets/react.svg";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const SkillDot = ({
  icon,
  colour,
  alt,
}: {
  icon: any;
  colour?: string;
  alt: string;
}) => {
  return (
    <div className="relative">
      <div
        className={`w-8 h-8 md:w-12 md:h-12 ${colour} rounded-full shadow-md flex items-center justify-center p-1.5 md:p-2`}
      >
        <div className="w-full h-full animate-spin-ccw flex items-center justify-center">
          <img
            src={icon}
            alt={alt}
            className="w-full h-full object-contain "
            loading="eager"
          />
        </div>
      </div>
    </div>
  );
};
const ProfileImage = () => {
  return (
    <div className="relative flex items-center justify-center w-[320px] h-[320px] md:w-[450px] md:h-[450px] xl:w-[500px] xl:h-[500px] transition-all duration-500">
      {/* Outer Circle */}
      <div className="absolute w-[100%] h-[100%] border border-black/10 md:border-black/20 rounded-full  -mt-10 md:-mt-16 ">
        <div className="absolute h-full w-full animate-spin-cw rotate-90 ">
          <div className="absolute top-1/4 left-0 -mt-2">
            <SkillDot icon={React} alt="react" colour="bg-pink-500/10" />
          </div>
        </div>
        <div className="absolute h-full w-full animate-spin-cw rotate-0">
          <div className="absolute top-1/3 left-0 -mt-8">
            <SkillDot icon={Html} alt="html" colour="bg-cyan-500/20" />
          </div>
        </div>
      </div>

      {/* Middle Circle */}
      <div className="absolute w-[75%] h-[75%] border border-black/20 md:border-black/40 rounded-full -mt-10 md:-mt-16">
        <div className="absolute h-full w-full animate-spin-cw rotate-90 ">
          <div className="absolute top-1/4 left-0 -mt-2 rotate-270">
            <SkillDot icon={CSS} alt="css" colour="bg-pink-500/20" />
          </div>
        </div>
        <div className="absolute h-full w-full animate-spin-cw rotate-270">
          <div className="absolute top-1/4 left-0 -mt-2 rotate-90">
            <SkillDot icon={nodeJS} alt="node" colour="bg-green-500/20" />
          </div>
        </div>
      </div>

      {/* Inner Circle */}
      <div className="absolute w-[50%] h-[50%] border border-black/40 md:border-black/60 rounded-full -mt-10 md:-mt-16">
        <div className="absolute h-full w-full animate-spin-cw rotate-0 ">
          <div className="absolute top-1/4 left-0 -mt-4 md:-mt-6">
            <SkillDot icon={JS} alt="js" colour="bg-cyan-500/20" />
          </div>
        </div>
        <div className="absolute h-full w-full animate-spin-cw rotate-180">
          <div className="absolute top-1/6 left-0 -mt-2">
            <SkillDot icon={git} alt="git" colour="bg-purple-500/20" />
          </div>
        </div>
      </div>

      {/* Actual Profile Photo */}
      <div className="relative z-10 overflow-hidden w-[220px] md:w-[350px] xl:w-auto -mb-20 md:-mb-28 xl:-mb-35 -mr-5">
        <img
          src={Profile}
          alt="Olive Menorah"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center text-primary-text px-10  lg:-mt-20 overflow-hidden">
      <div className="flex flex-col xl:flex-row items-center justify-around w-full gap-10 ">
        {/* Left Side: Text Content */}
        <div className="flex flex-col gap-6 md:gap-8 text-center xl:text-left items-center xl:items-start z-20">
          <h2 className="text-4xl md:text-5xl xl:text-6xl font-medium">
            Hi, I'm
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-4">
            <h1 className="text-5xl md:text-7xl xl:text-8xl  font-medium flex  flex-row ">
              Olive Menorah{" "}
            </h1>
          </div>

          <div className="flex flex-col gap-2   tracking-tighter">
            <p className="text-xl md:text-3xl xl:text-4xl  text-gray-500">
              &lt;Junior Software Engineer /&gt;
            </p>
            <p className="text-xl md:text-3xl xl:text-4xl  text-gray-500">
              &lt;Full Stack Developer /&gt;
            </p>
          </div>

          <div className="flex flex-wrap justify-center xl:justify-start gap-4 mt-4">
            <a href="#contact">
              <Button
                size="lg"
                className=" text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full cursor-pointer"
              >
                Contact Me
              </Button>
            </a>
            <a
              href="/Olive_Menorah_Resume.pdf"
              download="Olive_Menorah_Resume.pdf"
            >
              {" "}
              <Button
                size="lg"
                variant="outline"
                className="text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full hover:border-secondary-text hover:border cursor-pointer"
              >
                Download CV <Download className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>

        {/* Right Side: Animated Image */}
        <div className="flex items-center justify-center  w-full xl:w-1/3 mt-10">
          <ProfileImage />
        </div>
      </div>
    </section>
  );
};

export default Hero;
