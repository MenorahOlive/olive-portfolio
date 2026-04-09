import Layout from "../Layout/Layout";
import Mongodb from "../../assets/mongodb.svg";
import Postgresql from "../../assets/postgresql.svg";
import Express from "../../assets/express.svg";
import Nodejs from "../../assets/node-js.svg";
import Coding from "../../assets/coding-wallpaper.jpeg";

const icons = [
  {
    src: Mongodb,
    alt: "MongoDB",
  },
  { src: Postgresql, alt: "Postgresql" },
  {
    src: Express,
    alt: "Express",
  },
  {
    src: Nodejs,
    alt: "NodeJS",
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
      <Layout
        title="Backend & Database Technologies"
        id="backend-and-database-technologies"
      >
        <div className="flex flex-row-reverse justify-around items-center gap-10 w-full">
          {/* <div className="p-10 bg-purple-500/10  border border-purple-500/40 shadow-lg  shadow-fuchsia-100 rounded-full flex justify-center items-center aspect-square w-[30%]"> */}
          <div className=" bg-background-card rounded-full flex justify-center items-center aspect-square w-[30%]  ">
            <img
              src={Coding}
              alt="Image of a robot"
              className="w-full h-auto object-cover  rounded-full aspect-square  "
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
