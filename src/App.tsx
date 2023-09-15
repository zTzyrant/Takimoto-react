import { checkDarkMode, isFAls, setIsFAls } from "./components/main";
function App() {
  return (
    <>
      <p>Hello World</p>
      <button
        onClick={() => {
          checkDarkMode();
          setIsFAls();
          console.log(isFAls);
        }}
      >
        {" "}
        hi
      </button>
    </>
  );
}

export default App;
