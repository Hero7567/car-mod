import React from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/cars.json';
import CarViewer3D from '../components/CarViewer3D';

const ModifyPage = () => {
  const { id } = useParams();
  const car = carData.find((c) => c.id === id);

  if (!car) {
    return <p className="p-6">Car not found</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{car.name}</h1>
      <CarViewer3D modelPath={car.model} />
      {/* Later: Add toolbar / color / wheel modifications here */}
    </div>
  );
};

export default ModifyPage;
