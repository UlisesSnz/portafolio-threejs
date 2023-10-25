import { useState } from 'react';

import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { EarthCanvas } from '../canvas';
import { SectionWrapper } from '../../hoc';
import { slideIn } from '../../utils/motion';
import { styles } from '../../styles';
import { ContactForm } from './ContactForm';

const Contact = () => {

  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value })
  }

  const handleSumbit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      'service_5wmb52z',
      'template_ytpcbry',
      {
        from_name: form.name,
        to_name: 'Ulises',
        from_email: form.email,
        to_email: 'ulises.sanchez.guzman@outlook.com',
        message: form.message,
      },
      'toaY_GTXba_Sdbnfs'
      )
      .then(() => {
        setLoading(false);
        alert('Thank you. I will get back to you as soon as possible.');

        setForm({
          name: '',
          email: '',
          message: '',
        })
      },error => {
        setLoading(false);
        console.log(error);
        alert('Something went wrong.');
      })
  }

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>
        
        <ContactForm form={form} loading={loading} handleChange={handleChange} handleSumbit={handleSumbit} />

      </motion.div>

      <motion.div
        variants={slideIn('right', 'tween', 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas/>
      </motion.div>

    </div>
  )
}

const wrapperContact = () => (
  <SectionWrapper  Component={Contact} idName="contact" />
);

export default wrapperContact;