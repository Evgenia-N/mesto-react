import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import ImagePopup from './ImagePopup';
import PopupAddCard from './PopupAddCard';
import PopupEditAvatar from './PopupEditAvatar';
import PopupEditProfile from './PopupEditProfile';

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({name: '', link: ''});
  }

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }

    document.addEventListener('keydown', handleEscClose);

    return () => {
      document.removeEventListener('keydown', handleEscClose);
    }
  }, []);

  React.useEffect(() => {
    function handleOverlayClick(evt) {
      if (evt.target.classList.contains('popup_opened')) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleOverlayClick);

    return () => {
      document.removeEventListener('click', handleOverlayClick);
    }
  }, []);

  React.useEffect(() => {
    function handleCloseButtonCLick(evt) {
      if (evt.target.classList.contains("popup__close-button")) {
        closeAllPopups();
      }
    }

    document.addEventListener('click', handleCloseButtonCLick);

    return () => {
      document.removeEventListener('click', handleCloseButtonCLick);
    }
  }, []);

  return (
    <div className = "page">
      <Header />
      <Main 
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      />
      <PopupEditAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />

    <div className="popup popup_type_delete-card">
      <div className="popup__container popup__container_type_delete-card">
        <button className="popup__close-button" type="submit" aria-label="Закрыть окно"></button>
        <form className="popup__form" name="delete-card" action="#" method="post" noValidate>
          <h2 className="popup__title popup__title_type_delete-card">Вы уверены?</h2>
          <button className="popup__save-button" type="submit">Да</button>
        </form>
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
