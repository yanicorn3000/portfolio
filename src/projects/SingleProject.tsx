import { ProjectItem } from "./Projects";
import { faFolder, faWrench } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { picturePath } from "../utils";

type ProjectProps = {
  item: ProjectItem;
  index: number;
};

const SingleProject: React.FC<ProjectProps> = ({ item, index }) => {
  return (
    <div
      key={index}
      className="bg-slate-700 w-full h-auto max-w-xs sm:max-w-sm lg:max-w-2xl rounded-lg shadow-md mx-auto overflow-hidden"
    >
      <div className="bg-slate-500 w-full overflow-hidden ">
        <img src={picturePath(item.img)} alt="EatWell" className="w-full" />
      </div>

      <div className="p-6 text-white flex flex-col gap-6">
        <div className="flex gap-4 items-center">
          <FontAwesomeIcon
            icon={faFolder}
            className="text-violet-400 text-2xl"
          />
          <h3 className="text-slate-200 font-bold text-3xl">
            <a
              href={item.link}
              className="relative rounded-full transition-colors duration-300 before:absolute before:-bottom-1 before:left-0 before:w-0 before:h-[3px] before:bg-gradient-to-r before:from-violet-400 before:to-pink-400 before:transition-all before:duration-300 hover:before:w-full hover:text-slate-300"
            >
              {item.title}
            </a>
          </h3>
        </div>
        <div className="flex gap-2 flex-col">
          <h4 className="font-bold">Opis projektu:</h4>
          <p>{item.description}</p>
        </div>

        <div className="flex gap-2 flex-col p-4 bg-slate-800 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <h4 className="font-bold">Technologie</h4>
            <FontAwesomeIcon
              icon={faWrench}
              className="text-violet-400 -rotate-90"
            />
          </div>

          <p className="whitespace-normal break-words overflow-hidden">
            {item.technologies}
          </p>
        </div>

        <a
          href={item.link}
          target="blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center text-pink-400 font-semibold transition-colors duration-300 hover:text-pink-300 group"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="group-hover:text-pink-300 transition-colors duration-300 text-pink-400 text-xl"
          />
          GitHub Link
        </a>
      </div>
    </div>
  );
};

export default SingleProject;
