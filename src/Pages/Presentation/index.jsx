import { presentationData } from '../../Data/presentationData.js';
import Dropdown from '../../Components/DropdownMenu/index.jsx';
import Banner from '../../Components/Banner/index.jsx';
import cover from '../../Image/photo-cover2.jpeg';



function PresentationPage() {

  return (
    <div className="presentation-content">
      <Banner cover={cover} />
      {presentationData.map(data => <Dropdown title={data.title} content={data.content} style={'presentation'} />)}
    </div>
  )
}
export default PresentationPage