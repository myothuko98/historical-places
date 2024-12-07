// src/types/index.ts
export interface Place {
    id: string;           // Unique identifier
    name: string;         // Name of the historical place
    description: string;  // Short description
    image: string;        // URL to the image
    visited: boolean;     // Whether the place has been visited
  }