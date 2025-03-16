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
      "Aplikacja EatWell pomaga użytkownikom wybierać lepsze produkty spożywcze, monitorować spożycie kalorii, białka, tłuszczu oraz węglowodanów. Użytkownik może wpisać nazwę produktu i natychmiast otrzymać prostą ocenę zdrowotną wraz z rekomendacjami podobych produktów. Aplikacja oceni produkt na podstawie Nutri-Score, zawartości cukru, soli, tłuszczu, białka, węglewodanów i błonnika oraz pokaze kaloryczność produktu względem dziennej normy spożycia kalorii dopasowanej do użytkownika. Podczas rejestracji użytkownik może obliczyć swoje zapotrzebowanie kaloryczne i zapisać wynik w profilu. Dodatkowo przy zalogowaniu się można dodawać produkty do listy ulubionych.",
    technologies: "React, SCSS, API Fetch,TanStack Query, Vite",
    link: "https://github.com/yanicorn3000/EatWell-new.git",
    img: "1.png",
  },
  {
    title: "DriveSafer",
    description:
      "DriveSafer to aplikacja webowa stworzona z myślą o kierowcach, którzy chcą poszerzyć swoją wiedzę i doskonalić umiejętności na drodze. Umożliwia generowanie praktycznych porad dotyczących bezpiecznej jazdy, oszczędzania paliwa oraz przepisów drogowych.Użytkownicy mogą rejestrować się i logować, aby uzyskać dostęp do spersonalizowanych funkcji, takich jak quiz sprawdzający znajomość zasad ruchu drogowego. Wyniki testu są zapisywane w profilu, co pozwala śledzić postępy i motywuje do nauki. ",
    technologies:
      "React, TypeScript, Tailwind, SCSS, API Fetch, TanStack Query, Vite",
    link: "https://github.com/yanicorn3000/Drive-Safer",
    img: "3.png",
  },
  {
    title: "GitHub Repo Finder",
    description:
      "GitHub Repo Finder to aplikacja webowa umożliwiająca wyszukiwanie repozytoriów na GitHubie za pomocą GitHub REST API. Użytkownik może wprowadzić nazwę repozytorium, a aplikacja wyświetli wyniki wraz z kluczowymi informacjami, takimi jak opis, liczba gwiazdek czy język programowania. Aplikacja umożliwia wyszukiwanie repozytoriów na podstawie nazwy, obsługuje paginację wyników (użytkownik może przełączać się między stronami wyników), filtrowanie wyników oraz dostosowywanie liczby wyników wyświetlanych na stronie",
    technologies: "React, SCSS, API Fetch, TanStack Query, Vite",
    link: "https://github.com/yanicorn3000/GitHubRepo",
    img: "2.png",
  },
];

const Projects = () => {
  return (
    <section
      className="dark:bg-slate-800 bg-white w-full flex items-center justify-center p-10 flex-col"
      id="projects"
    >
      <h2 className="dark:text-gray-200 text-slate-700 text-3xl font-bold">
        Moje Projekty
      </h2>
      <div className="grid gap-8 mt-11 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-7xl">
        {projects.map((item, index) => (
          <SingleProject key={index} item={item} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
