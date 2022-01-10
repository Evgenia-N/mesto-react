import React from "react";
import PopupWithForm from "./PopupWithForm";

export default function PopupEditAvatar({ isOpen, onClose }) {
  return (
    <PopupWithForm name='edit-profile-pic' title='Обновить аватар' buttonText='Сохранить' isOpen={isOpen} onClose={onClose}>
      <input className="popup__input popup__input_type_pic" type="url" id="pic-input" name="avatar" placeholder="Ссылка на картинку" required />
      <span className="popup__error pic-input-error" id="pic-input-error"></span>
    </PopupWithForm>
  );
}
