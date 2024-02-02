import React, { useState } from 'react';
import './TimeSlider.css'; // Make sure to create this CSS file
import { hover } from '@testing-library/user-event/dist/hover';



const getCategoriesForYear = (year) => {
  // This is a placeholder. You'd have logic to get the actual categories here.
  return [`Category for ${year}`, `Another category for ${year}`,"test"," test2"];
};



const TimeSlider = () => {
  const [hoverTime, setHoverTime] = useState('');
  const startTime = new Date("01-01-1700") 
  const [categories, setCategories] = useState([]);
  const endTime   = new Date("01-01-2024")
  const handleMouseMove = (event) => {
    const { top, height } = event.currentTarget.getBoundingClientRect();
    const yPos = event.clientY - top;
    const timeRange = (endTime - startTime)/(1000*60*60*24*365);
    const timePerPixel = timeRange / height;
    const timeAtMouseY = new Date(startTime) 
    timeAtMouseY.setFullYear(timeAtMouseY.getFullYear() + Math.floor(yPos * timePerPixel));
    console.log(timeAtMouseY.getFullYear())
    setHoverTime(new Date(timeAtMouseY).toTimeString()); // Converts the time to a readable string
    const yearCategories = getCategoriesForYear(timeAtMouseY.getFullYear());
    setCategories(yearCategories);
    console.log(categories)




  };

  return (
    <div class ="slider_container">
     
      <div className="slider" onMouseMove={handleMouseMove}> </div>

      <div classname ="popup"> 
          <div>
            <ul>
              {categories.map((category, index) => (
                <li key={index}>{category}</li>
              ))}
            </ul>
          </div>
      </div>
      <div>
      </div>
      
    </div>
  );
};

export default TimeSlider;