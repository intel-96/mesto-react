import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(null);
  }



  return (
    <>
      <body className="page">
        <div className="page__container">
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick}
          />
          <Footer />
          <PopupWithForm
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            children={
              <>
                <label htmlFor="name-profile" className="popup__form-label">
                  <input type="text" className="popup__input popup__input_username popup__input" id="name-profile" placeholder="Имя" name="username" required minLength="2" maxLength="40" />
                  <span id="name-profile-error" className="error"></span>
                </label>
                <label htmlFor="about-profile" className="popup__form-label">
                  <input type="text" className="popup__input popup__input_subtitle" id="about-profile" placeholder="О себе" name="job" required minLength="2" maxLength="200" />
                  <span id="about-profile-error" className="error"></span>
                </label>
              </>
            }
          />
          <PopupWithForm
            isOpen={isAddPlacePopupOpen}
            onClose={closeAllPopups}
            name="addCard"
            title="Новое место"
            buttonText="Создать"
            children={
              <>
                <label htmlFor="name-image" className="popup__form-label">
                  <input type="text" className="popup__input popup__input_name" id="name-image" placeholder="Название" name="name" required minLength="2" maxLength="30" />
                  <span id="name-image-error" className="error"></span>
                </label>
                <label htmlFor="link-image" className="popup__form-label">
                  <input type="url" className="popup__input popup__input_link" id="link-image" placeholder="Ссылка на картинку" name="link" required />
                  <span id="link-image-error" className="error"></span>
                </label>
              </>
            }
          />
          <PopupWithForm
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            name="change-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            children={
              <>
                <label htmlFor="link-image" className="popup__form-label">
                  <input type="url" className="popup__input popup__input_link" id="link-avatar" placeholder="Ссылка на изображение" name="link" required />
                  <span id="link-avatar-error" className="error"></span>
                </label>
              </>
            }
          />
          <ImagePopup 
          card={selectedCard !== null && selectedCard} 
          onClose={closeAllPopups}
          />
        </div>
      </body>
    </>
  );
}

export default App;