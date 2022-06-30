// import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ModalB from './ModalB';

const ComponentB = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  const { isOpen, open, close } = useToggle(); //use custom hook and replace code over

  return (
    <>
      {/* <button onClick={openModal}>Open modal</button>
      <ModalB isOpen={isModalOpen} onClose={closeModal} /> */}

      {/* use custom hook and replace code over */}

      <button onClick={open}>Open modal</button>
      <ModalB isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentB;
