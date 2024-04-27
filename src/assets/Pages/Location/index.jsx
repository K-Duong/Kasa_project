import { useParams } from "react-router-dom"

import { json } from "../../Data/json";

import Gallery from "../../Components/Gallery";
import Dropdown from "../../Components/DropdownMenu";
import Tag from "../../Components/Tag";
import Rating from "../../Components/Rating";

function LocationPage() {
  //data of location
  const {id} = useParams();
  const newId = id.substring(1)

const data = json.filter((location) => location.id === newId)[0];
console.log("location's data:", data);
  return (
    <div className="location-content">
     <Gallery gallery={data.pictures}/>
     <div className="location-body">
        <header className="location-header">
          <div className="location-title-city">
            <h1 className="location-title">
              {data.title}
            </h1>
            <h2 className="location-city">
              {data.location}
            </h2>
          </div>
          <div className="location-host-info">
            <h3 className="host-name">
              {data.host.name}
            </h3>
            <div className="host-profile">
              <img src={data.host.picture}  alt={data.host.name}/>
            </div>
            
          </div>
    
      </header>

      <div className="tags-and-rating">
        <div className="tags-list">
          {data.tags.map(tag => <Tag key={tag} tag={tag}/>)}
        </div>
        <div className="rating">
          <Rating rating={data.rating}/>
        </div>
      </div>
      <div className="location-details">
        {/* map dropdown with description and equipement */}
        <Dropdown></Dropdown>
      </div>
     </div>
     
    </div>
  )
}
export default LocationPage