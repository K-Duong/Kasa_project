import { useState } from "react";
import Button from "../Button";
import btnPrev from '../../Image/vector-left.png'
import btnNext from '../../Image/vector-right.png'

///1.Gallery composant: 
///-naviguer vers image précédente et suivante, 
///-pas de bouton pour naviguer si 1 photo
///-La galerie doit toujours rester de la même hauteur, celle indiquée sur la maquette Figma. Les images seront donc coupées et centrées dans le cadre de l’image.

function Gallery({gallery}) {
  const [id, setId] = useState(0);
  console.log(gallery)

  function Picture({src}){
    return (
      <div className="picture-location">
        <img src={src} alt={`photo ${id+1}`}/>
      </div>
    )
  }
  function handlePreviousPicture(gallery){
      //if id === 0
    if (id === 0) {
      setId(gallery.length-1);
    }else{
      //if id !==0
      setId((prev) => prev-1);
    }
  }
  function handleNextPicture(gallery){
      //if id === pictureList.lenght-1
    if (id === gallery.length-1){
      setId(0)
    }else{
      //if id < pictureList.lenght-1
      setId((prev) => prev+1)
    }
  }
  function MultiplePictures(){
    return (
      <>
      {/* button back */}
      <Button type={'previous'} handleClick={()=>handlePreviousPicture(gallery)}> 
        <img src={btnPrev} alt={"précédent"}/>
      </Button>
        <Picture src={gallery[id]}/>
      {/* button next */}
      <Button type={'next'}handleClick={()=>handleNextPicture(gallery)}> 
      <img src={btnNext} alt={"précédent"}/>
      </Button>
    </>
    )
  }
  function SinglePicture(){
    return (
      <Picture src={gallery[id]}/>
    )
  }

  return (
    <div className="gallery">
      {gallery.length === 1 ? <SinglePicture/> : <MultiplePictures/>}
    </div>
  )
}

export default Gallery