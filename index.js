console.log('Hello world');

let popup = document.querySelector('.popup');
let editButton = document.querySelector('.profile__edit-button');

let popupCloseButton = document.querySelector('.popup__close-icon');

function popupClose() {
  popup.classList.remove('popup_switch_open');
  popup.classList.add('popup_switch_close');
}

function popupOpen() {
  popup.classList.remove('popup_switch_close');
  popup.classList.add('popup_switch_open');
}

editButton.addEventListener('click', popupOpen);
popupCloseButton.addEventListener('click', popupClose);



// save button


// Находим форму в DOM
let formElement = document.querySelector('.popup__form');
// Находим поля формы в DOM
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_job');

nameInput.value = 'Жак-Ив Кусто';
jobInput.value = 'Исследователь океана';
// Обработчик «отправки» формы, хотя пока
// она никуда отправляться не будет
function handleFormSubmit (evt) {

    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
                                                // Так мы можем определить свою логику отправки.
                                                // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    nameValue = nameInput.value;
    jobValue = jobInput.value;


    // Выберите элементы, куда должны быть вставлены значения полей
    let title = document.querySelector('.profile__title');
    let subtitle = document.querySelector('.profile__subtitle');

    // Вставьте новые значения с помощью textContent
    title.textContent = nameValue;
    subtitle.textContent = jobValue;

    popup.classList.remove('popup_switch_open');
    popup.classList.add('popup_switch_close');
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);
