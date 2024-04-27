function Button({children, handleClick, type}){
  return (
    <button className={type} onClick={handleClick}>
      {children}
    </button>
  )
}

export default Button;