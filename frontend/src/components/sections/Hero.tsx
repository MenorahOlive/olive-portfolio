import Email from "../../assets/Email.png";
import GitHub from "../../assets/GitHub.png";
import Phone from "../../assets/Phone.png";
import LinkedIn from "../../assets/LinkedIn.png";
import Profile from "../../assets/profile-img.png";
import Emoji from "../../assets/emoji.png";
import Html from "../../assets/html.svg";
import CSS from "../../assets/css.svg";
import JS from "../../assets/javascript.svg";
import nodeJS from "../../assets/node-js.svg";
import git from "../../assets/git.svg";
import React from "../../assets/react.svg";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

const icons = [
  {
    src: LinkedIn,
    alt: "LinkedIn Icon",
  },
  {
    src: GitHub,
    alt: "Github Icon",
  },
  {
    src: Phone,
    alt: "Phone Icon",
  },
  {
    src: Email,
    alt: "Mail Icon",
  },
];

const SocialIcons = ({ icon, alt }: { icon: any; alt: string }) => {
  return (
    <>
      <img
        src={icon}
        alt={alt}
        className="w-auto h-auto object-contain cursor-pointer hover:scale-105 hover:opacity-70 transition duration-300 ease-in-out"
      />
    </>
  );
};

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
        className={`w-12 h-12 ${colour} rounded-full shadow-md flex items-center justify-center p-2`}
      >
        <div className="w-full h-full animate-spin-ccw flex items-center justify-center">
          <img src={icon} alt={alt} className="w-full h-full object-contain" />
        </div>
      </div>
    </div>
  );
};
const ProfileImage = () => {
  return (
    <>
      <div className="relative flex items-center justify-center w-[500px] h-[500px] ">
        <div className="absolute w-[100%] h-[100%] border border-black/20 rounded-full  -mt-16">
          <div className="absolute h-full w-full animate-spin-cw bg-rotate-165 ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 ">
              <SkillDot icon={React} alt="html" colour="bg-pink-500/10" />
            </div>
          </div>
          <div className="absolute h-full w-full animate-spin-cw rotate-0">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 ">
              <SkillDot icon={Html} alt="html" colour="bg-cyan-500/20" />
            </div>
          </div>
        </div>

        <div className="absolute w-[75%] h-[75%] border border-black/40 rounded-full   -mt-16 ">
          <div className="absolute h-full w-full animate-spin-cw rotate-0  ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-100">
              <SkillDot icon={CSS} alt="html" colour="bg-pink-500/20" />
            </div>
            {/*This pink is the only one facing upwards*/}
          </div>
          <div className="absolute h-full w-full animate-spin-cw  rotate-0">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-100">
              <SkillDot icon={nodeJS} alt="html" colour="bg-green-500/20" />
            </div>
          </div>
        </div>

        <div className="absolute w-[50%] h-[50%] border border-black/60 rounded-full -mt-16">
          <div className="absolute h-full w-full animate-spin-cw  rotate-495 ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-100">
              <SkillDot icon={JS} alt="html" colour="bg-cyan-500/20" />
            </div>
          </div>
          <div className="absolute h-full w-full animate-spin-cw rotate-260 ">
            <div className="absolute top-1/2 left-0 -translate-x-1/2 opacity-100">
              <SkillDot icon={git} alt="html" colour="bg-purple-500/20" />
            </div>
          </div>
        </div>

        <div className="relative z-10  overflow-hidden -mb-28 -mr-5">
          <img
            src={Profile}
            alt="Profile picture of Olive Menorah"
            className="w-full h-full object-cover"
          ></img>
        </div>
      </div>
    </>
  );
};

const Hero = () => {
  return (
    <>
      <section className="w-full h-screen text-primary-text">
        <nav className="flex flex-row justify-between  p-10">
          <div className="flex flex-row gap-5 ">
            <p className="text-2xl cursor-pointer hover:underline hover:scale-105 hover:text-gray-600 transition duration-300 ease-in-out">
              Home
            </p>
            <p className="text-2xl cursor-pointer hover:underline  hover:scale-105 hover:text-gray-600 transition duration-300 ease-in-out">
              Contact
            </p>
          </div>
          <h2 className="font-bold text-4xl">Olive Menorah</h2>
          <div className="flex flex-row gap-3">
            {icons.map((i) => (
              <SocialIcons key={i.alt} icon={i.src} alt={i.alt} />
            ))}
          </div>
        </nav>
        <div className="flex flex-row items-center justify-around py-10 ">
          <div className="flex flex-col gap-10">
            <h2 className="text-6xl">Hi, I'm</h2>
            <span className="flex flex-row justify-center items-center">
              <h1 className="text-8xl">Olive Menorah</h1>
              <img
                src={Emoji}
                alt="Emoji of a woman typing on a computer"
                className="w-auto h-auto"
              ></img>
            </span>
            <div className="flex gap-3 flex-col">
              <p className="text-4xl">&lt;Junior Software Engineer /&gt;</p>
              <p className="text-4xl">&lt;Full Stack Developer /&gt;</p>
            </div>
            <div className="flex gap-3">
              <Button size="lg">Contact Me</Button>
              <Button size="lg">
                Download CV <Download />
              </Button>
            </div>
          </div>
          <ProfileImage />
        </div>
      </section>
    </>
  );
};

export default Hero;
