import NavBar from '@/components/NavBar/NavBar';
import React from 'react';

const WithLayout = ({children}) => {
    return (
        <div>
            <NavBar />
            {children}
        </div>
    );
};

export default WithLayout;