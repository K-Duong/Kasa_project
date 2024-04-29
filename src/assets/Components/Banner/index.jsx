

//banner
function Banner({cover, style, children}){
  return (
    <div className={`banner banner-${style}`}>
      <img src={cover} alt="Rocher à la mer"/>
      {children}
    </div>
  )
}

export default Banner;