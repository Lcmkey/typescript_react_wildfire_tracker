import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Loader from "./Loader";
import Map from "./Map";

interface IProps {
    children: ReactNode;
    // any other props that come into the component
}

const { REACT_APP_API_ENDPOINT: API_ENDPOINT = "" } = process.env;

const App = ({ children }: IProps): ReactElement => {

    const [eventData, setEventData] = useState<[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);

            const res = await axios.get(API_ENDPOINT);

            const { events } = res.data;
            console.log(events);

            setEventData(events);
            setLoading(false);
        }

        getData();


    }, []);

    const renderMapContent = () => {
        if (!loading) {
            return <Map eventData={eventData} />
        } else {
            return <Loader />
        }
    }

    return (
        <div>
            <Header />
            {renderMapContent()}
            {children}
        </div>
    );
}

export default App;