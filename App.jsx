
import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import'./index.css'

const App = ({noOfStars = 5}) => {
  

  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);


  function handleClick(getCurrentIndex){
      // console.log(getCurrentIndex);
      setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex){
    // console.log(getCurrentIndex);
    setHoverRating(getCurrentIndex);
  }

  function handleMouseLeave(){
    // console.log(getCurrentIndex);
    setHoverRating(rating);
  }

  return (
    <div className='star'>
      {
        [...Array(noOfStars)].map((_,index)=>{
          index += 1;

          return (  
          <FontAwesomeIcon
          icon={solidStar}
            key={index}
            className={index <= (hoverRating || rating)? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={()=>handleMouseEnter(index)}
            onMouseLeave={()=>handleMouseLeave()}
            size={40}
          />
          );
        })}
    </div>
  )
}

export default App
