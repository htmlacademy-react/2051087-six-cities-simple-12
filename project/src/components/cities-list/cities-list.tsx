/* eslint-disable react/no-unused-prop-types */
import { CityNames, CityName } from '../../types/type';

type CitiesListProps = {
  cityNames: CityNames;
  currentCityName: CityName;
  onChangeCityName: (cityName: CityName) => void;
}

function CitiesList(props: CitiesListProps): JSX.Element {
  return (
    <ul className="locations__list tabs__list">
      {
        props.cityNames.map((cityName) => {
          const activeCityClassName = cityName === props.currentCityName ?
            ' tabs__item--active' : // TODO: remove '.tabs__item--active' if no offer (empty)
            '';
          return (
            <li className="locations__item"
              key={cityName}
            >
              { /* TODO: remove eslint rule eventually */}
              { /* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a
                className={`locations__item-link tabs__item ${activeCityClassName}`}
                href="#"
                onClick={() => props.onChangeCityName(cityName)}
              >
                <span>{cityName}</span>
              </a>
            </li>
          );
        })
      }
    </ul>
  );
}

export default CitiesList;
