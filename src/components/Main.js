import React from 'react';
import api from '../utils/Api';
import Card from './Card';
import editIcon from '../images/pencil.png'

function Main(props) {
    const [userName, setUserName] = React.useState();
    const [userDescription, setUserDescription] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([
            api.getUserData(), 
            api.getInitialCards()])
        .then(([userInfo, cards]) =>{
            setUserName(userInfo.name);
            setUserAvatar(userInfo.avatar);
            setUserDescription(userInfo.about);
            setCards(cards);
        })
        .catch((err) => {
            console.log(err);
        })
    }, []);
   
    

    return (
        <main>
            <section className="profile">
                <div className="profile__image-container">
                    <img src={userAvatar} alt="Изображение профиля" className="profile__image" />
                    <div className="profile__edit-image" onClick={props.onEditAvatar}>
                        <img src={editIcon} alt="Изменить изображение" className="profile__edit-icon"  />
                    </div>
                </div>
                <div className="profile__info">
                    <div className="profile__info-edit">
                        <h1 className="profile__name">{userName}</h1>
                        <button type="button" className="profile__edit-button" aria-label="Изменить профиль" onClick={props.onEditProfile} />
                    </div>
                    <p className="profile__subtitle">{userDescription}</p>
                </div>
                <button type="button" className="profile__add-button" onClick={props.onAddPlace} />
            </section>
            
            <ul className="cards">
            {cards.map((card) => (
                    <Card card={card} key={card._id} onCardClick={props.onCardClick} />
                ))}
            </ul>
        </main>
    )
}

export default Main;