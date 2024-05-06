import { useState } from "react";
import Button from '../Button';
import btnDropdown from '../../Image/vector-up.png';
import './_dropdown-menu.scss'

function Dropdown({title, content, style }) {
  const [openContent, setOpenContent] = useState(false);

  const ContentList = ({content}) => {
    return (
      <ul>
        {content.map(c=><li key={c}>{c}</li>)}
      </ul>
    )
  }

  function handleClick(){
    setOpenContent(!openContent);
  }
  
  return (
    <div className={`dropdown dropdown-${style}`}>
      <div className={`dropdown-title dropdown-title-${style}`}>
        <span>{title}</span>
        <Button type={openContent ? 'btn-dropdown-opened' : 'btn-dropdown'} handleClick={handleClick}>
          <img src={btnDropdown} alt="boutton dropdown"/>
        </Button>
      </div>
      <div className= { openContent ? `dropdown-content dropdown-content-${style}` : `dropdown-content dropdown-content-${style} hidden`}>
      {typeof content === "object" ? <ContentList content={content}/> : <p>{content}</p>}
      </div>
    </div>
  )
}
export default Dropdown