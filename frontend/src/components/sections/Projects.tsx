import Layout from "../Layout/Layout";
import { Button } from "../ui/button";

const project = ["Focus Flow", "EcoRestore", "KNCLegal"];

const InfoCard = ({ text }: { text: string }) => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="bg-background-card w-60 h-50 xl:w-80 xl:h-60  animate-pulse rounded-2xl p-5 flex flex-col gap-10 justify-start items-center">
          <div className="h-3 w-15 bg-white rounded-full"></div>
          {/* <img src={icon} alt={text} className=" object-contain w-20 h-auto" /> */}
        </div>
        <p className="text-secondary-text text-xl md:text-2xl">{text}</p>
      </div>
    </>
  );
};

const Projects = () => {
  return (
    <>
      <Layout title="My Latest Projects" id="my-projects">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-3 w-[90%]">
          {project.map((p, index) => (
            <InfoCard key={index} text={p} />
          ))}
        </div>
        <Button
          variant="default"
          size="lg"
          className="bg-background-card text-secondary-text hover:bg-gray-100 hover:cursor-pointer text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full"
        >
          Load More Work
        </Button>
      </Layout>
    </>
  );
};

export default Projects;
