import React from 'react';

const Primary = ({children}) => {
    return (
        <>
        <button className="bg-gradient-to-r from-primary to-secondary text-gray-50 btn btn-primary">{children}</button>
        </>
    );
};

export default Primary;