import { ScrollArea } from "@/components/ui/scroll-area";

const Repositories = ({ contentData }: { contentData: object }) => {
  return (
    <ScrollArea
      id="repos"
      className="h-[15.5rem]"
      style={{ scrollbarWidth: "thin" }}
    >
      {Object.entries(contentData).map(([key, repo]) => (
        <div
          key={key}
          className="h-[15.5rem] bg-contain bg-no-repeat bg-center shadow-inner hover:shadow-cyan-500 transition-shadow duration-100 pb-5 px-5 cursor-pointer flex flex-col justify-end text-gray-200"
          style={{
            backgroundImage: `url(${repo.wallpaper ? repo.wallpaper : "/assets/images/project.svg"})`,
          }}
          onClick={() => {
            window.open(repo.html_url, "_blank")?.focus();
          }}
        >
          <h1 className="font-extrabold"> {repo.name}</h1>
          <p className="text-sm">{repo.description}</p>
        </div>
      ))}
    </ScrollArea>
  );
};

export default Repositories;
