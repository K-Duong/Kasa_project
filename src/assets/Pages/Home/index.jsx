import Card from '../../Components/CardLocation';
import cover from '../../Image/photo-source.jpeg';

import { json } from '../../Data/json';

//banner
function Banner(){
  return (
    <div className='banner'>
      <img className="img-banner" src={cover} alt="Rocher à la mer"/>
      <h1>
        Chez vous, partout et ailleurs
      </h1>
    </div>
  )
}

function HomePage() {
  // json.map((data, index )=> console.log(index, data.pictures.length))
  console.log(json);

  return (
    <div className="home-content">
      <Banner/>
      <div className='cards-content'>
        {json.map(location => { 
          return <Card 
          key={location.id} 
          location={location} 
          /> 
          })}   
      </div>
    </div>
  )
}
export default HomePage