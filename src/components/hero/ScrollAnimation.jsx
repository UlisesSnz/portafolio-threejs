import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';

import { handleScrollToSection } from '../../utils/handleScrollToSection';

export const ScrollAnimation = () => {

    return (
        <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
            <NavLink onClick={() => handleScrollToSection('about')} to={'about'}>
                <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
                    <motion.div
                        animate={{
                            y: [ 0, 24, 0 ]
                        }}
                        transition={{
                            duration: 1.15,
                            repeat: Infinity,
                            repeatType: 'loop',
                        }}
                        className='w-3 h-3 rounded-full bg-secondary mb-1'
                    />
                </div>
            </NavLink>
        </div>
    )
}