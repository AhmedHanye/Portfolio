import CVDataHeader from "./cvDataHeader";

export default async function CVData() {
  const CVdata: CVDataType = {
    "About Me":
      "I'm a dedicated and passionate software engineer with a strong focus on full stack development. I specialize in building dynamic, high-performance web applications. I thrive on solving complex problems and creating seamless user experiences that deliver real-world impact. For me, programming is not just a career it's a craft that I love continuously honing and pushing to new heights.",
    Education: {
      School: "Arab Open University, Cairo, Egypt",
      Degree: "Bachelor of Science in Computer Science",
      Graduation: "Expected May 2026",
    },
    Skills: [
      "HTML",
      "CSS",
      "Python",
      "JavaScript",
      "Java",
      "Data Structures and Algorithms",
      "OOP",
      "Git & GitHub",
      "Django",
      "Nextjs",
      "Bootstrap",
      "Postgresql",
      "React",
      "Shadcn",
      "Tailwind CSS",
      "Responsive Design",
      "Performance Optimization",
      "BackEnd Development",
      "FrontEnd Development",
      "Full Stack Development",
    ],
    "Contact & Info": {
      Email: "ahmedhanyehossny@gmail.com",
      Phone: "+20 101 292 8080",
      LinkedIn: "https://linkedin.com/in/ahmed-hanye-a66096253",
      Github: "https://github.com/AhmedHanye?tab=repositories",
    },
  };

  return (
    <div id="cv-data" className="py-8 max-md:text-sm">
      {Object.keys(CVdata).map((key) => (
        <div key={key}>
          <CVDataHeader name={key} />
          <div className="ms-20 max-md:ms-8 px-4 py-5 font-semibold">
            {Array.isArray(CVdata[key]) ? (
              <ul className="flex flex-wrap gap-x-4 gap-y-1">
                {CVdata[key].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : typeof CVdata[key] === "object" ? (
              <div>
                {Object.keys(CVdata[key]).map((key2) => (
                  <div className="flex gap-2" key={key2}>
                    <h1 className="font-extrabold">{key2}:</h1>
                    <p>{(CVdata[key] as Record<string, string>)[key2]}</p>
                  </div>
                ))}
              </div>
            ) : (
              <span>{CVdata[key]}</span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
