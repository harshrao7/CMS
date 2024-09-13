import React from 'react';
import './ImageCard.css';

const ImageCard = (props) => {
  return (
    <div className='Mycard'>
        <div className='background-mycard'>
            {/* <img src='https://media.geeksforgeeks.org/auth-dashboard-uploads/dev2.png'/> */}
            <h3 className='cardtitle'>{props.title}</h3>
        
        </div>
    </div>
  )
}

export default ImageCard