import type { ReactNode } from "react";

const Layout = ({
  children,
  title,
  id,
}: {
  children: ReactNode;
  title: string;
  id: string;
}) => {
  return (
    <>
      <section className="w-full h-auto p-10 text-primary-text" id={id}>
        <div className="flex flex-col w-full gap-10 md:gap-15 xl:gap-20  items-center">
          <h3 className="font-bold text-2xl md:text-3xl xl:text-4xl  w-[90%] flex justify-center xl:justify-start text-center">
            {title}
          </h3>
          {children}
          <div className="w-[90%] h-0.5 bg-secondary-text opacity-30 "></div>
        </div>
      </section>
    </>
  );
};

export default Layout;
