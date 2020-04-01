import React from "react";

const CityMenu = ({cities}) => {
    const cityList = cities.data.map(city => {
        return (
            <li>{city.attributes.name}</li>
        )
    });
    return (
        <ul className="city-menu">
            {cityList}
        </ul>
    )
};

export default CityMenu;