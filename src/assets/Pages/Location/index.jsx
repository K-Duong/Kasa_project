import { useLoaderData, useParams } from "react-router-dom"

import { json } from "../../Data/json";

import Gallery from "../../Components/Gallery";
import Dropdown from "../../Components/DropdownMenu";
import Tag from "../../Components/Tag";

function LocationPage() {
  //data of location
  const {id} = useParams();
  const newId = id.substring(1)

const data = json.filter((location) => location.id === newId);
console.log(data);

  //gallery component

  //tag component
 
  return (
    <div className="location-content">
     <Gallery />
     <div className="location-body">
        <header className="location-header">
          <div className="location-title-city">
            <h1 className="location-title">
              {}
            </h1>
            <h2 className="location-city">
              {}
            </h2>
          </div>
          <div className="location-host-info">
            <h3 className="host-name">
              {}
            </h3>
            <img className="host-profile"/>
          </div>
    
      </header>

      <div className="tags">
        {/* map tag list */}
        <Tag/>

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