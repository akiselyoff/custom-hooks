// import { useState } from 'react';
import useToggle from '../hooks/useToggle';
import ModalA from './ModalA';

const ComponentA = () => {
  //   const [isModalOpen, setIsModalOpen] = useState(false);
  //   const openModal = () => setIsModalOpen(true);
  //   const closeModal = () => setIsModalOpen(false);

  const { isOpen, open, close, toggle } = useToggle(); //use custom hook and replace code over

  console.log(`isOpen:  ${isOpen}`);
  console.log(`open:  ${open}`);
  console.log(`close:  ${close}`);

  return (
    <>
      {/* <button onClick={openModal}>Open modal</button>
      <ModalA isOpen={isModalOpen} onClose={closeModal} /> */}

      {/* use custom hook and replace code over */}

      <button onClick={open}>Open modal</button>
      <button onClick={close}>Close modal</button>
      <button onClick={toggle}>Toggle modal</button>
      <ModalA isOpen={isOpen} onClose={close} />
    </>
  );
};

export default ComponentA;
