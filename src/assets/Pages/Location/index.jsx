import { useParams } from "react-router-dom"

function LocationPage() {
  const {id} = useParams();
  console.log(id)
  return (
    <div className="location-content">
      Location {id}
    </div>
  )
}
export default LocationPage