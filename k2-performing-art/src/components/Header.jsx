import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = ["About Us", "Course", "Gallery", "Services", "Contact"];

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="K2 Performing Art Logo" className="logo" />
        <div>
          <h1>Welcome To The K2 Performing Art</h1>
          <p>Academy of Performing Art</p>
        </div>
      </div>

      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a key={item} href={`#${item.toLowerCase().replaceAll(" ", "-")}`}>
            {item}
          </a>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;