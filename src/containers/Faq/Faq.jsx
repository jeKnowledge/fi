import React, { useState } from 'react';
import './Faq.css'


function Faq() {
  const [questions] = useState([
    { question: 'O que é o Everything-fi?', answer: 'O Everything-fi é uma conferência dedicada à educação financeira e tecnológica para jovens. O evento de dois dias conta com uma extensa programação que inclui workshops práticos, talks inspiradoras, debates estimulantes e atividades lúdicas focadas em tópicos como fintech, web3, criptomoedas e literacia financeira. O objetivo do evento é capacitar os jovens com conhecimento e ferramentas que lhes permitam tomar decisões financeiras conscientes e prepará-los para um futuro cada vez mais digital.' },
    { question: 'Posso participar mesmo sem saber nada sobre estes tópicos?', answer: 'Sim, o Everything-fi foi criado para ser inclusivo e acessível a todas as pessoas, independentemente do seu nível de conhecimento. Todos os conteúdos do evento, desde as talks às atividades, são desenhados para serem facilmente compreendidos por qualquer um. A nossa missão é proporcionar uma experiência enriquecedora e estimulante para todos os participantes, sejam eles expertos ou completos iniciantes nestas áreas.' },
    {question: 'Quem pode participar?', answer: 'Qualquer pessoa pode participar do Everything-fi! O evento foi criado para ser inclusivo e acessível a todos, independentemente do nível de conhecimento em finanças e tecnologia.' },
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