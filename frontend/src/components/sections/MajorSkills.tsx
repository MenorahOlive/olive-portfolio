import Layout from "../Layout/Layout";

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
      <div className="py-3 md:py-4 xl:py-5 px-auto text-lg xl:text-2xl text-secondary-text bg-background-card rounded-2xl flex items-center justify-center ">
        {skill}
      </div>
    </>
  );
};

const MajorSkills = () => {
  return (
    <>
      <Layout title="Major Skills" id="skills">
        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-[90%]">
          {skills.map((s, index) => {
            const isLast = index === skills.length - 1;
            return (
              <div key={index} className={isLast ? "xl:col-span-3" : ""}>
                {" "}
                <SkillsList skill={s} />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default MajorSkills;
