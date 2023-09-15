import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  function reRoute(target: string) {
    navigate(target);
  }
  return (
    <>
      <button
        onClick={() => {
          reRoute("/");
        }}
      >
        Home
      </button>
      <button
        onClick={() => {
          reRoute("/newpages");
        }}
      >
        New Pages
      </button>
      <button
        onClick={() => {
          reRoute("/404");
        }}
      >
        Page Not Found
      </button>
    </>
  );
}
