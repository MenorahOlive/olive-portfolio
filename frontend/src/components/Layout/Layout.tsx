import type { ReactNode } from "react";

const Layout = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => {
  return (
    <>
      <section className="w-full h-auto p-10 text-primary-text">
        <div className="flex flex-col w-full gap-20  items-center">
          <h3 className="font-bold text-4xl  w-[90%]">{title}</h3>
          {children}
          <div className="w-[90%] h-0.5 bg-secondary-text opacity-30 "></div>
        </div>
      </section>
    </>
  );
};

export default Layout;
