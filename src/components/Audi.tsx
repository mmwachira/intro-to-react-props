import React from 'react'
import PropDrilling from './PropDrilling';
import Mercedes from './Mercedes';

const Audi = ({ car }: CarProps) => {
    return <Mercedes car={car} />;
  };

  export default Audi;