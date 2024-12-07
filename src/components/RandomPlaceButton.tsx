// src/components/RandomPlaceButton.tsx
import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Button } from './ui/button';


const RandomPlaceButton: React.FC = () => {
  const places = useSelector((state: RootState) => state.places.places);

  const suggestRandomPlace = () => {
    const randomPlace = places[Math.floor(Math.random() * places.length)];
    alert(`Random Place: ${randomPlace.name}`);
  };

  return (
    <Button onClick={suggestRandomPlace}>Suggest a Random Place</Button>
  );
};

export default RandomPlaceButton;