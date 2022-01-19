import React from 'react';
import Api from '../utils/Api';
import Card from './Card';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

export default function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick, onCardLike, onCardDelete }) {

  const currentUser = React.useContext(CurrentUserContext);
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Api.getCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) =>
        console.log(`${err}`))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const pressLike = isLiked ? Api.removeLike(card._id) : Api.addLike(card._id)
    pressLike.then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
      .catch((err) =>
        console.log(`${err}`))
  } 

  function handleCardDelete(card) {
    Api.deleteCard(card._id)
    .then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
    .catch((err) =>
      console.log(`${err}`))
  }

  return (
    <main className="content">
    <section className="profile section page__profile">
      <img src={currentUser.avatar} alt="Фото профиля" className="profile__pic" />
      <button onClick={onEditAvatar} className="profile__pic-edit-button"></button>
      <div className="profile__info">
        <h1 className="profile__title">{currentUser.name}</h1>
        <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
        <p className="profile__subtitle">{currentUser.about}</p>
      </div>
      <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить фото"></button>
    </section>
    
    <section className="elements section page__elements">
      {cards.map(
        (card) => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            onCardLike={handleCardLike}
            onCardDelete={handleCardDelete}
          />
        )
      )}
    </section>
  </main>
  )
}