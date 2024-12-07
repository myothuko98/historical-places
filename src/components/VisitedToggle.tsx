import React from "react";
import { Button } from "./ui/button";

interface VisitedToggleProps {
  visited: boolean;
  onToggle: () => void;
}

const VisitedToggle: React.FC<VisitedToggleProps> = ({ visited, onToggle }) => {
  return (
    <Button
      variant={visited ? "default" : "outline"}
      size="sm"
      onClick={onToggle}
      className={`transition-colors ${visited ? "bg-green-500 text-white" : "bg-white text-gray-700"}`}
    >
      {visited ? "Visited" : "Mark as Visited"}
    </Button>
  );
};

export default VisitedToggle;