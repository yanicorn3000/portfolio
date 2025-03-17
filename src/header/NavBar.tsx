import { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import ThemeButton from "../context/ThemeButton";

const NavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<HTMLAnchorElement[]>([]);
  const sectionRefs = useRef<HTMLElement[]>([]);
  const navItems: { title: string; href: string; id: string }[] = [
    { title: "O mnie", href: "#about", id: "about" },
    { title: "Projekty", href: "#projects", id: "projects" },
    { title: "Kontakt", href: "#contact", id: "contact" },
  ];
  const [isOpen, setIsOpen] = useState(false);

  // Funkcja przypisująca ref do każdego elementu - el może być null, gdy dany element zostanie usunięty z DOM i React może przekazywać null przy usunięciu elementu

  const setRef = useCallback((el: HTMLAnchorElement | null, index: number) => {
    if (el) navRefs.current[index] = el;
  }, []);
  ////navRefs.current to tablica referencji, w której każdy element wskazuje na konkretny <a>.
  //useEffect działa przez pomalowaniem strony
  //Pobieramy szerokość aktywnego <a> i przypisujemy ją do indicator.
  //Pobieramy odległość aktywnego <a> od lewej krawędzi i przesuwamy tam wskaźnik.

  useEffect(() => {
    sectionRefs.current = navItems.map(
      (item) => document.getElementById(item.id) as HTMLElement
    );
  }, []);

  useEffect(() => {
    const updateIndicator = () => {
      const element = navRefs.current[activeIndex];
      if (element && indicatorRef.current) {
        indicatorRef.current.style.width = `${element.offsetWidth}px`;
        indicatorRef.current.style.left = `${element.offsetLeft}px`;
      }
    };
    updateIndicator();
  }, [activeIndex]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (eles) => {
        const ele = eles.find((e) => e.isIntersecting);
        if (ele)
          setActiveIndex(
            sectionRefs.current.indexOf(ele.target as HTMLElement)
          );
      },
      {
        threshold: 0.5,
        rootMargin: "30px",
      }
    );

    sectionRefs.current.forEach((r) => {
      observer.observe(r);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <nav className="sticky top-0 left-0 w-full flex items-center justify-between px-8 py-4 dark:bg-slate-800 dark:text-white bg-white text-slate-700 z-40 shadow-lg">
      <div className="flex items-center">
        <a
          href="https://github.com/yanicorn3000"
          className="cursor-pointer flex gap-2 items-center"
          target="blank"
        >
          <FontAwesomeIcon icon={faCode} className="text-pink-400 text-xl" />
          <h1 className="font-bold font-mono text-xl bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400 text-transparent bg-clip-text">
            YANICORN
          </h1>
        </a>
      </div>
      <div className="hidden md:flex gap-6 absolute left-1/2 transform -translate-x-1/2 h-full items-center">
        {navItems.map((item, index) => {
          return (
            <a
              key={item.title}
              href={item.href}
              ref={(el) => setRef(el, index)}
              className={clsx(
                "px-4 py-2 cursor-pointer transition-colors duration-300 relative",
                activeIndex === index
                  ? "text-pink-400 font-bold "
                  : "dark:text-white text-slate-700 dark:hover:text-pink-300 hover:text-pink-600"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
                sectionRefs.current[index].scrollIntoView({
                  behavior: "smooth",
                });
              }}
              aria-current={activeIndex === index ? "page" : undefined}
              //informuje screen reader, który element jest aktywny
            >
              {item.title}
            </a>
          );
        })}

        <div
          ref={indicatorRef}
          className="absolute bottom-0 h-[4px] bg-pink-400 transition-all duration-300 rounded-full z-50"
        ></div>
      </div>
      <ThemeButton />

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-white focus:outline-none w-10"
      >
        <FontAwesomeIcon
          icon={isOpen ? faXmark : faBars}
          className="text-pink-400 text-2xl ml-4"
        />
      </button>

      <div
        className={clsx(
          "fixed top-16 right-0 w-2/3 max-w-[80%] h-screen bg-slate-50 dark:bg-slate-800 transform transition-transform duration-300 p-6 md:hidden flex flex-col gap-4",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {navItems.map((item, index) => {
          return (
            <a
              key={item.title}
              href={item.href}
              className={clsx(
                "block py-4 text-xl",
                activeIndex === index
                  ? "text-pink-400 font-bold "
                  : "dark:text-white text-slate-700"
              )}
              onClick={(e) => {
                e.preventDefault();
                setActiveIndex(index);
                setIsOpen(false);
                sectionRefs.current[index].scrollIntoView({
                  behavior: "smooth",
                });
              }}
            >
              {item.title}
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default NavBar;
