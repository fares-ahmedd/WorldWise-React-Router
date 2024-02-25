import styles from "./CityList.module.css";
import CityItem from "./Cityitem";
import Message from "./Message";
import Spinner from "./Spinner";
function CityList({ cities, isLoading }) {
  if (isLoading) return <Spinner />;
  if (!cities.length)
    return (
      <Message
        message={
          "Get started by adding your first city! Simply click on any city on the map to begin"
        }
      />
    );
  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
