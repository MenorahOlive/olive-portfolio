import Layout from "../Layout/Layout";
import React from "../../assets/react.svg";
import Astro from "../../assets/astro.svg";
import Bootstrap from "../../assets/bootstrap.svg";
import Vite from "../../assets/vite.svg";
import Tailwind from "../../assets/tailwind.svg";
import illustration from "../../assets/illustration.jpeg";

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
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="bg-background-card w-40 h-50 rounded-2xl p-5 flex flex-col gap-10 justify-start items-center">
          <div className="h-3 w-15 bg-white rounded-full"></div>
          <img src={icon} alt={text} className=" object-contain w-20 h-auto" />
        </div>
        <p className="text-secondary-text text-2xl">{text}</p>
      </div>
    </>
  );
};

const BackendTechnologies = () => {
  return (
    <>
      <Layout title="Backend Technologies">
        <div className="flex flex-row-reverse justify-around items-center gap-10 w-full">
          {/* <div className="p-10 bg-purple-500/10  border border-purple-500/40 shadow-lg  shadow-fuchsia-100 rounded-full flex justify-center items-center aspect-square w-[30%]"> */}
          <div className=" bg-background-card rounded-full flex justify-center items-center aspect-square w-[30%]  ">
            <img
              src={illustration}
              alt="Image of a robot"
              className="w-full h-auto object-cover  rounded-full aspect-square "
            />
          </div>

          <div className="grid grid-cols-3 gap-20">
            {icons.map((i, index) => (
              <InfoCard key={index} icon={i.src} text={i.alt} />
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
};

export default BackendTechnologies;
