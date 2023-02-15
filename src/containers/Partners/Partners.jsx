import React from "react";
import "./Partners.css"
import images from '../../constants/images'

const Partners = () => {

    return (
        <div className="app_partners">
            <h1>PARCERIAS E PATROCINIOS</h1>
            <div className="app_partners_pack">
                <h1>PACK 1</h1>
                <div className="app_partners_pack_logos">
                <a href={""} rel="noreferrer" ><img src={images.loop_logo} alt="loop logo"></img></a>
                <a href={"https://www.linkedin.com/company/everythingfi/"}><img src={images.big_jek_logo} alt="jek logo"></img></a>
                </div>


            </div>
            <div className="app_partners_pack">
                <h1>PACK 2</h1>
                <div className="app_partners_pack_logos">
                <a href={""} rel="noreferrer" ><img src={images.feedzai_logo} alt="feedzai logo"></img></a>
                <a href={""}><img src={images.noesis_logo} alt="jek logo"></img></a>
                <a href={""} rel="noreferrer" ><img src={images.good_barber_logo} alt="good_barber logo"></img></a>
                </div>
            </div>
            <div className="app_partners_pack">
                <h1>PACK 3</h1>
                <div className="app_partners_pack_logos">
                <a href={""} rel="noreferrer" ><img src={images.cisco_logo} alt="cisco logo"></img></a>
                <a href={""}><img src={images.grama_logo} alt="grama logo"></img></a>
                </div>
                </div>
            <div className = "app_partners_pack">
                <h1> PODCAST</h1>
                <div className="app_partners_pack_logos">
                <a href={""} rel="noreferrer" ><img src={images.feedzai_logo} alt="feedzai logo"></img></a>
                <a href={""}><img src={images.noesis_logo} alt="jek logo"></img></a>
                <a href={""} rel="noreferrer" ><img src={images.cisco_logo} alt="cisco logo"></img></a>
                <a href={""}><img src={images.grama_logo} alt="grama logo"></img></a>
                </div>
            </div>
            
        </div>
    )

}

export default Partners