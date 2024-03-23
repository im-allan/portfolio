import { useRef, useState } from "react";
import { motion } from "framer-motion";

import type { SetUseState } from "@type/portfolioTypes";

const data = [
  {
    question: 'Acerca de mí',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit neque soluta, debitis sunt eum dolore magni amet voluptatibus quod voluptates quam animi recusandae rerum commodi eaque minus nostrum omnis?'
  },
  {
    question: 'Experiencia',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit neque soluta, debitis sunt eum dolore magni amet voluptatibus quod voluptates quam animi recusandae rerum commodi eaque minus nostrum omnis?'
  },
  {
    question: 'Habilidades',
    answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae reprehenderit neque soluta, debitis sunt eum dolore magni amet voluptatibus quod voluptates quam animi recusandae rerum commodi eaque minus nostrum omnis?'
  }
]

const accordionVariant = {
  hover: {
    color: '#ffffff66',
    stroke: '#ffffff66'
  }
}

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const AccordionItem = ({ question, answer, isOpen, onClick }: AccordionItemProps) => {
  const contentHeight = useRef<HTMLDivElement>(null);

  const containerHeight = contentHeight.current ? contentHeight.current.scrollHeight : 0;

  return (
    <motion.div className="border-b border-white overflow-hidden" whileHover='hover'>
      <button
        className='w-full text-left py-5 px-3 flex items-center justify-between bg-[#111111] cursor-pointer'
        onClick={onClick}
      >
        <motion.p initial={{color: '#ffffff'}} variants={{...accordionVariant}} className="text-3xl m:text-5xl transition-all duration-75 py-5 m:py-16">{question}</motion.p>
        <svg xmlns="http://www.w3.org/2000/svg" className={`w-7 s:w-8 m:w-10 transition-all duration-500 hover:stroke-white/50 ${isOpen ? 'rotate-180' : 'rotate-0'}`} viewBox="0 0 512 512"><motion.path initial={{stroke: '#ffffff'}} variants={{...accordionVariant}} fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="40" d="M112 184l144 144 144-144"/></svg>
      </button>

      <div
        ref={contentHeight}
        className="px-4 transition-all duration-700 ease-in-out"
        style={
          isOpen
            ? { height: containerHeight }
            : { height: "0px" }
        }
      >
        <p className="text-lg m:text-xl pb-16">{answer}</p>
      </div>
    </motion.div>
  );
};

interface DataItem {
  question: string;
  answer: string;

}

interface AccordionProps {
  setHoverAbout: SetUseState;
}
const Accordion = ({setHoverAbout}: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number| null>(null);

  const handleItemClick = (index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-10/12 mx-auto mt-24" onMouseEnter={() => {setHoverAbout(true)}} onMouseLeave={() => {setHoverAbout(false)}}>
      {data.map((item: DataItem, index: number) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={activeIndex === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
