import React from "react";
import InputField from "../Components/InputField";

const Location = ({ handleChange }) => {
  return (
    <div>
      <h4 className="text-lg font-medium mb-2">Location</h4>

      <div>
        {/* <InputField
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Asan"
          title="Asan"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Patan"
          title="Patan"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Chabahil"
          title="Chabahil"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Balkhu"
          title="Balkhu"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Pharping"
          title="Pharping"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="BalKumari"
          title="BalKumari"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Bouddha"
          title="Bouddha"
          name="test"
        ></InputField> */}
        <InputField
          handleChange={handleChange}
          value=""
          title="All"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Lucknow"
          title="Lucknow"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Jaipur"
          title="Jaipur"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Chennai"
          title="Chennai"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Banglore"
          title="Banglore"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Pune"
          title="Pune"
          name="test"
        ></InputField>
        <InputField
          handleChange={handleChange}
          value="Delhi"
          title="Delhi"
          name="test"
        ></InputField>
      </div>
    </div>
  );
};

export default Location;
