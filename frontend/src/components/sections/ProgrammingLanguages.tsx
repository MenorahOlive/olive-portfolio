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
    alt: "JavaScript (ES6)",
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

const ProgrammingLanguages = () => {
  return (
    <>
      <Layout title="Programming Languages" id="programming-languages">
        <div className="flex w-[90%] flex-row gap-10 justify-around items-center">
          {languages.map((l, index) => (
            <InfoCard key={index} icon={l.src} text={l.alt} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default ProgrammingLanguages;
