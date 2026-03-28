import entropy from "../../assets/entropy.png";
import geviton from "../../assets/geviton.png";
import schooltry from "../../assets/schooltry.png";

const ProfessionalExperience = () => {
  return (
    <>
      <section className="w-full h-auto p-10 text-primary-text">
        <div className="flex flex-col w-full gap-20 my-10 items-center">
          <h3 className="font-bold text-4xl  w-[90%]">
            Professional Experience
          </h3>
          <div className="flex flex-row w-full items-center justify-around  pb-10">
            <img
              src={entropy}
              alt="Entropy logo"
              className="h-30 w-auto object-contain"
            />
            <img
              src={geviton}
              alt="Geviton logo"
              className="h-30 w-auto object-contain"
            />
            <img
              src={schooltry}
              alt="SchoolTry logo"
              className="h-30 w-auto object-contain"
            />
          </div>
          <div className="w-[90%] h-0.5 bg-secondary-text opacity-30 "></div>
        </div>
      </section>
    </>
  );
};

export default ProfessionalExperience;
