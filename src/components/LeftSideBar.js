import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";
import ExperienceComponent from "./ExperienceComponent";
import { ExperienceDetailsConfig } from "./expLabels";

const { Panel } = Collapse;

const LeftSideBar = () => {
  const [fullName, setFullName] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [expPanelClicked, setAddExperiencePanelClicked] = useState(false);
  const [expPanelId, setExpPanelId] = useState(0);
  const handleChange = (e) => {
    setFullName(e.target.value);
  };
  const [experienceValues, setExperienceValues] = useState([{}]);

  const [expDetails, setExpDetails] = useState([]);

  const handleChangeExperienceValues = (e) => {
    setExperienceValues([{ [e.target.name]: e.target.value }]);
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

  function callback(key) {
    console.log(key);
  }

  const educationLabels = [
    {
      id: 1,
      label: "College Name",
      placeholder: "College Name",
    },
    {
      id: 2,
      label: "Location",
      placeholder: "Location",
    },
    {
      id: 3,
      label: "Degree",
      placeholder: "Degree",
    },
    {
      id: 4,
      label: "Start Date",
      placeholder: "Start Date",
    },
    {
      id: 5,
      label: "End Date",
      placeholder: "End Date",
    },
  ];

  const projectsLabels = [
    {
      label: "Project Name",
      placeholder: "Project Name",
    },
    {
      label: "Description",
      placeholder: "Description",
    },
  ];
  const skillsLabels = [
    {
      label: "Programming Languages",
      placeholder: "Programming Languages",
    },
    {
      label: "Tools & Technologies",
      placeholder: "Tools & Technologies",
    },
  ];
  const awardsLabel = [
    {
      label: "Awards",
      placeholder: "Awards",
    },
  ];

  const handleAddExperiencePanel = (event, listCount) => {
    setExpPanelId(expPanelId + 1);
    let planningList = expDetails;
    let index = listCount;

    planningList.push(ExperienceDetailsConfig[0]);

    setExpDetails(planningList);
  };

  useState(() => {
    setExpDetails(JSON.parse(JSON.stringify(ExperienceDetailsConfig)));
  }, []);

  return (
    <div className="left-sidebar">
      <Collapse
        // defaultActiveKey={["1"]}
        onChange={callback}
        className="resume-heading-section"
      >
        <Panel header="Personal Info" key="1">
          {personalInfoLabels.map((personalInfo) => (
            <TextField
              id="standard-multiline-flexible-1"
              label={personalInfo.label}
              placeholder={personalInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>

        <Panel header="Experience" key="2">
          {expDetails.map((experienceInfo, index) => {
            return (
              <>
                <ExperienceComponent
                  addExperiencePanel={handleAddExperiencePanel}
                  key={experienceInfo.id}
                  experienceInfo={experienceInfo}
                  allDetails={expDetails}
                  listCount={index}
                  expPanelId={expPanelId}
                />
              </>
            );
          })}
          <Button
            type="primary"
            size={"large"}
            onClick={(event) => handleAddExperiencePanel(event, expPanelId)}
          >
            Add
          </Button>
        </Panel>

        <Panel header="Education" key="3">
          {educationLabels.map((educationInfo) => (
            <TextField
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
        <Panel header="Projects" key="4">
          {projectsLabels.map((educationInfo) => (
            <TextField
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
        <Panel header="Skills" key="5">
          {skillsLabels.map((educationInfo) => (
            <TextField
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
        <Panel header="Awards and Achievemnts" key="6">
          {awardsLabel.map((educationInfo) => (
            <TextField
              id="standard-multiline-flexible"
              label={educationInfo.label}
              placeholder={educationInfo.placeholder}
              onChange={handleChange}
              className="input-value"
            />
          ))}
        </Panel>
      </Collapse>
    </div>
  );
};

export default LeftSideBar;
