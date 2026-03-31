import Layout from "../Layout/Layout";

const InfoBar = ({ text }: { text: string }) => {
  return (
    <>
      <p className="py-5 px-auto text-2xl text-secondary-text bg-background-card rounded-2xl flex items-center justify-center ">
        {text}
      </p>
    </>
  );
};

const tools = [
  "VS Code",
  "Figma",
  "Canva",
  "ShadCN",
  "React Query",
  "React Hook",
  "Drizzle ORM",
  "BetaAuth",
  "React Router",
  "Render",
  "Netlify",
  "Google AI studio",
  "Google Cloud",
];

const IDEandTools = () => {
  return (
    <>
      <Layout title="IDE & Tools">
        <div className="grid grid-cols-3 gap-3 w-[90%]">
          {tools.map((t, index) => {
            const isLast = index === tools.length - 1;
            return (
              <div key={index} className={isLast ? "col-span-3" : ""}>
                <InfoBar text={t} />
              </div>
            );
          })}
        </div>
      </Layout>
    </>
  );
};

export default IDEandTools;
