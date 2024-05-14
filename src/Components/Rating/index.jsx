import starActive from '../../Image/star-active.png';
import starInactive from '../../Image/star-inactive.png';

import './_rating.scss'

function Rating({rating}){
  const newRating = Math.floor(rating)
  const maxRate = 5;

  const StarActive = () => {
    return (
      <div className='star'>
        <img src={starActive}/>
      </div>
    )
  }

  const StarInactive = () => {
    return (
      <div className='star'>
        <img src={starInactive}/>
      </div>
    )
  }
  
  const startsActive = [];
  const startsInactive = []
  
  for (let i = newRating; i>0; i--) {
    startsActive.push(<StarActive key={i}/>)
  }

  for (let i = maxRate-newRating; i>0; i--){
    startsInactive.push(<StarInactive key={i}/>)
  };

  return (
    <>
      {startsActive}
      {startsInactive}
    </>
   
  )
}
export default Rating