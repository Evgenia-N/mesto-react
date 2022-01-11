import React from 'react';
import Api from '../utils/Api';
import Card from './Card';

export default function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {

  React.useEffect(() => {
    Api.getUserInfo()
      .then((data) => {
        setUserName(data.name);
        setUserDescription(data.about);
        setUserAvatar(data.avatar)
      })
      .catch((err) =>
        console.log(`${err}`))
  }, []);

  React.useEffect(() => {
    Api.getCards()
      .then((cards) => {
        setCards(cards)
      })
      .catch((err) =>
        console.log(`${err}`))
  }, []);


  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  return (
    <main className="content">
    <section className="profile section page__profile">
      <img src={`${userAvatar}`} alt="Фото профиля" className="profile__pic" />
      <button onClick={onEditAvatar} className="profile__pic-edit-button"></button>
      <div className="profile__info">
        <h1 className="profile__title">{`${userName}`}</h1>
        <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
        <p className="profile__subtitle">{`${userDescription}`}</p>
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
          />
        )
      )}
    </section>
  </main>
  )
}