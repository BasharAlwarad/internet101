import { NavLink } from 'react-router-dom';
import Themes from './Themes';

const Nav = () => {
  const activeLink = ({ isActive }) =>
    isActive ? 'btn btn-ghost text-primary font-bold' : 'btn btn-ghost';

  return (
    <nav className="h-screen w-56 bg-base-200 flex flex-col">
      <div className="p-4">
        <Themes />
      </div>
      <div className="flex-1 overflow-y-auto">
        <ul className="menu menu-vertical px-2 py-4">
          <li>
            <NavLink to="/" className={activeLink}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/lan" className={activeLink}>
              LAN
            </NavLink>
          </li>
          {/* Add more NavLinks here */}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

// import { NavLink } from 'react-router-dom';
// import Themes from './Themes';

// const Nav = () => {
//   const activeLink = ({ isActive }) =>
//     isActive ? 'btn btn-ghost text-primary font-bold' : 'btn btn-ghost';
//   return (
//     <nav className="px-4 navbar bg-base-100">
//       <div className="hidden navbar-center lg:flex">
//         <ul className="px-1 menu menu-horizontal">
//           <li>
//             <NavLink to="/" className={activeLink}>
//               Home
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/lan" className={activeLink}>
//               LAN
//             </NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar-end">
//         <Themes />
//       </div>
//     </nav>
//   );
// };

// export default Nav;
