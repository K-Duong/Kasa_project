// import { json } from './Data/json';
import cover from '../assets/photo-source.jpeg'

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
  console.log(data)
  return (
    <div className="content">
      <Banner/>
    
    </div>
  )
}
export default HomePage