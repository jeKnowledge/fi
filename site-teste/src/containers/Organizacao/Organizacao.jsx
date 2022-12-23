import './Organizacao.css';
import {Navbar, Footer, Card} from '../../components'
import images from '../../constants/images';

function Oraganizacao() {
    return (
        <div className="Oraganizacao app_bg">
            <Navbar/>
            <div className="container">
                <Card className="jek-card"
                    title="jeKnowledge"
                    imageUrl={images.logojek}
                    body="A jeKnowledge é uma Júnior Empresa da Faculdade de Ciências
        e Tecnologia da Universidade (FCTUC) de Coimbra. Fundada em 2008, tem como objetivos proporcionar aos seus membros as condições necessárias à aplicação prática de conhecimentos teóricos, valorizar os alunos e docentes da Universidade de Coimbra e servir de elo de ligação entre as comunidades estudantil e empresarial"
                />
                <Card className="jest-card"
                    title="JEST"
                    imageUrl={images.logojest}
                    body="A JEST é uma Júnior Iniciativa da FCTUC, constituída por estudantes de diferentes graus académicos, de vários cursos, tornando-nos assim uma equipa com vários patamares de experiência e conhecimento. O nosso foco é proporcionar serviços de qualidade tendo por base Data Science e instruir a comunidade estudantil nesta mesma área."
                />
            </div>
            <Footer/>
        </div>
    );
}

export default Oraganizacao;