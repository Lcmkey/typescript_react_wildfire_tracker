import React, { ReactElement } from "react";

import spinner from "./../assert/spinner.gif";

const Loader = (): ReactElement => {
    return (
        <div className="loader">
            <img src={spinner} alt="Loaindg"/>
            <h1>Feching Data</h1>
        </div>
    );
}

export default Loader;