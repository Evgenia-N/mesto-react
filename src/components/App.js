import logo from '../images/logo.svg';

function App() {
  return (
    <div className="App">
      <header className="header page__header">
      <img src={logo} alt="Логотип_Mesto" className="header__logo" />
    </header>
    <main className="content">
      <section className="profile section page__profile">
        <img src="#" alt="Фото профиля" className="profile__pic" />
        <button className="profile__pic-edit-button"></button>
        <div className="profile__info">
          <h1 className="profile__title"></h1>
          <button className="profile__edit-button" type="button" aria-label="Редактировать профиль"></button>
          <p className="profile__subtitle"></p>
        </div>
        <button className="profile__add-button" type="button" aria-label="Добавить фото"></button>
      </section>
      <section className="elements section page__elements">
      </section>
    </main>
    <footer className="footer section page__footer">
      <p className="footer__text">&copy; 2021 Mesto Russia</p>
    </footer>
    <div className="popup popup_type_edit-profile">
      <div className="popup__container">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="edit-profile" action="#" method="post" novalidate>
          <h2 className="popup__title">Редактировать профиль</h2>
          <input className="popup__input popup__input_type_name" id = "name-input" type="text" name="name" placeholder="ФИО" minlength="2" maxlength="40" required />
          <span className ="popup__error name-input-error"></span>
          <input className="popup__input popup__input_type_about-self" id = "job-input" type="text" name="about-self" placeholder="О себе" minlength="2" maxlength="200" required />
          <span className ="popup__error job-input-error"></span>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_edit-profile-pic">
      <div className="popup__container popup__container_type_edit-profile-pic">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="edit-profile-pic" action="#" method="post" novalidate>
          <h2 className="popup__title">Обновить аватар</h2>
          <input className="popup__input popup__input_type_pic" type="url" id="pic-input" name="avatar" placeholder="Ссылка на картинку" required />
          <span className="popup__error pic-input-error"></span>
          <button className="popup__save-button" type="submit">Сохранить</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_add-image">
      <div className="popup__container popup__container_type_add-image">
        <button className="popup__close-button" type="submit" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="add-image" action="#" method="post" novalidate>
          <h2 className="popup__title popup__title_type_add-image">Новое место</h2>
          <input className="popup__input popup__input_type_place" id = "place-input" type="text" name="place" placeholder="Название"  minlength="2" maxlength="30" required />
          <span className ="popup__error place-input-error"></span>
          <input className="popup__input popup__input_type_url" id = "url-input" type="url" name="link" placeholder="Ссылка на картинку" required />
          <span className ="popup__error url-input-error"></span>
          <button className="popup__save-button" type="submit">Создать</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_delete-card">
      <div className="popup__container popup__container_type_delete-card">
        <button className="popup__close-button" type="submit" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="delete-card" action="#" method="post" novalidate>
          <h2 className="popup__title popup__title_type_delete-card">Вы уверены?</h2>
          <button className="popup__save-button" type="submit">Да</button>
        </form>
      </div>
    </div>
    <div className="popup popup_type_fullscreen">
      <div className="popup__fullscreen">
        <button className="popup__close-button" type="button" aria-label="Закрыть окно"></button>
        <img className="popup__image" src="#" alt="#" />
        <p className="popup__caption"></p>
      </div>
    </div>
    <template className="card-template">
      <div className="elements__card">
        <button className="elements__delete-button" type="button" aria-label="Удалить фото"></button>
        <div className = "elements__photo-container">
          <img className="elements__photo" src="#" alt="#" />
        </div>
        <div className="elements__container">
          <h2 className="elements__title"></h2>
          <div className="elements__like-container">
            <button className="elements__like-button" type="button" aria-label="Отметить понравившееся фото"></button>
            <span className="elements__like-counter"></span>
          </div>
        </div>
      </div>
    </template>
    </div>
  );
}

export default App;
