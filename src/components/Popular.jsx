import React from "react";
import PropTypes from "prop-types";
import { fetchPopularRepos } from "../utils/api";

const LanguagesNav = ({ selectedLang, onUpdateLanguage }) => {
  const langauges = ["All", "JavaScript", "Python", "Ruby", "CSS", "Rust"];

  return (
    <ul className="flex-center">
      {langauges &&
        langauges.map((langauge, index) => (
          <li key={index}>
            <button
              className="btn-clear nav-link"
              style={
                langauge === selectedLang ? { color: "rgb(187,46,31)" } : null
              }
              onClick={() => onUpdateLanguage(langauge)}
            >
              {langauge}
            </button>
          </li>
        ))}
    </ul>
  );
};

LanguagesNav.propTypes = {
  selectedLang: PropTypes.string.isRequired,
  updateLanguage: PropTypes.func.isRequired,
};

const Popular = () => {
  const [lang, setLang] = React.useState("All");
  const [repos, setRepos] = React.useState(null);
  const [error, setError] = React.useState(null);

  const updateLanguage = (selectedLang) => {
    setLang(selectedLang);
    setError(null);
    setRepos(null);

    fetchPopularRepos(selectedLang)
      .then((repos) => setRepos(repos), setError(null))
      .catch((error) => {
        console.warn("Error fetching repos : ", error);
        setError(" There was an error fetching the repositories");
      });
  };

  const isLoading = () => {
    return repos === null && error === null;
  };
  return (
    <>
      <LanguagesNav onUpdateLanguage={updateLanguage} selectedLang={lang} />
      {isLoading && <p>LOADING</p>}
      {error && <p>{error}</p>}
      {repos && <pre>{JSON.stringify(repos, null, 2)}</pre>}
    </>
  );
};

export default Popular;
