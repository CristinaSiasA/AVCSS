import React from 'react';

const AlertComponent = ({message,type}) => {
    return (
        <div className={`text-center alert alert-${type}`} role="alert">
            {message}
        </div>
    );
};

export default AlertComponent;