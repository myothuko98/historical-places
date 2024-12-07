import HistoricalPlaceCard from '../components/Card';
import { toggleVisited } from '../features/placesSlice';
import { RootState } from '../store';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import useDebounce from '@/hooks/useDebounce';
import { Place } from '@/types';
import React, {
  useCallback,
  useEffect,
  useMemo,
  useState,
  lazy,
  Suspense,
} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const PlaceDetailModal = lazy(() => import('@/components/DetailModal'));

const PlacesList: React.FC = () => {
  const dispatch = useDispatch();
  const places = useSelector((state: RootState) => state.places.places);
  const [filteredPlaces, setFilterPlaces] = useState(places);

  const [selectedPlace, setSelectedPlace] = useState<Place | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCloseModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedPlace(null);
  }, []);

  const memoizedPlaces = useMemo(() => filteredPlaces, [filteredPlaces]);
  const memoizedSelectedPlace = useMemo(() => selectedPlace, [selectedPlace]);



  const handleOpenModal = (place: Place) => {
    setSelectedPlace(place);
  };

  useEffect(() => {
    if (selectedPlace) {
      setIsModalOpen(true);
    }
  }, [selectedPlace]);

  useEffect(() => {
    dispatch({ type: 'places/fetchPlaces' });
  }, [dispatch]);

  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  const handleToggleVisited = (id: string) => {
    dispatch(toggleVisited(id));
  };

  useEffect(() => {
    const filteredResults = places.filter((place) => {
      return place.name
        .toLocaleLowerCase()
        .includes(debouncedSearchTerm.toLocaleLowerCase());
    });

    setFilterPlaces(filteredResults);
  }, [places, debouncedSearchTerm]);

  return (
    <div className="container mx-auto px-4 my-6">
      {/* Search Box */}
      <div className="mb-6">
        <Label
          htmlFor="search"
          className="block text-sm font-medium text-gray-700"
        >
          Search Historical Places
        </Label>
        <div className="mt-2">
          <Input
            id="search"
            type="text"
            placeholder="Search by name..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
      </div>

      {/* Historical Places List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {memoizedPlaces.map((place) => (
          <HistoricalPlaceCard
            key={place.id}
            place={place}
            onToggleVisited={handleToggleVisited}
            detailToggle={handleOpenModal}
          />
        ))}
      </div>

      <Suspense fallback={<div>Loading...</div>}>
        <PlaceDetailModal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          place={memoizedSelectedPlace}
        />
      </Suspense>
    </div>
  );
};

export default PlacesList;
