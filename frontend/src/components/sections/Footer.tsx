import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Form from "./Form";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer id="contact">
        <div className="bg-background-card text-primary-text w-full h-auto py-15 px-5 flex flex-col xl:flex-row justify-around items-center xl:items-start gap-10">
          <div className=" flex text-center xl:text-start flex-col w-auto items-center xl:items-start justify-center xl:justify-start gap-4 md:gap-5 xl:gap-6 h-full ">
            {" "}
            <h3 className="text-5xl md:text-6xl xl:text-7xl ">
              {" "}
              Get in - <br /> touch with me{" "}
            </h3>
            <p className="text-xl md:text-2xl">
              If you have any questions. Feel free to reach out.
            </p>
            <p className="text-xl md:text-2xl">Email:</p>
            <p className="text-xl md:text-2xl font-bold">
              olivemenorah@gmail.com
            </p>
            <p className="text-xl md:text-2xl">Phone:</p>
            <p className="text-xl md:text-2xl font-bold">+254 715 312 448</p>
            <p>Available Monday to Friday, 9AM - 5PM EAT</p>
            <a
              href="https://wa.me/254715312448?text=Hi%20Olive!%20I'm%20reaching%20out%20from%20your%20portfolio.%20I'd%20like%20to%20chat%20about..."
              target="_blank"
              rel="noopener noreferrer"
            >
              {" "}
              <Button
                size="lg"
                className="w-fit mt-5  text-md xl:text-lg px-5 py-4 xl:px-8 xl:py-6 rounded-full cursor-pointer"
              >
                Live Chat{" "}
                <div className="bg-white p-1 rounded-full">
                  <ArrowRight className="text-black"></ArrowRight>
                </div>
              </Button>
            </a>
          </div>
          <Form />
        </div>
        <div className="bg-primary-text w-full h-10 text-background-card flex justify-center items-center">
          ©{currentYear}. OliveMenorah. All Rights Reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
