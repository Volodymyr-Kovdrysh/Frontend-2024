import React from 'react';
import {useRouteError} from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    // console.log('ErrorPage',error)
    return (
        <div>
            <h1>Oops!</h1>
            <p>
                <i>
                    {error.statusText || error.message}
                </i>
            </p>
        </div>
    );
};

export default ErrorPage;
