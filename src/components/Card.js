import React from 'react';

function Card(props) {

    function handleClick() {
        props.onCardClick(props.card);
    }

    return (
        <li className="cards__element">
            <button type="button" className="cards__delete-button"></button>
            <div className="cards__image-container">
                <img className="cards__image" src={props.card.link} alt={props.card.name} onClick={handleClick} />
            </div>
            <div className="cards__subtitle">
                <h3 className="cards__name">{props.card.name}</h3>
                <div className="cards__likes">
                    <button type="button" className="cards__like-button"></button>
                    <span className="cards__like-count">{props.card.likes.length}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;