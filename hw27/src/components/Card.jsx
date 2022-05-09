import React from "react";

function Card(props) {
    const style = props.style;
    const handleClick = () => {
        props.onClick(props.header)
        console.log(props.header)
    }
    let cardBody;

    if (props.isSelected) {
        cardBody = style.card_selected
    }
    else {
        cardBody = style.card
    }

    return (

        < div className={cardBody} onClick={handleClick}>
            <div className={style.card__header} >{props.header}</div>
            <div className={style.card__body}>
                <div className={style.card__price_block}>
                    <p className={style.card__body_text_flex_start} >{props.currencytype}</p>
                    <p className={style.card__body_large_text}>{props.currency}</p>
                    <p className={style.card__body_text}>{props.period}</p>
                </div>
                <div className={style.card__connectiontype}>{props.connection}</div>
            </div>

            <div className={style.card__footer}>{props.traffictype}</div>
        </ div>
    )
}

export default Card;
