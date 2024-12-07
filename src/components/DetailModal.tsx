import React from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Place } from "@/types";

interface PlaceDetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  place: Place | null;
}

const PlaceDetailModal: React.FC<PlaceDetailModalProps> = ({
  isOpen,
  onClose,
  place,
}) => {
  if (!place) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{place.name}</DialogTitle>
          <DialogDescription>{place.description}</DialogDescription>
        </DialogHeader>
        <div className="my-4">
          <img
            src={place.image}
            alt={place.name}
            className="w-full h-48 object-cover rounded-lg"
          />
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default React.memo(PlaceDetailModal);