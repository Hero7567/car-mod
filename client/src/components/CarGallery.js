import React from 'react';
import cars from '../data/cars.json';
import { Link } from 'react-router-dom';

function CarGallery() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4">
      {cars.map(car => (
        <Link key={car.id} to={`/edit/${car.id}`}>
          <img src={car.image} alt={car.name} className="rounded shadow" />
          <p>{car.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default CarGallery;
