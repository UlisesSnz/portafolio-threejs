import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

import { ProjectImage } from './ProjectImage';
import { ProjectInfo } from './ProjectInfo';
import { ProjectTags } from './ProjectTags';

import { fadeIn } from '../../utils/motion';
import { github } from '../../assets';

export const ProjectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
            max: 45,
            scale: 1,
            speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <ProjectImage github={github} image={image} name={name} source_code_link={source_code_link} />

        <ProjectInfo  description={description} name={name} />

        <ProjectTags tags={tags} />

      </Tilt>
    </motion.div>
  )
}