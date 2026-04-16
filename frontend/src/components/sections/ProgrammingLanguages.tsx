import javascript from "../../assets/javascript.svg";
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import java from "../../assets/java.svg";
import cplusplus from "../../assets/c-plus-plus.svg";
import typescript from "../../assets/typescript.svg";
import Layout from "../Layout/Layout";

const languages = [
  {
    src: javascript,
    alt: "JavaScript",
  },
  {
    src: typescript,
    alt: "TypeScript",
  },
  {
    src: html,
    alt: "HTML",
  },
  {
    src: css,
    alt: "CSS",
  },
  {
    src: java,
    alt: "Java",
  },
  {
    src: cplusplus,
    alt: "C++",
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
          />
        </div>
        <p className="text-secondary-text text-xl md:text-2xl max-w-[7ch] text-center">
          {text}
        </p>
      </div>
    </>
  );
};

const ProgrammingLanguages = () => {
  return (
    <>
      <Layout title="Programming Languages" id="programming-languages">
        <div className="grid w-[90%] grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-10 justify-around items-center">
          {languages.map((l, index) => (
            <InfoCard key={index} icon={l.src} text={l.alt} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ProgrammingLanguages;
