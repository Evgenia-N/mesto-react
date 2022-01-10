import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function PopupEditProfile({ isOpen, onClose }) {
  return (
    <PopupWithForm name='edit-profile' title='Редактировать профиль' buttonText='Сохранить' isOpen={isOpen} onClose={onClose}>
      <input className="popup__input popup__input_type_name" id = "name-input" type="text" name="name" placeholder="ФИО" minLength="2" maxLength="40" required />
      <span className ="popup__error name-input-error" id="name-input-error"></span>
      <input className="popup__input popup__input_type_about-self" id = "job-input" type="text" name="about-self" placeholder="О себе" minLength="2" maxLength="200" required />
      <span className ="popup__error job-input-error" id="job-input-error"></span>
    </PopupWithForm>
  );
}
