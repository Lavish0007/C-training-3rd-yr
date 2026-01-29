import React, { useState } from 'react';

const Card = ({prods}) => {
    const [height, setHeight] = useState(400);
    const [width, setWidth] = useState(400);
  return (
    <div className="card">
        <img src = {prods.image}
               alt = "card"
               height={height}
               width={width}>        
       </img>
        <p className = 'name'>Name:- {prods.name}</p>
        <p className = 'age'>Age:- {prods.age}</p>
        <button onClick={() => setHeight(height + 10)}>Increase Height</button>
        <button onClick={() => setWidth(width + 10)}>Increase Width</button>
        <button onClick={() => setHeight(height - 10)}>Decrease Height</button>
        <button onClick={() => setWidth(width - 10)}>Decrease Width</button>

    </div>
  );
};

export default Card;