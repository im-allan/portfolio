import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

import Experience from '@components/experience/Experience';
import AnimatedText from '@components/common/AnimatedText';

import type { SetUseState, TextVariant } from '@type/portfolioTypes';

const experiences = [
  {
    id: 1,
    title: 'AFISAN',
    date: '2024',
    description: 'Responsable de análisis de nuevos requerimientos y efectuar desarrollos en el ámbito financiero-contable. Desarrollo de algoritmos e interfaces de usuario, POO, MVC.',
    position: 'Ingeniero en Informática',
    top: 'calc(20vh + 0vh)',
    bottom: '24vh'
  },
  {
    id: 2,
    title: 'UNITTI',
    date: '2023',
    description: 'Responsable de análisis de nuevos requerimientos y efectuar desarrollos en el ámbito financiero-contable. Desarrollo de algoritmos e interfaces de usuario, POO, MVC.',
    position: 'Ingeniero en Informática',
    top: 'calc(20vh + 8vh)',
    bottom: '16vh'
  },
  {
    id: 3,
    title: 'ALLOXENTRIC',
    date: '2022',
    description: 'Responsable de análisis de nuevos requerimientos y efectuar desarrollos en el ámbito financiero-contable. Desarrollo de algoritmos e interfaces de usuario, POO, MVC.',
    position: 'Ingeniero en Informática',
    top: 'calc(20vh + 16vh)',
    bottom: '8vh'
  },
  {
    id: 3,
    title: 'APOLINAV',
    date: '2022',
    description: 'Responsable de análisis de nuevos requerimientos y efectuar desarrollos en el ámbito financiero-contable. Desarrollo de algoritmos e interfaces de usuario, POO, MVC.',
    position: 'Ingeniero en Informática',
    top: 'calc(20vh + 24vh)',
    bottom: '0vh'
  },

]

const textVariant: TextVariant = {
  hidden: {
    y: 160
  },
  visible: {
    y: 0,
    transition: {
      duration: .8
    }
  }
};

export default function Experiences() {
  const target = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({ target });
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [-40, 10]
  );


  return (
    <section id='experiences'
      className='relative transition-color duration-0 z-10 drop-shadow w-full bg-[#111111] text-white'
    >    
      <div className='w-10/12 mx-auto pb-24'>
        <motion.h2
          ref={target}
          className='text-5xl m:text-8xl font-lato font-black pt-28 pb-6 uppercase transition-all duration-500 w-fit'
          style={{ y }}
          >
          <AnimatedText once text="EXPERIENCIA" textVariants={textVariant} />
        </motion.h2>
        <div className='mt-12 flex flex-col justify-between gap-y-20 pb-20'>
          {experiences.map((experience, index) => (
            <Experience key={index} title={experience.title} date={experience.date} description={experience.description} position={experience.position} top={experience.top} bottom={experience.bottom} />
          ))}
        </div>
      </div>
    </section>
    )
}