import React from "react";

function Card(props) {
    return (
        <div div className="card" >
            <img className="card-photo" src={props.picture} alt={props.name}></img>
            <div className="card__main-text">
                <div className="card__header">{props.name}</div>
                <div className="card__header-alterego">{props.alterego}</div>
            </div>
            <div className="card__summary-block">

                <div className="card_text">{props.profession}</div>
                <div className="card_text">{props.friends}</div>
                <div className="card_text">{props.powers}</div>
                <div className="card_text">{props.bio}</div>

            </div>
        </div >
    )

}

export default Card;