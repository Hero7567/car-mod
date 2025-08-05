import React, { useEffect, useRef } from 'react';
import { fabric } from 'fabric';
import cars from '../data/cars.json';
import { useParams } from 'react-router-dom';

function CarEditor() {
  const canvasRef = useRef(null);
  const { id } = useParams();
  const car = cars.find(c => c.id === id);

  useEffect(() => {
    const canvas = new fabric.Canvas(canvasRef.current, {
      width: 800,
      height: 400
    });

    fabric.Image.fromURL(car.image, (img) => {
      img.scaleToWidth(800);
      canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
    });

    // Cleanup
    return () => canvas.dispose();
  }, [car]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
}

export default CarEditor;
