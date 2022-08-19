import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
    const [isOpen,setIsOpen] = useState(false);
    function Toggle(){
        setIsOpen(!isOpen);
    }
  return <article className='question'>
   <header>
    <h4>{title}</h4>
    <button onClick ={Toggle} className='btn'>{isOpen? <AiOutlineMinus></AiOutlineMinus> : <AiOutlinePlus></AiOutlinePlus>}</button>
   </header>
   {isOpen && <p>{info}</p>}
  </article>;
};

export default Question;