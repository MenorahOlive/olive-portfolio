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
      <div className="p-10 w-90 text-2xl text-secondary-text">{skill}</div>
    </>
  );
};

const MajorSkills = () => {
  return (
    <>
      <Layout title="Major Skills" id="skills">
        <div className="flex flex-wrap w-[90%]">
          {skills.map((s, index) => (
            <SkillsList key={index} skill={s} />
          ))}
        </div>
      </Layout>
    </>
  );
};

export default MajorSkills;
