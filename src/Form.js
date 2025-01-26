import React, { useState } from "react";
import "survey-core/defaultV2.min.css";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import { useNavigate } from "react-router-dom";
import MyInformation from "./personalInformation.js";

const surveyJson = {
  elements: [
    // Your survey JSON elements...
  ],
};

function Form() {
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    uflEmail: "",
  });
  const navigate = useNavigate();
  const survey = new Model(surveyJson);

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (surveyData) => {
    const combinedData = {
      ...personalInfo,
      ...surveyData,
    };

    fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(combinedData),
    })
      .then((response) => response.json())
      .then((result) => {
        navigate("/results", {
          state: { prediction: result.prediction, confidence: result.confidence },
        });
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Error occurred while submitting the form.");
      });
  };

  survey.onComplete.add((sender) => handleSubmit(sender.data));

  return (
    <div>
      <div className="personal-info-section">
        <MyInformation
          personalInfo={personalInfo}
          handleChange={handlePersonalInfoChange}
        />
      </div>
      <div className="survey-section">
        <Survey model={survey} />
      </div>
    </div>
  );
}

export default Form;