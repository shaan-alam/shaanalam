import { ITools } from "@/@types/types";

const Tools: React.FC<{ tools: ITools[] }> = ({ tools }) => {
  return (
    <section className="w-[90%] mx-auto h-screen mt-12">
      <h1
        className="font-primary text-black dark:text-white text-2xl sm:text-4xl md:text-7xl font-bold text-center mb-12"
        data-scroll
        data-scroll-speed="1"
      >
        Tools I use
      </h1>
      <div className="grid grid-cols-4 gap-8">
        {tools &&
          tools?.map((tool) => (
            <div
              className="mx-auto"
              key={tool.id}
              data-scroll
              data-scroll-speed="1"
            >
              <img
                src={tool.logo.url}
                className="w-[100px] h-[100px] object-contain"
              />
            </div>
          ))}
      </div>
    </section>
  );
};

export default Tools;
