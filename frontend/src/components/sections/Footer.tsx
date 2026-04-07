import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import Form from "./Form";

const Footer = () => {
  return (
    <>
      <footer className="bg-background-card text-primary-text w-full h-auto p-20 flex flex-row justify-around items-start gap-10">
        <div className=" flex flex-col gap-6 h-full ">
          {" "}
          <h3 className="text-7xl">
            Get in - <br /> touch with me{" "}
          </h3>
          <p className="text-2xl">
            If you have any questions. Feel free to reach out.
          </p>
          <p className="text-2xl">Email:</p>
          <p className="text-2xl font-bold">olivemenorah@gmail.com</p>
          <p className="text-2xl">Phone:</p>
          <p className="text-2xl font-bold">+254 715 312 448</p>
          <p>Available Monday to Friday, 9AM - 5PM EAT</p>
          <Button size="lg" className="w-fit mt-5">
            Live Chat{" "}
            <div className="bg-white p-1 rounded-full">
              <ArrowRight className="text-black"></ArrowRight>
            </div>
          </Button>
        </div>
        <Form />
      </footer>
    </>
  );
};

export default Footer;
