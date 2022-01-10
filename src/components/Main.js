import profilePic from '../images/JacquesYvesCousteau.jpg';

export default function Main({ onEditProfile, onEditAvatar, onAddPlace, onCardClick }) {
  return (
    <main className="content">
    <section className="profile section page__profile">
      <img src={profilePic} alt="Фото профиля" className="profile__pic" />
      <button onClick={onEditAvatar} className="profile__pic-edit-button"></button>
      <div className="profile__info">
        <h1 className="profile__title"></h1>
        <button onClick={onEditProfile} className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
        <p className="profile__subtitle"></p>
      </div>
      <button onClick={onAddPlace} className="profile__add-button" type="button" aria-label="Добавить фото"></button>
    </section>
    <section className="elements section page__elements">
    </section>
  </main>
  )
}