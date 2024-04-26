
function Card ({location, handleClick}){

 return (
  <>
    <div className="card-location" onClick={handleClick}>
      <img src={location.cover} alt={location.title}/>
      <p>{location.title}</p>
    </div>
  </>
 )
}

export default Card