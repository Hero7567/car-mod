import React from 'react';
import { Link } from 'react-router-dom';
import cars from '../data/cars.json';

function HomePage() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Choose Your Car</h1>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '1.5rem',
        marginTop: '2rem'
      }}>
        {cars.map(car => (
          <Link
            to={`/edit/${car.id}`}
            key={car.id}
            style={{
              textDecoration: 'none',
              color: 'inherit',
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
            }}
          >
            <img
              src={car.image}
              alt={car.name}
              style={{ width: '100%', borderRadius: '8px' }}
            />
            <h3 style={{ marginTop: '0.5rem' }}>{car.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default HomePage;

