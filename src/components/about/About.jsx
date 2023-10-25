import { motion } from 'framer-motion';

import { fadeIn, textVariant } from '../../utils/motion';
import { SectionWrapper } from '../../hoc';
import { ServiceCard } from './ServiceCard';
import { services } from '../../constants';
import { styles } from '../../styles';

const About = () => {
  return (
    <>
      <motion.div variants={ textVariant() }>
        <p className={ styles.sectionSubText } >Introduction</p>
        <h2 className={ styles.sectionHeadText }>Overview</h2>
      </motion.div>

      <motion.p
        variants={ fadeIn("", "", 0.1, 1) }
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro iure earum facere,
          officia aperiam omnis natus, placeat sed exercitationem nemo voluptate esse quaerat
          voluptatem tenetur voluptatibus ut nihil saepe ab.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro iure earum facere,
          officia aperiam omnis natus, placeat sed exercitationem nemo voluptate esse quaerat
          voluptatem tenetur voluptatibus ut nihil saepe ab.
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard
            key={ service.title }
            index={ index }
            { ...service }
          />
        ))}
      </div>
    </>
  )
}

const WrappedAbout = () => (
  <SectionWrapper Component={About} idName="about" />
);

export default WrappedAbout;
