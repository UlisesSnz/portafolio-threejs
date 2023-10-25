import { NavLink } from 'react-router-dom';

import { handleScrollToSection } from '../../utils/handleScrollToSection';

export const NavigationLinks = ({ navLinks }) => {

  return (
    <ul className='list-none hidden sm:flex flex-row gap-10'>
        {navLinks.map(link => (
            <NavLink
                key={link.id}
                className={ ({isActive}) => 
                `hover:text-white text-[18px] font-medium cursor-pointer ${isActive ? 'text-white' : 'text-secondary'}`}
                onClick={() => handleScrollToSection(link.id)}
                to={`#${link.id}`}
                >
                {link.title}
            </NavLink>
        ))}
    </ul>
  )
}
