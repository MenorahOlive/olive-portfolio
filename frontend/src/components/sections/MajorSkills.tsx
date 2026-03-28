const skills = [
  "Functional Programming",
  "Frontend Development",
  "Backend Development",
  "UI UX Fundamentals",
  "Version Control with Git",
  "Debugging Techniques",
  "RESTful API",
  "Error Handling Strategies",
  "Database Fundamentals",
  "Agile Scrum and Kanban",
];

const SkillsList = ({ skill }: { skill: string }) => {
  return (
    <>
      <div className="p-10 w-90 text-2xl text-secondary-text">{skill}</div>
    </>
  );
};

const MajorSkills = () => {
  return (
    <>
      <section className="w-full h-auto p-10 text-primary-text">
        <div className=" flex flex-col gap-20 w-full items-center">
          <h3 className="font-bold text-4xl  w-[90%]">Major Skills</h3>
          <div className="flex flex-wrap w-[90%]">
            {skills.map((s, index) => (
              <SkillsList key={index} skill={s} />
            ))}
          </div>
          <div className="w-[90%] h-0.5 bg-secondary-text opacity-30 "></div>
        </div>
      </section>
    </>
  );
};

export default MajorSkills;
