import React, { useState } from "react";
import Card from "../../components/Card/Card";
import "./Temas.css"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useMediaQuery } from 'react-responsive';
import selected from "../../assets/selectedot.svg";
import unselected from "../../assets/unselectedot.svg";

//Cards Information
const cards = [
    {
        title: "Controlo de Despesas",
        text: "O Controlo de Despesas é um aspecto crucial da gestão financeira pessoal. Envolve regularmente o registo, a categorização e a análise dos seus hábitos, permitindo assim que faça uma melhor fiscalização pessoal dos seus gastos e despesas."
    },
    {
        title: "Smart Decisions",
        text: "Como tomar decisões financeiras informadas e alcançar os seus objetivos, ferramentas e técnicas para controlar despesas e poupar dinheiro"
    },
    {
        title: "Tipos e Psicologias de Investimentos",
        text: "Como compreender e escolher os diferentes tipos de investimentos, como equilibrar o risco e o retorno ao investir, e como entender o comportamento humano e os erros comuns em investimentos."
    },
    {
        title: "Perfil de investidor",
        text: "Como identificar o teu perfil de investidor e como escolher e adaptar os investimentos à tua tolerância ao risco"
    },
    {
        title: "Fintech",
        text: "Como a Fintech, ou seja, tecnologia financeira, e as Startups Fintech estão a mudar como fazemos a gestão das nossas finanças pessoais"
    }
]

export default function Temas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const onChange = (index) => {
        setCurrentIndex(index);
    }
    return (
        <section className="Temas">
            <div className="grid">
                <div className="theme">
                    <h1>TEMAS</h1>
                </div>
                {isMobile ? (
                    <>
                        <div className="carousel-geral">
                            <Carousel
                                infiniteLoop={true}
                                autoPlay={true}
                                showThumbs={false}
                                showStatus={false}
                                showIndicators={false}
                                emulateTouch={true}
                                stopOnHover={true}
                                transitionTime={1000}
                                interval={20000}
                                thumbWidth={90}
                                showArrows={isMobile ? false : true}
                                style={{ width: "margin-top: 30px" }}
                                onChange={(index) => onChange(index)}
                            >
                                {cards.map((card, i) => (
                                    <Card
                                        id={i + 1}
                                        title={card.title}
                                        text={card.text}
                                    />
                                ))}
                            </Carousel>
                        </div>
                        <div className="flex-dots">
                            {cards.map((card, i) => (
                                <img className="dots" src={currentIndex === i ? selected : unselected} alt={i} key={i} onClick={() => onChange(i)} />
                            ))}
                        </div>
                    </>
                ) :
                    <div className="grid-logic">

                        {cards.map((card, i) => (
                            <Card
                                key={i}
                                id={i + 1}
                                title={card.title}
                                text={card.text}
                            />
                        ))}
                    </div>
                }
            </div>
        </section>
    )
}