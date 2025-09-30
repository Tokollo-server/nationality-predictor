import React, { useState, useRef, useEffect } from "react";

function NationalityPredictor() {
  const [name, setName] = useState("");
  const [countryData, setCountryData] = useState(null);
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  const fetchNationality = async () => {
    if (!name.trim()) {
      setError("Please enter a name");
      setCountryData(null);
      return;
    }

    try {
      const response = await fetch(`https://api.nationalize.io?name=${name}`);
      const data = await response.json();

      if (data.country && data.country.length > 0) {
        setCountryData(data.country[0]);
        setError("");
      } else {
        setCountryData(null);
        setError("No nationality data found.");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch data.");
      setCountryData(null);
    }
  };

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h1 className="mb-4 text-center">Nationality Predictor</h1>
        <div className="mb-3">
          <input
            ref={inputRef}
            type="text"
            className="form-control"
            placeholder="Enter a name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="d-grid">
          <button className="btn btn-primary" onClick={fetchNationality}>
            Predict
          </button>
        </div>

        {error && <div className="alert alert-danger mt-3">{error}</div>}

        {countryData && (
          <div className="alert alert-info mt-4">
            <h5>Prediction</h5>
            <p>
              <strong>Country Code:</strong> {countryData.country_id}
            </p>
            <p>
              <strong>Probability:</strong>{" "}
              {(countryData.probability * 100).toFixed(2)}%
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default NationalityPredictor;
// This component allows users to input a name and fetch the predicted
