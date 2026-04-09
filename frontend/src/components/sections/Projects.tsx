import Layout from "../Layout/Layout";
import { Button } from "../ui/button";

const project = ["Focus Flow", "EcoRestore", "KNCLegal"];

const InfoCard = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="bg-background-card w-90 h-60 animate-pulse rounded-2xl p-5 flex flex-col gap-10 justify-start items-center">
          <div className="h-3 w-15 bg-white rounded-full"></div>
          {/* <img src={icon} alt={text} className=" object-contain w-20 h-auto" /> */}
        </div>
        <p className="text-secondary-text text-2xl">{text}</p>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Layout title="My Latest Projects" id="my-projects">
        <div className="flex flex-wrap items-center justify-center gap-20 w-[90%]">
          {project.map((p, index) => (
            <InfoCard key={index} text={p} />
          ))}
        </div>
        <Button
          variant="default"
          size="lg"
          className="bg-background-card text-secondary-text hover:bg-gray-100 hover:cursor-pointer"
        >
          Load More Work
        </Button>
      </Layout>
    </>
  );
};

export default Projects;
