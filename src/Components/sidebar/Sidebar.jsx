import React, { useEffect, useState } from 'react'
import "./sidebar.css"

const navItems = [
  { id: "home", icon: "icon-home" },
  { id: "about", icon: "icon-user-following" },
  { id: "services", icon: "icon-briefcase" },
  { id: "resume", icon: "icon-graduation" },
  { id: "contact", icon: "icon-bubble" },
];

const Sidebar = () => {
  const [active, setActive] = useState("home");
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  useEffect(() => {
    const sections = navItems
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <aside className='aside'>
       <nav className="nav">
        <div className="nav_menu">
          <ul className="nav_list">
            {navItems.map(({ id, icon }) => (
              <li className="nav_item" key={id}>
                <a
                  href={`#${id}`}
                  className={`nav_link ${active === id ? "active-link" : ""}`}
                  aria-label={id}
                >
                  <i className={icon}></i>
                </a>
              </li>
            ))}
          </ul>
        </div>
       </nav>

       <button
         className="theme_toggle"
         onClick={toggleTheme}
         aria-label="Toggle dark mode"
         title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
       >
         <i className={theme === "light" ? "fa-solid fa-moon" : "fa-solid fa-sun"}></i>
       </button>
    </aside>
  )
}

export default Sidebar
