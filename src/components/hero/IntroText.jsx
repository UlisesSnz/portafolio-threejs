import { TypeAnimation } from 'react-type-animation';

export const IntroText = ({ styles }) => {
    return (
    <div>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            HI THERE!
        </p>
        <h1 className={`${styles.heroHeadText} text-white`}>
                I'M &nbsp;
            <span className='lg:hidden text-[#915eff]'>
                ULISES
            </span>
            <TypeAnimation
                sequence={[
                    ' ULISES SÁNCHEZ',
                    1000,
                    ' A DEVELOPER',
                    1000,
                    ' A FREELANCER',
                    1000,
                    ' A BLOGGER',
                    1000
                ]}
                wrapper="span"
                cursor={false}
                speed={15}
                repeat={Infinity}
                className='hidden lg:inline text-[#915eff]'
            />
        </h1>
        <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I strives to build immersive and<br className='sm:block hidden'/>beautiful web applications.
        </p>
    </div>
    )
}