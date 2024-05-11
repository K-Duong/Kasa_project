import { presentationData } from '../../Data/presentationData.js';

import Dropdown from '../../Components/DropdownMenu/index.jsx';
import Banner from '../../Components/Banner/index.jsx';
import cover from '../../Image/photo-cover2.jpeg';

import './_presentation-page.scss'

function PresentationPage() {

  return (
    <div className="presentation-content">
      <Banner cover={cover} />
      {presentationData.map(data => <Dropdown key={data.title} title={data.title} content={data.content} style={'presentation'} />)}
    </div>
  )
}
export default PresentationPage