import {createContext} from "react";

const DataContext = createContext(
    {
        cities: [],
        places: []
    }
);

export default DataContext