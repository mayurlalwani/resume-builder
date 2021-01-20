import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import TextField from "@material-ui/core/TextField";

const { Panel } = Collapse;

function callback(key) {
  console.log(key);
}

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const LeftSideBar = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const handleChange = (e) => {
    setFullName(e.target.value);
  };

  const personalInfoLabels = [
    {
      label: "Name",
      placeholder: "Full Name",
    },
    {
      label: "DOB",
      placeholder: "DD/MM/YYYY",
    },
    {
      label: "Address",
      placeholder: "Address",
    },
    {
      label: "Contact",
      placeholder: "Contact",
    },
    {
      label: "Email",
      placeholder: "Email",
    },
  ];

  const experienceInfoLabelss = [
    {
      label: "Company Name",
      placeholder: "Full Name",
    },
    {
      label: "Location",
      placeholder: "Location",
    },
    {
      label: "Job Title",
      placeholder: "Job Title",
    },
    {
      label: "Start Date",
      placeholder: "Start Date",
    },
    {
      label: "End Date",
      placeholder: "End Date",
    },
    {
      label: "Description",
      placeholder: "Description",
    },
  ];
  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={callback}
      className="resume-heading-section"
    >
      <Panel header="Personal Info" key="1">
        {personalInfoLabels.map((personalInfo) => (
          <TextField
            id="standard-multiline-flexible"
            label={personalInfo.label}
            placeholder={personalInfo.placeholder}
            onChange={handleChange}
            className="input-value"
          />
        ))}
      </Panel>
      <Panel header="Experience" key="2">
        {experienceInfoLabelss.map((experienceInfo) => (
          <TextField
            id="standard-multiline-flexible"
            label={experienceInfo.label}
            placeholder={experienceInfo.placeholder}
            onChange={handleChange}
            className="input-value"
          />
        ))}
      </Panel>
      <Panel header="This is panel header 3" key="3">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 4" key="4">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 5" key="5">
        <p>{text}</p>
      </Panel>
      <Panel header="This is panel header 6" key="6">
        <p>{text}</p>
      </Panel>
    </Collapse>
  );
};

export default LeftSideBar;
