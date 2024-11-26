import { useNavigate } from "react-router-dom";
type MenuProps = {
  menuOpened: boolean;
  setMenuOpened: (menuOpened: boolean) => void;
};
export const MenuComponent = ({ menuOpened, setMenuOpened }: MenuProps) => {
  const navigate = useNavigate();
  const menuList = ["Home", "About", "Projects", "Contact"];
  return (
    <div
      className={`fixed bottom-0 right-0 top-0 z-10 flex flex-col overflow-hidden bg-taki-secondary/25 bg-clip-padding backdrop-blur-lg backdrop-filter transition-all ${menuOpened ? "w-full md:w-80" : "w-0"}`}
    >
      <div className="flex flex-1 flex-col items-start justify-center gap-6 p-8">
        {menuList.map((menu, index) => (
          <button
            key={index}
            onClick={() => {
              setMenuOpened(false);
              if (menu === "Home") {
                navigate("/");
                return;
              }
              navigate(`#${menu.toLowerCase()}`);
            }}
            className="cursor-pointer text-2xl font-bold transition-colors hover:text-taki-primary"
          >
            {menu}
          </button>
        ))}
      </div>
    </div>
  );
};
