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
        title: "CONTROLO DE DESPESAS",
        text: "O Controlo de Despesas é um aspecto crucial da gestão financeira pessoal. Envolve regularmente o registo, a categorização e a análise dos seus hábitos, permitindo assim que faça uma melhor fiscalização pessoal dos seus gastos e despesas."
    },
    {
        title: "COMO CONTROLAR O MEU DINHEIRO",
        text: "O Controlo do Dinheiro envolve tomar decisões inteligentes sobre como poupar, investir e gastar o seu dinheiro, bem como fixar e manter um orçamento, acompanhar as suas despesas."
    },
    {
        title: "IDEAÇÃO E PSICOLOGIA DE INVESTIMENTOS",
        text: "A ideação de investimentos envolve a apresentação de ideias e estratégias para investir o teu dinheiro de uma forma que se alinhe com os seus objectivos financeiros e tolerância ao risco."
    },
    {
        title: "COMO SOBREVIVER AO AUMENTO DA INFLAÇÃO",
        text: "A inflação pode ter um impacto significativo na sua “saúde financeira”. À medida que a taxa de inflação aumenta, o seu dinheiro perde poder de compra, e, consequentemente, precisa de mais dinheiro para comprar as mesmas coisas."
    },
    {
        title: "ESTADO DA ARTE DA FINTECH",
        text: "Fintech, também conhecida como tecnologia financeira, é a utilização de tecnologia para melhorar e automatizar serviços financeiros, tais como bancos, pagamentos, empréstimos, e investimentos."
    }
]

export default function Temas() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    const onChange = (index, item) => {
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
                                onChange={(index, item) => onChange(index, item)}
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
                                <img className="dots" src={currentIndex === i ? selected : unselected} alt={i} />
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