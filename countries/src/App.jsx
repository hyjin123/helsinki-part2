import { useState, useEffect } from "react";
import countryService from "./services/countryService";
import Search from "./components/Search";
import Country from "./components/Country";
import Countries from "./components/Countries";

function App() {
  const [search, setSearch] = useState("");
  const [countriesList, setCountriesList] = useState([]);
  const [previousCountriesList, setPreviousCountriesList] = useState([]);
  const [toggleBack, setToggleBack] = useState(false);

  useEffect(() => {}, []);

  const onChange = (event) => {
    const newSearchValue = event.target.value;
    setSearch(newSearchValue);
    countryService.getAll(newSearchValue).then((response) => {
      console.log(response);
      setCountriesList(response);
    });
  };

  const handleShow = (country) => {
    setPreviousCountriesList(countriesList);
    setCountriesList([country]);
    setToggleBack(true);
  };

  const handleBack = () => {
    setCountriesList(previousCountriesList);
    setToggleBack(false);
  };

  return (
    <>
      <h1>Country Inquiry</h1>
      <Search search={search} onChange={onChange} />
      <Countries
        countriesList={countriesList}
        handleShow={handleShow}
        handleBack={handleBack}
        toggleBack={toggleBack}
      />
    </>
  );
}

export default App;
