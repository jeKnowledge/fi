import React, { useState } from 'react';
import './Faq.css'


function Faq() {
  const [questions] = useState([
    { question: 'O que é o Everything-fi?', answer: 'O Everything-fi é uma conferência dedicada à educação financeira e tecnológica para jovens. O evento de dois dias conta com uma extensa programação que inclui workshops práticos, talks inspiradoras, debates estimulantes e atividades lúdicas focadas em tópicos como fintech, web3, criptomoedas e literacia financeira. O objetivo do evento é capacitar os jovens com conhecimento e ferramentas que lhes permitam tomar decisões financeiras conscientes e prepará-los para um futuro cada vez mais digital.' },
    { question: 'Quanto custa participar no evento?', answer: 'A participação no Everything-fi é totalmente gratuita! O nosso objetivo é tornar o evento o mais inclusivo possível, pelo que a entrada é livre para todos.' },
    {question: 'Onde decorre o evento?', answer: 'O sitio onde decorrerá o evento irá ser anunciado em breve…' },
    {question: 'Quando é que começa o evento?', answer: 'O evento começa dia 5 de Maio e prolongar-se-á até dia 6 de Maio. Para mais informações consulta o nosso horário.'},
    {question: 'Posso participar nos 2 dias do evento?', answer: 'Sim! O evento estará sempre aberto a toda a gente nos dois dias.' }
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
            <span
              className="plus_minus"
              onClick={() => setVisibleAnswers(prevVisibleAnswers => {
                prevVisibleAnswers[i] = !prevVisibleAnswers[i];
                return [...prevVisibleAnswers];
              })}
            >
              {visibleAnswers[i] ? '-' : '+'}
            </span>
            </div>
          </div>
          <span className={`faq_answer ${visibleAnswers[i] ? 'show' : 'hide'}`} >{question.answer}</span>
        </div>
      ))}
    </div>
  );
}

export default Faq