import { Link } from 'react-router-dom';
import 'bootstrap/js/dist/collapse.js'

export default function Header() {
  const navItems = [
    {
      label: 'Handout Maker',
      href: '/handout',
    },
    {
      label: 'Spell Scroll',
      href: '/scroll',
    },
    {
      label: 'Spell List',
      href: '/spells',
    },
  ];

  const breakpoint = 'sm';

  return (
    <header className="py-2 mb-4 border-bottom">
      <div className="container">
        <nav className={`navbar navbar-expand-${breakpoint} d-flex justify-content-between`}>
          <Link to="/" className="navbar-brand">Casper's Tabletop Tools</Link>

          <button
            className={`btn btn-outline-secondary d-${breakpoint}-none`}
            data-bs-toggle="collapse"
            data-bs-target="#mainMenu"
          >
            Menu
          </button>

          <div id="mainMenu" className="collapse navbar-collapse flex-grow-0">
            <ul className="navbar-nav nav nav-pills">
              {navItems.map(item => (
                <li className="nav-item" key={item.href}>
                  <Link to={item.href} className="nav-link">{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};