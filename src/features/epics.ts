import placesData from '../data/places.json';
import { Place } from '../types';
import { setPlaces } from './placesSlice';
import { ofType } from 'redux-observable';
import { from, of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

// Import mock data or real data source

// Epic to fetch places from a data source local JSON file
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const fetchPlacesEpic = (action$: any) =>
  action$.pipe(
    ofType('places/fetchPlaces'), // Custom action to trigger the fetch process
    mergeMap(() =>
      from(fetchPlaces()).pipe(
        map((places: Place[]) => setPlaces(places.reverse())), // Dispatch setPlaces on success
        catchError((error) => {
          console.error('Error fetching places:', error);
          return of(); // Handle error gracefully, could return a failure action
        })
      )
    )
  );

// Mock function to simulate fetching places (you can replace it with a real API call)
const fetchPlaces = async (): Promise<Place[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(placesData as Place[]); // Mock response
    }, 1000); // Simulate network delay
  });
};
