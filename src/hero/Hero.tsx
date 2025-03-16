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
  "HTML, CSS (Tailwind, SCSS)",
  "JavaScript, TypeScript",
  "React",
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
      className="bg-slate-700 w-full h-full flex items-center justify-center"
      id="about"
    >
      <div className="mt-28 mb-20 relative py-[2px] px-[2.5px] rounded-lg bg-gradient-to-r from-violet-400 via-red-400 to-pink-400 ">
        <div className="bg-slate-800 p-10 rounded-lg flex flex-col justify-center items-center gap-7">
          <div className="flex flex-col justify-center gap-3 items-center">
            <h2 className="text-gray-200 text-3xl font-bold">
              Cześć, mam na imię Yana
            </h2>

            <h4 className="text-pink-400 font-semibold text-xl">
              Jestem Frontend Developerem
            </h4>
            <p className="text-slate-300">
              Tworzę estetyczne, funkcjonalne i responsywne interfejsy
              użytkownika, dbając o detale oraz wydajność.
            </p>
          </div>

          <div className="text-white grid grid-cols-2 justify-between w-full gap-5 shadow-lg max-w-4xl">
            <div className="rounded-lg border border-gray-600 p-6 flex flex-col gap-4">
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

            <div className="rounded-lg border border-gray-600 p-6 flex flex-col gap-4">
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
