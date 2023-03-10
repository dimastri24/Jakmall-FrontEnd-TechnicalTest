import React, { createContext, useState, useContext } from 'react';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [data, setData] = useState({});

    const setValues = (values) => {
        setData((prev) => ({
            ...prev,
            ...values,
        }));
    };

    return (
        <DataContext.Provider value={{ data, setValues }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
