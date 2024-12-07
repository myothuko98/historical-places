import React from 'react';
import { Place } from '../types';
import VisitedToggle from './VisitedToggle';
import { Button } from './ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from './ui/card';

interface HistoricalPlaceCardProps {
  place: Place;
  onToggleVisited: (id: string) => void;
  detailToggle: (place: Place) => void;
}

const HistoricalPlaceCard: React.FC<HistoricalPlaceCardProps> = React.memo(
  ({ place, onToggleVisited, detailToggle }) => {
    return (
      <Card className="w-full shadow-md items-stretch flex flex-col justify-between">
        <CardHeader>
          <CardTitle>{place.name}</CardTitle>
        </CardHeader>
        <CardContent>
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-48 object-cover rounded-md mb-4"
          />
          <p className="text-gray-600">{place.description}</p>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <VisitedToggle
            visited={place.visited}
            onToggle={() => onToggleVisited(place.id)}
          />
          <Button
            variant="outline"
            size="sm"
            onClick={() => detailToggle(place)}
          >
            View Details
          </Button>
        </CardFooter>
      </Card>
    );
  },
  (prevProps, nextProps) => {
    // Only re-render if the props change
    return (
      prevProps.place === nextProps.place &&
      prevProps.onToggleVisited === nextProps.onToggleVisited &&
      prevProps.detailToggle === nextProps.detailToggle
    );
  }
);

export default HistoricalPlaceCard;