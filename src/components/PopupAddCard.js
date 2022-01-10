import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function PopupAddCard({ isOpen, onClose }) {
  return (
    <PopupWithForm name='add-image' title='Новое место' buttonText='Создать' isOpen={isOpen} onClose={onClose}>
      <input className="popup__input popup__input_type_place" id = "place-input" type="text" name="place" placeholder="Название"  minLength="2" maxLength="30" required />
      <span className ="popup__error place-input-error" id="place-input-error"></span>
      <input className="popup__input popup__input_type_url" id = "url-input" type="url" name="link" placeholder="Ссылка на картинку" required />
      <span className="popup__error url-input-error" id="url-input-error"></span>
    </PopupWithForm>
  );
}
