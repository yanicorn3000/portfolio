import { useState, useRef, useEffect, useCallback } from "react";
import clsx from "clsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";

const NavBar: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navRefs = useRef<HTMLAnchorElement[]>([]);
  const navItems: { title: string; href: string }[] = [
    { title: "O mnie", href: "#about" },
    { title: "Projekty", href: "#projects" },
    { title: "Kontakt", href: "#contact" },
  ];

  // Funkcja przypisująca ref do każdego elementu

  //el może być null, gdy dany element zostanie usunięty z DOM i React może przekazywać null przy usunięciu elementu

  const setRef = useCallback((el: HTMLAnchorElement | null, index: number) => {
    if (el) navRefs.current[index] = el;
  }, []);
  ////navRefs.current to tablica referencji, w której każdy element wskazuje na konkretny <a>.

  //przesuwanie indicator pod aktywnym elementem nawigacji.

  //useEffect działa przez pomalowaniem strony
  //Pobieramy szerokość aktywnego <a> i przypisujemy ją do indicator.
  //Pobieramy odległość aktywnego <a> od lewej krawędzi i przesuwamy tam wskaźnik.

  useEffect(() => {
    const element = navRefs.current[activeIndex];
    if (element && indicatorRef.current) {
      indicatorRef.current.style.width = `${element.offsetWidth}px`;
      indicatorRef.current.style.left = `${element.offsetLeft}px`;
    }
  }, [activeIndex]);

  return (
    <nav className="fixed top-0 left-0 w-full flex items-center px-8 py-4 bg-slate-800 text-white z-40">
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
      <div className="flex gap-6 absolute left-1/2 transform -translate-x-1/2 h-full items-center">
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
                  : "text-white hover:text-pink-300"
              )}
              onClick={() => setActiveIndex(index)}
              aria-current={activeIndex === index ? "page" : undefined}
              //informuje screen reader, który element jest aktywny
            >
              {item.title}
            </a>
          );
        })}

        <div
          ref={indicatorRef}
          className="absolute bottom-0 h-[4px] bg-pink-400 transition-all duration-300 rounded-full"
        ></div>
      </div>
    </nav>
  );
};

export default NavBar;
