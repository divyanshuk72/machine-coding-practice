import { useNavigate } from "react-router-dom";
import useLocalStorage from "./useLocalStorage";

const Theme = () => {
  const [theme, setTheme] = useLocalStorage("theme", "dark");

  const handleToggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const navigate = useNavigate();

  return (
    <>
      <div
        className={`text-center m-[50px] ${
          theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-gray-900"
        } transition-colors duration-300 min-h-screen`}
      >
        <h1 className="text-4xl m-[30px] p-[30px]">Theme</h1>
        <button
          onClick={handleToggleTheme}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Change Theme
        </button>
        <button
          onClick={() => {
            navigate("/");
          }}
          className="p-2 bg-red-500 border-none rounded-lg text-white text-lg cursor-pointer my-5 mx-5"
        >
          Back
        </button>
      </div>
    </>
  );
};

export default Theme;
