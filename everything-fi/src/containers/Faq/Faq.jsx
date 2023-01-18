import React, { useState } from 'react';
import images from '../../constants'
import './Faq.css'


function Faq() {
  const [questions] = useState([
    { question: 'bla bla?', answer: 'bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbla' },
    { question: 'bla bla?', answer: 'bla bla bla' },
    { question: 'bla bla?', answer: 'bla bla bla' },
  ]);

  // ARRAY DAS RESPOSTAS VAZIO

  const [visibleAnswers, setVisibleAnswers] = useState(new Array(questions.length).fill(false));

  return (
    <div className='app_faq'>
      <h1>FAQS</h1>
      {questions.map((question, i) => (
      <div 
        className={`question-container ${visibleAnswers[i] ? 'open' : ''}`} 
        key={i} 
        onClick={() => setVisibleAnswers(prevVisibleAnswers => {
          const newVisibleAnswers = [...prevVisibleAnswers];
          newVisibleAnswers[i] = !newVisibleAnswers[i];
          return newVisibleAnswers;
        })}
      >
      <div className='question_div'>
        <div className='question_head'>
        <h2>{question.question}</h2>
        </div>
        <div className="button-container">
      {visibleAnswers[i] 
        ? <p onClick={() => setVisibleAnswers(prevVisibleAnswers => {
              prevVisibleAnswers[i] = !prevVisibleAnswers[i];
              return [...prevVisibleAnswers];
            })}>-</p> 
        : <p onClick={() => setVisibleAnswers(prevVisibleAnswers => {
              prevVisibleAnswers[i] = !prevVisibleAnswers[i];
              return [...prevVisibleAnswers];
            })}>+</p>}
    </div>
    </div>
    <p className={visibleAnswers[i] ? 'show' : 'hide'}>{question.answer}</p>
  </div>
))}
    </div>
  );
}

export default Faq