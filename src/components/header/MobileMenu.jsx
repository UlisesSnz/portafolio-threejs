import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { handleScrollToSection } from '../../utils/handleScrollToSection';

export const MobileMenu = ({ close, menu, navLinks }) => {
  
    const [toggle, setToggle] = useState(false);

    return (
        <div className='sm:hidden flex flex-1 just justify-end items-center'>
            <img 
            src={toggle ? close : menu}
            alt={menu} 
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={ () => setToggle(!toggle) }
            />
            <div className={`${!toggle ? 'hidden' : 'flex' } p-6 black-gradient absolute top-20 righ-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}>
                <ul className='list-none flex justify-end items-start flex-col gap-4'>
                    {navLinks.map(link => (
                    <NavLink
                        key={link.id}
                        className={({isActive}) => 
                        `font-poppins font-medium cursor-pointer text-[16px] ${isActive ? 'text-white' : 'text-secondary'}`}
                        onClick={() => {
                            setToggle(!toggle);
                            handleScrollToSection(link.id);
                        }}
                        to={`#${link.id}`}>
                        {link.title}
                    </NavLink>
                    ))}
                </ul>
            </div>
        </div>
    )
}
