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
      className="bg-slate-700 w-full flex flex-col items-center justify-center p-16"
      id="contact"
    >
      <h2 className="text-gray-200 text-3xl font-bold">Kontakt</h2>
      <address className="not-italic">
        <ul className="flex gap-7  text-white mt-6">
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
                className="hover:text-pink-200 font-semibold "
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </address>
    </section>
  );
};

export default Contact;
