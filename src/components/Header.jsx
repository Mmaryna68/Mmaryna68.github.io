const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a href="#about">About me</a>
          </li>
          <li>
            <a href="#projects">Work Projects</a>
          </li>
          <li>
            <a href="#pet-projects">Pet Projects</a>
          </li>
          <li>
            <a href="#contacts">Contacts</a>
          </li>
        </ul>
      </nav>
      <div className="language-switch">
        <a href="/">
          <span>EN</span>
        </a>
        <span>|</span>
        <a href="/ru">
          <span>RU</span>
        </a>
      </div>
    </header>
  );
};

export default Header;
