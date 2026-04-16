import entropy from "../../assets/entropy.webp";
import geviton from "../../assets/geviton.webp";
import schooltry from "../../assets/schooltry.webp";
import Layout from "../Layout/Layout";

const ProfessionalExperience = () => {
  return (
    <>
      <Layout title="Professional Experience" id="experience">
        <div className="flex flex-row flex-wrap w-full items-center justify-around  pb-10">
          <img
            src={entropy}
            alt="Entropy logo"
            className="h-20 md:h-25 xl:h-30 w-auto object-contain"
          />
          <img
            src={geviton}
            alt="Geviton logo"
            className="h-20 md:h-25 xl:h-30 w-auto object-contain"
          />
          <img
            src={schooltry}
            alt="SchoolTry logo"
            className="h-20 md:h-25 xl:h-30 w-auto object-contain"
          />
        </div>
      </Layout>
    </>
  );
};

export default ProfessionalExperience;
