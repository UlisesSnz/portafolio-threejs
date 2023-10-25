import { ColorSection } from './ColorSection';
import { ComputersCanvas } from '../canvas';
import { IntroText } from './IntroText';
import { ScrollAnimation } from './ScrollAnimation';

import { styles } from '../../styles';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'> 
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        <ColorSection />

        <IntroText styles={ styles } />

      </div>

      <ComputersCanvas />
      
      <ScrollAnimation />
      
    </section>
  )
}

export default Hero
