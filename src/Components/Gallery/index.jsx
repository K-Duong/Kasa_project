import { useState } from "react";

import Button from "../Button";
import Modal from "../Modal"

import btnPrev from '../../Image/vector-left.png';
import btnNext from '../../Image/vector-right.png'

function Gallery({gallery}) {
  const [id, setId] = useState(0);
  const [openModal, setOpenModal] = useState(false)
  // console.log(gallery)

  function DisplayImg({src}){
   return <img src={src} alt={`photo ${id+1}`}/>
  }

  function Picture({children}){
    return (
      <div className="picture-location" onClick={handleOpenModal}>
        {children}
      </div>
    )
  }

  ////events handle
  function handlePreviousPicture(gallery){
    if (id === 0) {
      setId(gallery.length-1);
    }else{
      setId((prev) => prev-1);
    }
  }
  function handleNextPicture(gallery){
    if (id === gallery.length-1){
      setId(0)
    }else{
      setId((prev) => prev+1)
    }
  }

  function handleOpenModal(){
    console.log("open modal");
    setOpenModal(!openModal);
  }
  function MultiplePictures(){
    return (
      <>
      {/* button back */}
      <Button type={'btn-gallery btn-gallery-prev'} handleClick={()=>handlePreviousPicture(gallery)}> 
        <img  src={btnPrev} alt={"précédent"}/>
      </Button>
        <Picture onClick={handleOpenModal}>
          <DisplayImg src={gallery[id]}/>
        </Picture>
      {/* button next */}
      <Button type={'btn-gallery btn-gallery-next'}handleClick={()=>handleNextPicture(gallery)}> 
      <img  src={btnNext} alt={"suivant"}/>
      </Button>
    </>
    )
  }
  function SinglePicture(){
    return (
      <Picture onClick={handleOpenModal}>
        <DisplayImg src={gallery[id]}/>
      </Picture>
    )
  }

  return (
    <>
    <div className="gallery">
      {gallery.length === 1 ? <SinglePicture/> : <MultiplePictures/>}
    </div>
    {openModal && <Modal handleCloseModal={()=>setOpenModal(false)}><DisplayImg src={gallery[id]}/></Modal>},
    
    </>
  )
}

export default Gallery