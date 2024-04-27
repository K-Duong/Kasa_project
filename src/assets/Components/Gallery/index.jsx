import Button from "../Button"

function Gallery({gallery}) {

  console.log(gallery)
  return (
    <div>
      {/* button back */}
      <Button/>
      gallery
      {/* button next */}
      <Button/>
    </div>
  )
}

export default Gallery