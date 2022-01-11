import React from "react";

export default function Card({ card, onCardClick }) {

  function handleClick() {
    onCardClick(card);
}
  return(
    <div className="elements__card">
      <button className="elements__delete-button" type="button" aria-label="Удалить фото"></button>
      <div className = "elements__photo-container">
        <img className="elements__photo" src={card.link} alt={card.name} onClick={handleClick}/>
      </div>
      <div className="elements__container">
        <h2 className="elements__title">{card.name}</h2>
        <div className="elements__like-container">
          <button className="elements__like-button" type="button" aria-label="Отметить понравившееся фото"></button>
          <span className="elements__like-counter">{card.likes.length}</span>
        </div>
      </div>
    </div>
  )
}