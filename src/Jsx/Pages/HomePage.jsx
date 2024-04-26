// import { json } from './Data/json';
import Card from '../Components/CardLocation'
import cover from '../../assets/photo-source.jpeg'

//banner
function Banner(){
  return (
    //to create banner scss
    <div className='banner'>
      <img className="img-banner" src={cover} alt="rocher à la mer"/>
      <h1>
        Chez vous, partout et ailleurs
      </h1>
    </div>
  )
}
//cards locations

function HomePage({data}) {
  console.log(data);
  function handleClick(location){
    console.log("click", location.id)
  }
  return (
    <div className="home-content">
      <Banner/>
      <div className='cards-content'>
        {data.map(location => { 
          // console.log(location);
          return <Card key={location.id} location={location} handleClick={() => handleClick(location)}/> 
          })}   
      </div>
    </div>
  )
}
export default HomePage