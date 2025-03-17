import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const contactItems = [
  {
    icon: faEnvelope,
    name: "yanadziabiola@gmail.com",
    link: "mailto:yanadziabiola@gmail.com",
  },
  {
    icon: faLinkedin,
    name: "@yanadziabiola",
    link: "https://www.linkedin.com/in/yanadziabiola/",
  },
  {
    icon: faGithub,
    name: "@yanicorn3000",
    link: "https://github.com/yanicorn3000",
  },
];

const Contact: React.FC = () => {
  return (
    <section
      className="dark:bg-slate-700 bg-slate-50 w-full flex flex-col items-center justify-center md:p-24 p-12"
      id="contact"
    >
      <div className="bg-white rounded-lg shadow-md dark:bg-slate-800 flex flex-col p-7 items-center">
        <h2 className="dark:text-gray-200 text-slate-800 text-3xl font-bold">
          Kontakt
        </h2>
        <address className="not-italic">
          <ul className="flex-col flex md:flex-row gap-7  dark:text-white  text-slate-700  mt-7">
            {contactItems.map((item, index) => (
              <li key={index} className="flex items-center">
                <FontAwesomeIcon
                  icon={item.icon}
                  className="text-violet-400 text-xl mr-2"
                />
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="dark:hover:text-pink-200 hover:text-pink-600 font-semibold text-md"
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </address>
      </div>
    </section>
  );
};

export default Contact;
