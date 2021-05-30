import React from "react";

const Popular = () => {
  const [lang, setLang] = React.useState("All");
  const langauges = ["All", "JavaScript", "Python", "Ruby", "CSS", "Rust"];

  const updateLanguage = (selectedLang) => {
    setLang(selectedLang);
  };

  return (
    <ul className="flex-center">
      {langauges &&
        langauges.map((langauge, index) => (
          <li key={index}>
            <button
              className="btn-clear nav-link"
              style={langauge === lang ? { color: "rgb(187,46,31)" } : null}
              onClick={() => updateLanguage(langauge)}
            >
              {langauge}
            </button>
          </li>
        ))}
    </ul>
  );
};

export default Popular;
