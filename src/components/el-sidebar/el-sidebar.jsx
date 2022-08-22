import React, {useState, useEffect} from 'react';
import { Link, useLocation } from 'react-router-dom';
import './el-sidebar.scss';

const menuItems = [
  {
    name: 'Dashboard',
    handle: 'dashboard',
    items: [],
    url: '/dashboard',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
      </svg>
    ),
  },
  {
    name: 'Leads',
    handle: 'leads',
    items: [],
    url: '/leads',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    name: 'Customers',
    handle: 'customers',
    items: [],
    url: '/customers',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-users"
      >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

function ELSidebar(){
  const { pathname } = useLocation();
  const [expanded, setExpanded] = useState(true)

  useEffect(() => {
    if(document.body.classList.contains('body-pd')){
      setExpanded(true)
    } else {
      setExpanded(false);
    }
  }, [])

  const onToggle = ()=> {
    setExpanded(expanded => !expanded)
    if (expanded) {
      document.body.classList.remove('body-pd');
    } else {
      document.body.classList.add('body-pd');
    }
  }

  return (
    <div className={`el-sidebar${expanded ? ' expander' : ''}`}>
      <nav className={`nav`}>
        <div>
          <div className="nav_brand">
            <div className="nav_toggle" onClick={onToggle}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 10h16M4 14h16M4 18h16"
                />
              </svg>
            </div>
            <a href="#" className="nav_logo">
              Penny
            </a>
          </div>
        </div>
        <ul>
          {menuItems.map(({ url, handle, name, icon }) => (
            <li>
              <Link
                to={url}
                className={`nav_link${
                  pathname.indexOf(url) > -1 ? ' active' : ''
                }`}
              >
                {icon}
                <span className="nav_name">{name}</span>
              </Link>
            </li>
          ))}
          {/* <li>
          <div className="nav_link collapse">
            {/* <ion-icon name="folder-outline" className="nav_icon"></ion-icon>
            <span className="nav_name">Projects</span>
            <ul className="collapse_menu">
              <a href="#" className="collapse_sublink">
                Boards
              </a>
              <a href="#" className="collapse_sublink">
                Calender
              </a>
              <a href="#" className="collapse_sublink">
                Table
              </a>
            </ul>
          </div>
        </li> */}
        </ul>
        {/* <a href="#" className="nav_link">
        <ion-icon name="log-out-outline" className="nav_icon"></ion-icon>
        <span className="nav_name">Log Out</span>
      </a> */}
      </nav>
    </div>
  );
}

export default ELSidebar