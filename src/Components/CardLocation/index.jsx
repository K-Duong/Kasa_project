import { Link } from "react-router-dom";
import './_card-location.scss';

function Card ({location, handleClick}){
const url=`/location/${location.id}`
 return (
  <>
    <Link to={url}>
      <div className="card-location" onClick={handleClick}>
        <img src={location.cover} alt={location.title}/>
        <p>{location.title}</p>
      </div>
    </Link>
  </>
 )
}

export default Card