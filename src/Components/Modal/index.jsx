function Modal({children, handleCloseModal}) {
  return (
  <div className="overlay">
    <div className="modal">
      {children}
    <button onClick={handleCloseModal}>X</button>
    </div>
  
  </div>
  )
}

export default Modal