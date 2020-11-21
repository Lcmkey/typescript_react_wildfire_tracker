import React, { ReactElement, useState } from "react";
import GoogleMapReact from "google-map-react";

import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import { infoInterface } from "./LocationInfoBox";


interface centerInterface {
    lat: number;
    lng: number;
}

interface MapInterface {
    eventData: any;
    center: centerInterface;
    zoom: number;
}

const { REACT_APP_GOOGLE_MAP_API_SECRET_KEY: GOOGLE_MAP_API_SECRET_KEY = "" } = process.env;

const Map = ({ eventData, center, zoom }: MapInterface): ReactElement => {

    const [locationInfo, setLocationInfo] = useState<infoInterface | null>(null);

    const onClickEvent = ({ id, title }: infoInterface) => {
        setLocationInfo({ id, title })
    };

    const markers: Array<ReactElement | null> = eventData.map((d: any) => {
        /**
         * id: 8 meaning wildfire
         */
        if (d.categories[0].id === 8) {
            const { id, title, geometries } = d;

            return (
                <LocationMarker
                    key={id}
                    lat={geometries[0].coordinates[1]}
                    lng={geometries[0].coordinates[0]}
                    onClick={() => onClickEvent({ id, title })}
                />
            );
        }

        return null;
    });

    const renderLocationInfoContent = () => {
        if (locationInfo) {
            return <LocationInfoBox info={locationInfo} />
        }
    }

    return (
        <div className="google-map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: GOOGLE_MAP_API_SECRET_KEY }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            {renderLocationInfoContent()}
        </div>
    );

}

Map.defaultProps = {
    center: {
        lat: 22.233941,
        lng: 114.185010
    },
    zoom: 0
}

export default Map;