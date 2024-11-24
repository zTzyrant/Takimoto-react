import { useNavigate, Link } from "react-router-dom";
import logo from "images/TakiDevLogo.png";

export default function Navbar({
  menuOpened,
  setMenuOpened,
}: {
  menuOpened: boolean;
  setMenuOpened: (menuOpened: boolean) => void;
}) {
  const navigate = useNavigate();
  function reRoute(target: string) {
    navigate(target);
  }

  const menu = {
    Home: "/",
    About: "/#about",
    Projects: "/#projects",
    Contact: "/#contact",
  };

  return (
    <nav className="fixed z-20 flex w-full items-center justify-between bg-taki-secondary bg-opacity-80 bg-clip-padding px-4 py-6 backdrop-blur-sm backdrop-filter sm:px-12 lg:px-16">
      <Link to="/" className="aspect-square h-16 w-16 overflow-hidden rounded-sm">
        <img src={logo} alt="TakiDev Logo" className="object-cover" />
      </Link>
      <ul className="flex transform justify-center overflow-hidden rounded-full border-2 border-black transition-all duration-300 ease-in-out">
        {Object.entries(menu).map(([key, value]) => (
          <li
            key={key}
            className={`group transform transition-all duration-300 ease-in-out hover:bg-black`}
          >
            <button
              className="transform p-4 px-5 font-monument text-lg text-black transition-all duration-300 ease-in-out group-hover:text-taki-secondary"
              onClick={() => reRoute(value)}
            >
              {key}
            </button>
          </li>
        ))}
      </ul>

      <div className="flex flex-row gap-2">
        <button>
          <a
            href="https://www.linkedin.com/in/ztzyrant/"
            target="_blank"
            rel="noreferrer"
            className="border-2 border-black p-4 px-5 font-monument text-lg text-black transition-all duration-300 ease-in-out hover:bg-black hover:text-taki-secondary"
          >
            LinkedIn
          </a>
        </button>
        <button
          onClick={() => setMenuOpened(!menuOpened)}
          className="z-20 h-11 w-11 rounded-md bg-taki-primary p-3"
        >
          <div
            className={`h-0.5 w-full rounded-md bg-white transition-all ${
              menuOpened ? "translate-y-0.5 rotate-45" : ""
            }`}
          />
          <div className={`my-1 h-0.5 w-full rounded-md bg-white ${menuOpened ? "hidden" : ""}`} />
          <div
            className={`h-0.5 w-full rounded-md bg-white transition-all ${
              menuOpened ? "-rotate-45" : ""
            }`}
          />
        </button>
      </div>
    </nav>
  );
}
