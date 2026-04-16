import Layout from "../Layout/Layout";
import { Button } from "../ui/button";
import knclegal from "../../assets/knclegal.webp";
import leadwell from "../../assets/leadwell.webp";
import neotechnic from "../../assets/neotechnic.webp";
import penparalegal from "../../assets/penparalegal.webp";
import { MoveUpRight } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

//Yet to display Focus Flow and Eco Restore
const project = [
  { text: "KNC Legal", screenshot: knclegal, href: "https://knclegal.com/" },
  {
    text: "Leadwell Consulting",
    screenshot: leadwell,
    href: "https://leadwellconsulting.net/",
  },
  {
    text: "Pen Paralegal",
    screenshot: penparalegal,
    href: "https://penparalegalservices.ca/",
  },
  {
    text: "NeoTechnic Spares",
    screenshot: neotechnic,
    href: "http://neotechnicspares.com/",
  },
];

const InfoCard = ({
  text,
  screenshot,
  href,
}: {
  text: string;
  screenshot: any;
  href: string;
}) => {
  const handleCardClick = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex flex-col gap-3 justify-center items-center">
      <div
        onClick={handleCardClick}
        className="bg-background-card w-60 h-50 xl:w-80 xl:h-60 shadow-md rounded-2xl flex flex-col gap-10 justify-start items-center relative cursor-pointer overflow-hidden group"
      >
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-4 right-4 z-20"
          onClick={(e) => e.stopPropagation()} // Prevents double-opening the link
        >
          <div className="h-10 w-10 bg-white/90 rounded-full backdrop-blur-sm hover:scale-110 transition-transform flex items-center justify-center shadow-md">
            <MoveUpRight size={18} />
          </div>
        </a>

        <div className="w-full h-full relative z-10 rounded-lg overflow-hidden">
          <img
            src={screenshot}
            alt={text}
            loading="lazy"
            className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500"
          />
        </div>
      </div>

      <p className="text-secondary-text text-xl md:text-2xl">{text}</p>
    </div>
  );
};

const Projects = () => {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleLoadMore = () => {
    if (visibleCount >= project.length) {
      toast.info("All projects are already displayed!");
      return;
    }

    console.log("Loading more projects...");
    setVisibleCount((prevCount) => prevCount + 3);
  };
  return (
    <>
      <Layout title="My Latest Projects" id="my-projects">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center gap-10 w-[90%]">
          {project.slice(0, visibleCount).map((p, index) => (
            <InfoCard
              key={index}
              text={p.text}
              screenshot={p.screenshot}
              href={p.href}
            />
          ))}
        </div>
        <Button
          variant="default"
          size="lg"
          onClick={handleLoadMore}
          className="bg-background-card text-secondary-text hover:bg-gray-100 hover:cursor-pointer text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full"
        >
          Load More Work
        </Button>
      </Layout>
    </>
  );
};

export default Projects;
