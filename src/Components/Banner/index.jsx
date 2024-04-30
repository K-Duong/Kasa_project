
//banner
function Banner({cover, style, children}){
  return (
    <div className={`banner banner-${style}`}>
      <img src={cover} alt="photo de couverture"/>
      {children}
    </div>
  )
}

export default Banner;