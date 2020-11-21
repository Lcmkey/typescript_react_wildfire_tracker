import React, { ReactElement } from "react";

export interface infoInterface {
  id: string;
  title: string;
}

export interface locationInfoInterface {
  info: infoInterface
}

const LocationInfoBox = ({ info }: locationInfoInterface): ReactElement => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      
      <ul>
        <li>
          ID: <strong>{info.id}</strong>
        </li>

        <li>
          TITLE: <strong>{info.title}</strong>
        </li>
      </ul>
    </div>
  );
};

export default LocationInfoBox;
