const CVDataHeader = ({ name }: { name: string }) => {
  return (
    <div className="flex items-center cv-data-header">
      <span className="h-1 min-w-20 max-md:min-w-8 bg-foreground"></span>
      <h1 className="text-nowrap px-4 text-2xl max-md:text-xl max-md:px-3 font-extrabold">{name}</h1>
      <span className="h-1 w-full bg-foreground"></span>
    </div>
  );
};

export default CVDataHeader;
