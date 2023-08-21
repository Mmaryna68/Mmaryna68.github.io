import "../style/App.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <div className="App">
      <ThemeSwitcher />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
