import React from 'react';

const useGenerateRandomColor = () => {
  const [color,setColor] = React.useState("#000")
  const generateColor = () =>{
      setColor("#" + Math.random().toString(16).substr(-6));
  };
  return {color,generateColor};
    
};
export default useGenerateRandomColor;