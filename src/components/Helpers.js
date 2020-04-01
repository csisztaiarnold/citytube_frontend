/**
 * Returns the city's name based on the taxonomy term ID.
 *
 * @param {array} cities The cities taxonomy term array.
 * @param {text} city_id The city ID.
 * @public
 */
export function convertCityIdToCityName(cities, city_id) {
    const cityName = cities.data.map(city => {
        return city.id === city_id ? city.attributes.name : null;
    }).join('');
    return cityName;
}