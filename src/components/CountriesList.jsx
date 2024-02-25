import styles from "./CountryList.module.css";
import Message from "./Message";
import Spinner from "./Spinner";
import CountryItem from "./CountryItem";
function CountriesList({ cities, isLoading }) {
  const countries = cities.reduce((arr, city) => {
    if (!arr.map((el) => el.country).includes(city.country)) {
      return [...arr, { country: city.country, emoji: city.emoji }];
    } else {
      return arr;
    }
  }, []);
  // todo : anther way to do that
  // const countries = Array.from(new Set(cities.map((item) => item.emoji))).map(
  //   (emoji) => {
  //     return cities.find((item) => item.emoji === emoji);
  //   }
  // );
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
    <ul className={styles.countryList}>
      {countries.map((country) => (
        <CountryItem country={country} key={country.emoji} />
      ))}
    </ul>
  );
}

export default CountriesList;
