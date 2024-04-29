import Card from '../../Components/CardLocation';
import Banner from '../../Components/Banner';

import cover from '../../Image/photo-source.jpeg';

import { json } from '../../Data/json';

function HomePage() {
  // json.map((data, index )=> console.log(index, data.pictures.length))
  console.log(json);

  return (
    <div className="home-content">
      <Banner cover={cover} style={'home'}>
        <h1>Chez vous, partout et ailleurs</h1>
      </Banner>
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