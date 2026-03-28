const InfoCard = ({ num, text }: { num: string; text: string }) => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="bg-background-card w-40 h-50 rounded-2xl p-5 flex flex-col gap-10 justify-start items-center">
          <div className="h-3 w-15 bg-white rounded-full"></div>
          <p className="text-7xl">{num}</p>
        </div>
        <p className="text-secondary-text text-2xl">{text}</p>
      </div>
    </>
  );
};

const AboutMe = () => {
  return (
    <>
      <section className="w-full h-screen p-10 text-primary-text">
        <div className="flex flex-col gap-30 justify-center items-center">
          <div className="flex flex-row justify-around items-center gap-20">
            <div className="w-[50%]  flex flex-col gap-10">
              <h3 className="font-bold text-4xl">About Me</h3>
              <p className="text-2xl text-secondary-text">
                I am a{" "}
                <span className="text-primary-text ">
                  Full Stack Software Engineer
                </span>{" "}
                with{" "}
                <span className="text-primary-text">
                  strong problem solving{" "}
                </span>
                skills and experience building reliable, user focused web
                applications across multiple domains. I turn complex engineering
                challenges into{" "}
                <span className="text-primary-text">solutions </span>that
                support business processes. My core strengths include{" "}
                <span className="text-primary-text">web development</span>,{" "}
                <span className="text-primary-text">UI UX</span>, and{" "}
                <span className="text-primary-text">system design</span>. I{" "}
                <span className="text-primary-text">learn fast</span>,{" "}
                <span className="text-primary-text">adapt</span> to new tools,
                and apply{" "}
                <span className="text-primary-text">modern technologies</span>{" "}
                where they deliver clear value.
              </p>
            </div>
            <div className="flex flex-row gap-15">
              <InfoCard num="+3" text="Projects Done" />
              <InfoCard num="+1" text="Years of Experience" />
            </div>
          </div>
          <div className="w-[90%] h-0.5 bg-secondary-text opacity-30"></div>
        </div>
      </section>
    </>
  );
};

export default AboutMe;
