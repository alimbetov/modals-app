
import './App.css';
import React, { useState } from 'react';
import Modal from 'react-modal';

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };
  
  const closeModal = () => {
    setModalIsOpen(false);
  };

  const modalContent = (
    <div>
      <h2>Заголовок модального окна</h2>
      <p>Текст модального окна</p>
      <button onClick={closeModal}>Закрыть</button>
    </div>
  );

  return (
    <div>
      <p> code src:  <a  href='https://kz.hexlet.io/qna/javascript/questions/kak-sdelat-modalnoe-okno-react'> как сделать модальное окно react</a></p>

      <button onClick={openModal}>Открыть модальное окно</button>
      <Modal isOpen={modalIsOpen} onRequestClose={closeModal}>
        {modalContent}
      </Modal>
    </div>
  );

}
export default App;
