import { Link } from 'react-router-dom';

export default function Header() {
  const navItems = [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Scroll Maker',
      href: '/scroll',
    },
  ];

  return (
    <header className="py-3 mb-4 border-bottom">
      <div className="container d-flex flex-wrap justify-content-between align-items-center">
        <h1 className="m-0">Casper's Tabletop Tools</h1>
        
        <nav className="ms-auto">
          <ul className="nav nav-pills">
            {navItems.map(item => (
              <li className="nav-item" key={item.href}>
                <Link to={item.href} className="nav-link">{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};