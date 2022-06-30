// import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ModalA from './ModalA';

const ComponentA = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  const { isOpen, open, close } = useToggle(); //use custom hook and replace code over

  console.log(isOpen);
  console.log(open);
  console.log(close);

  return (
    <>
      {/* <button onClick={openModal}>Open modal</button>
      <ModalA isOpen={isModalOpen} onClose={closeModal} /> */}

      {/* use custom hook and replace code over */}

      <button onClick={open}>Open modal</button>
      <ModalA isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;
