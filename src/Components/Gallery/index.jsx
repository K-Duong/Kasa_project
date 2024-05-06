import { useEffect, useState } from "react";

import Button from "../Button";
import Modal from "../Modal";

import btnPrev from "../../Image/vector-left.png";
import btnNext from "../../Image/vector-right.png";

import './_gallery.scss'

function Gallery({ gallery }) {
  const [id, setId] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [widthDevice, setWidthDevice] = useState(window.innerWidth);
  
  useEffect(()=>{
    const updateSize = () => {
      setWidthDevice(window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
     
    //clean up function
    return (()=> {
      window.removeEventListener('resize', updateSize)
    })
  }, [widthDevice])


  function DisplayImg({ src }) {
    return <img src={src} alt={`photo ${id + 1}`} />;
  }

  function Picture({ children }) {
    return (
      <div className="picture-location" onClick={handleOpenModal}>
        {children}
      </div>
    );
  }

  function Counter(){
    return <p className="counter">{id+1}/{gallery.length}</p>
  }

  ////events handler
  function handlePreviousPicture(gallery) {
    if (id === 0) {
      setId(gallery.length - 1);
    } else {
      setId((prev) => prev - 1);
    }
  }
  function handleNextPicture(gallery) {
    if (id === gallery.length - 1) {
      setId(0);
    } else {
      setId((prev) => prev + 1);
    }
  }
  function handleOpenModal() {
    setOpenModal(!openModal);
  }

  ///components 
  function MultiplePictures() {
    return (
      <>
        <Button
          type={"btn-gallery btn-gallery-prev"}
          handleClick={() => handlePreviousPicture(gallery)}
        >
          <img src={btnPrev} alt={"précédent"} />
        </Button>
        <Picture onClick={handleOpenModal}>
          <DisplayImg src={gallery[id]} />
        </Picture>
        {widthDevice > 426 && <Counter/>}
        <Button
          type={"btn-gallery btn-gallery-next"}
          handleClick={() => handleNextPicture(gallery)}
        >
          <img src={btnNext} alt={"suivant"} />
        </Button>
      </>
    );
  }
  function SinglePicture() {
    return (
      <Picture onClick={handleOpenModal}>
        <DisplayImg src={gallery[id]} />
      </Picture>
    );
  }

  return (
    <>
      <div className="gallery">
        {gallery.length === 1 ? <SinglePicture /> : <MultiplePictures />}
      </div>
      {openModal && (
        <Modal handleCloseModal={() => setOpenModal(false)}>
          <DisplayImg src={gallery[id]} />
        </Modal>
      )}
      ,
    </>
  );
}

export default Gallery;
