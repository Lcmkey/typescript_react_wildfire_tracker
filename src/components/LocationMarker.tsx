import React from "react";

import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert";

interface propsInterface {
    lat: number;
    lng: number;
    onClick: () => void;
}

const LocationMarker = ({ onClick }: propsInterface) => {
    return (
        <div className="location-marker" onClick={onClick}>
            <Icon className="location-icon" icon={locationIcon} />
        </div>
    );
}

export default LocationMarker;