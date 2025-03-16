import SingleProject from "./SingleProject";

export type ProjectItem = {
  title: string;
  description: string;
  technologies: string;
  link: string;
  img: string;
};

const projects: ProjectItem[] = [
  {
    title: "EatWell",
    description:
      "Aplikacja EatWell pomaga użytkownikom wybierać lepsze produkty spożywcze, monitorować spożycie kalorii, białka, tłuszczu oraz węglowodanów. Użytkownik może wpisać nazwę produktu i natychmiast otrzymać prostą ocenę zdrowotną wraz z rekomendacjami podobych produktów. Aplikacja oceni produkt na podstawie Nutri-Score, zawartości cukru, soli, tłuszczu, białka, węglewodanów i błonnika oraz pokaze kaloryczność produktu względem dziennej normy spożycia kalorii dopasowanej do uzytkownika.",
    technologies: "React, SCSS, API Fetch",
    link: "https://github.com/yanicorn3000/EatWell-new.git",
    img: "eatwell-1.png",
  },
  {
    title: "DriveSafe",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consectetur magnam est! Maxime dicta repellendus praesentium accusantium laboriosam! Dolorem nobis consequuntur aut quaerat, officiis fuga itaque sequi fugiat praesentium excepturi, quisquam explicabo accusantium architecto assumenda! Unde enim numquam illo porro.",
    technologies: "React, TypeScript, Tailwind, SCSS, API Fetch",
    link: "github",
    img: "eatwell-1.png",
  },
  {
    title: "GitHubRepo",
    description:
      "oLorem ipsum dolor sit amet, consectetur adipisicing elit. Nam consectetur magnam est! Maxime dicta repellendus praesentium accusantium laboriosam! Dolorem nobis consequuntur aut quaerat, officiis fuga itaque sequi fugiat praesentium excepturi, quisquam explicabo accusantium architecto assumenda! Unde enim numquam illo porro.",
    technologies: "React, SCSS, API Fetch",
    link: "github",
    img: "eatwell-1.png",
  },
];

const Projects = () => {
  return (
    <section
      className="bg-slate-800 w-full flex items-center justify-center p-10 flex-col"
      id="projects"
    >
      <h2 className="text-gray-200 text-3xl font-bold">Moje Projekty</h2>
      <div className="grid gap-8 mt-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((item, index) => (
          <SingleProject item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
