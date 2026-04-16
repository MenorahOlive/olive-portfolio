import Layout from "../Layout/Layout";
import Robot from "../../assets/robot.webp";
import React from "../../assets/react.svg";
import Astro from "../../assets/astro.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Vite from "../../assets/vite.svg";
import Tailwind from "../../assets/tailwind.svg";

const icons = [
  {
    src: React,
    alt: "React",
  },
  { src: Astro, alt: "Astro" },
  {
    src: Tailwind,
    alt: "Tailwind",
  },
  {
    src: Bootstrap,
    alt: "Bootstrap",
  },
  {
    src: Vite,
    alt: "Vite",
  },
];

const InfoCard = ({ icon, text }: { icon: any; text: string }) => {
  return (
    <>
      <div className="flex flex-col gap-5 justify-center items-center">
        <div className="bg-background-card w-25 h-30 md:w-35 xl:w-40 md:h-40 xl:h-50 rounded-2xl p-5 flex flex-col gap-5 md:gap-8 xl:gap-10 justify-start items-center hover:animate-wiggle  shadow-md origin-top transition-transform duration-500 ease-out cursor-pointer hover:scale-105">
          <div className="h-1 md:h-2 xl:h-3 w-10  md:w-12 xl:w-15 bg-white rounded-full"></div>
          <img
            src={icon}
            alt={text}
            className=" object-contain w-10 md:w-15 xl:w-20 h-auto"
            loading="lazy"
          />
        </div>
        <p className="text-secondary-text text-xl md:text-2xl max-w-[7ch] text-center">
          {text}
        </p>
      </div>
    </>
  );
};

const FrontendTechnologies = () => {
  return (
    <>
      <Layout title="Frontend Technologies" id="frontend-technologies">
        <div className="flex flex-col xl:flex-row justify-around items-center gap-10 w-full">
          {/* <div className="p-10 bg-purple-500/10  border border-purple-500/40 shadow-lg  shadow-fuchsia-100 rounded-full flex justify-center items-center aspect-square w-[30%]"> */}

          <div className="p-10 bg-background-card rounded-full flex justify-center mt-3 md:mt-10  items-center aspect-square  w-[35%] xl:w-[25%] relative  ">
            <img
              src={Robot}
              alt="Image of a robot"
              className="w-full h-auto object-contain scale-150 rounded-full  absolute -top-1/4"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-15 xl:gap-20">
            {icons.map((i, index) => (
              <InfoCard key={index} icon={i.src} text={i.alt} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default FrontendTechnologies;
