import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.png";

function Header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "About Us", link: "#about-us" },
    { name: "Course", link: "#course" },
    { name: "Gallery", link: "#gallery" },
    { name: "Services", link: "#services" },
    { name: "Candidate Form", link: "#candidate-form" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="header">
      <a href="#top" className="header-left">
        <img src={logo} alt="K2 Performing Art Logo" className="logo" />
        <div>
          <h1>Welcome To The K2 Academy Of Performing Art</h1>
          <p>Know Your Talent</p>
        </div>
      </a>

      <nav className="desktop-nav">
        {navItems.map((item) => (
          <a key={item.name} href={item.link}>
            {item.name}
          </a>
        ))}
      </nav>

      <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Open menu">
        {open ? <X /> : <Menu />}
      </button>

      {open && (
        <nav className="mobile-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.link} onClick={() => setOpen(false)}>
              {item.name}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}

export default Header;