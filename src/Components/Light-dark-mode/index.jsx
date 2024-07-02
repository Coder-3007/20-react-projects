import useLocalStorage from "./useLocalStorage";
import "./theme.css";

export default function LightDarkMode() {
  // will use custom hook init

  const [theme, setTheme] = useLocalStorage("theme", "dark");

  function handleToggleTheme() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  console.log(theme);
  return (
    <div>
      <h1 className="heading">Light Dark Mode Theme App</h1>
      <div className="light-dark-mode" data-theme={theme}>
        <div className="container">
          <p>{theme === "light" ? "Normal Mode" : "Dark Mode"}</p>
          <button onClick={handleToggleTheme}>Change Theme</button>
        </div>
      </div>

      <hr className="line-below" />
    </div>
  );
}
