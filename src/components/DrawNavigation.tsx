import { Navigation, useMap } from "@mappedin/react-sdk";
import React from "react"

export default function DrawNavigation(space1, space2) {
  const { mapData, mapView } = useMap();

  // const space1 = mapData
  //   .getByType("space")
  //   .filter((space) => space.floor.id === mapView.currentFloor.id)[0];
  // const space2 = mapData
  //   .getByType("space")
  //   .filter((space) => space.floor.id === mapView.currentFloor.id)[10];
  const directions = mapView.getDirections(space1, space2);

  return directions ? <Navigation directions={directions} /> : null;
}
