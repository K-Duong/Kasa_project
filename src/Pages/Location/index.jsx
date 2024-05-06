import { useParams } from "react-router-dom"

import { json } from "../../Data/json";

import Gallery from "../../Components/Gallery";
import Dropdown from "../../Components/DropdownMenu";
import Tag from "../../Components/Tag";
import Rating from "../../Components/Rating";

import './_location-page.scss'

function LocationPage() {
  //data of location
  const {id} = useParams();

  //TODO: array.find
  const data = json.find((el) => el.id === id);
  console.log(data)

  if (!data) throw new Error ("id non retrouvé");

  console.log("location's data:", data);
    return (
      <div className="location-content">
        <Gallery gallery={data.pictures}/>
        <div className="location-body">
          <div className="location-header">
            <div className="location-info">
              <h1 className="location-title">
                {data.title}
              </h1>
              <h2 className="location-city">
                {data.location}
              </h2>
            <div className="tags-list">
              {data.tags.map(tag => <Tag key={tag} tag={tag}/>)}
            </div>
          </div>
          <div className="host-and-rating">
            <div className="host-info">
              <div className="host-name-container">
                <h3 className="host-name">
                  {data.host.name}
                </h3>
              </div>
              <div className="host-profile">
                <img src={data.host.picture}  alt={data.host.name}/>
              </div>
            </div>
            <div className="rating">
              <Rating rating={data.rating}/>
            </div>
          </div>
          </div>
          
          <div className="location-details">
            {/* map dropdown with description and equipement */}
            <Dropdown title={'Description'} content={data.description} style={"location"}/>
            <Dropdown title={"Equipements"} content={data.equipments} style={"location"}/>
          </div>
        </div>
      
      </div>
    )
}
export default LocationPage