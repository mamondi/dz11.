import React, { useState } from 'react';
import Timer from '../components/Timer';

function Other() {
  const [clocks] = useState([
    { city: 'США Вашингтон', offset: -4 },
    { city: 'UTC', offset: 0 },
    { city: 'Гонконг', offset: 8 }
  ]);

  return (
    <div>
      {clocks.map((clock, index) => (
        <Timer key={index} city={clock.city} offset={clock.offset} />
      ))}
    </div>
  );
}

export default Other;
