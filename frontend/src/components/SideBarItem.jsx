import { NavLink } from "react-router-dom";

const SideBarItem = ({ href, children }) => {
  const baseClasses = "group no-underline p-4 flex items-center rounded-lg duration-200";

  const path = href.startsWith('/') ? href : `/${href}`

  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `${baseClasses} ${isActive ? 'bg-violet-100 text-indigo-700 shadow-sm' : 'hover:bg-violet-50 hover:text-indigo-700'}`
      }
    >
      {children}
    </NavLink>
  )
}

export default SideBarItem
