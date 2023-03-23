import  React,{ useState, useRef } from "react";
import "./Card.css"

function Card({ pic, name, text }) {
  const [imagemZIndex, setImagemZIndex] = useState(2);
  const [descricaoZIndex, setDescricaoZIndex] = useState(1);
  const imagemRef = useRef(null);
  const descricaoRef = useRef(null);

  const handleClickImagem = () => {
    setImagemZIndex(imagemZIndex === 1 ? 2 : 1);
    setDescricaoZIndex(descricaoZIndex === 1 ? 2 : 1);
  };

  const handleClickDescricao = () => {
    setDescricaoZIndex(descricaoZIndex === 1 ? 2 : 1);
    setImagemZIndex(imagemZIndex === 1 ? 2 : 1);
  };


  return (
    <div className="card-container" >
      <div className="card-content">

        <div className="card-pic" ref={imagemRef} style={{ zIndex: imagemZIndex }} onClick={handleClickImagem} >
          <img src={pic} alt='team-member' />
        </div>

        <div className="card-text" ref={descricaoRef} style={{ zIndex: descricaoZIndex }} onClick={handleClickDescricao}>
          <h3>{name}</h3>
          <p>{text}</p>
        </div>

      </div>
    </div>
  )
}

export default Card