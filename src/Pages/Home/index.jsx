import { useEffect, useState } from 'react';

import Banner from '../../Components/Banner';
import Card from '../../Components/CardLocation';
import cover from '../../Image/photo-source.jpeg';

import { json } from '../../Data/json';
import "./_home-page.scss";


function HomePage() {
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