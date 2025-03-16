import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faWrench,
  faStar,
} from "@fortawesome/free-solid-svg-icons";

const iconsMap = {
  tech: faWrench,
  highlights: faStar,
};

const getIcon = (name: keyof typeof iconsMap) => {
  return iconsMap[name];
};

const techStack = [
  "HTML, CSS (Tailwind, SCSS, RWD)",
  "JavaScript, TypeScript",
  "React, TanStack Query",
  "Redux",
];

const highlights = [
  "Pixel-perfect design",
  "Dbałość o UX/UI",
  "Optymalizacja wydajności",
  "Ciągłe doskonalenie i nauka nowych technologii",
];

const Hero: React.FC = () => {
  return (
    <section
      className="dark:bg-slate-700 bg-slate-50 w-full h-full flex items-center justify-center"
      id="about"
    >
      <div className="my-20 relative py-[2px] px-[2.5px] rounded-lg bg-gradient-to-r from-violet-400 via-red-400 to-pink-400 shadow-lg">
        <div className="dark:bg-slate-800 bg-white p-10 rounded-lg flex flex-col justify-center items-center gap-7">
          <div className="flex flex-col justify-center gap-3 items-center">
            <h2 className="dark:text-gray-200 text-slate-700 text-3xl font-bold">
              Cześć, mam na imię Yana
            </h2>

            <h4 className="text-pink-400 font-semibold text-xl">
              Jestem Frontend Developerem
            </h4>
            <p className="dark:text-slate-300 text-slate-600 ">
              Tworzę estetyczne, funkcjonalne i responsywne interfejsy
              użytkownika, dbając o detale oraz wydajność.
            </p>
          </div>

          <div className="dark:text-white text-slate-700 grid grid-cols-2 justify-between w-full gap-5 max-w-4xl">
            <div className="rounded-lg border dark:border-gray-600 border-slate-50  p-6 flex flex-col gap-4 shadow-md ">
              <h5 className="font-bold">Tech Stack</h5>
              <ul className="space-y-2">
                {techStack.map((el, index) => {
                  return (
                    <li key={index} className="flex items-center">
                      <FontAwesomeIcon
                        icon={getIcon("tech")}
                        className="text-pink-400 mr-2"
                      />
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>

            <div className="rounded-lg border dark:border-gray-600 border-slate-50 p-6 flex flex-col gap-4 shadow-md ">
              <h5 className="font-bold">Co mnie wyróżnia?</h5>
              <ul className="space-y-2">
                {highlights.map((el, index) => {
                  return (
                    <li key={index} className="flex items-center">
                      {" "}
                      <FontAwesomeIcon
                        icon={getIcon("highlights")}
                        className="text-yellow-400 mr-2"
                      />
                      {el}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="flex items-center mt-4 md:mt-6">
            <motion.a
              href="#projects"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center px-4 py-2 text-md font-bold text-center text-white bg-violet-500 rounded-lg focus:ring-2 focus:outline-none focus:ring-violet-400 gap-2"
            >
              Zobacz moje projekty
              <FontAwesomeIcon icon={faArrowRight} className="text-white" />
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
