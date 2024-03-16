import { useEffect, useState } from "react";
import styles from "./CountryItem.module.css";
import Spinner from "./Spinner";
const randomNumber = Math.floor(Math.random() * 5);

function CountryItem({ country }) {
  const [dataImage, setDataImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(
    function () {
      async function getCountryImage() {
        setIsLoading(true);
        try {
          const res = await fetch(
            `https://api.unsplash.com/search/photos?query=${country.country}&client_id=_hq3AX3cijB3fHN9ApbAkuv9WpveFu_DDNaWW09HdKQ`
          );
          const data = await res.json();
          setDataImage(data.results[randomNumber].urls.small);
          console.log(data.results[0].urls.small);
        } catch (error) {
          alert("there was an error loading data...");
        } finally {
          setIsLoading(false);
        }
      }
      getCountryImage();
    },
    [dataImage, country.country]
  );
  if (isLoading) return <Spinner />;
  return (
    <li className={styles.countryItem}>
      <span>{country.emoji}</span>
      <span>{country.country}</span>
      <div className="image">
        <img src={dataImage} width={"200px"} height={"200px"} alt={country} />
      </div>
    </li>
  );
}

export default CountryItem;
