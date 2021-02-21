import React, { useState } from "react";
import { Collapse } from "antd";
import "antd/dist/antd.css";
import TextField from "@material-ui/core/TextField";
import { Button } from "antd";
import ExperienceComponent from "./ExperienceComponent";
import { ExperienceDetailsConfig } from "./expLabels";

const { Panel } = Collapse;

const LeftSideBar = ({
  personalInfoDetails,
  setPersonalInfoDetails,
  educationInfoDetails,
  setEducationInfoDetails,
  experienceDetails,
  setExperienceDetails,
}) => {
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [expPanelClicked, setAddExperiencePanelClicked] = useState(false);
  const [expPanelId, setExpPanelId] = useState(0);

  const [experienceValues, setExperienceValues] = useState([{}]);

  const [expDetails, setExpDetails] = useState([]);

  const handleChange = (e) => {
    setPersonalInfoDetails({
      ...personalInfoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeEducationDetails = (e) => {
    setEducationInfoDetails({
      ...educationInfoDetails,
      [e.target.name]: e.target.value,
    });
  };

  const personalInfoLabels = [
    {
      label: "Name",
      placeholder: "Full Name",
      name: "fullName",
    },
    {
      label: "Resume Headline",
      placeholder: "Resume Headline",
      name: "resumeHeadline",
    },
    {
      label: "Address Line 1",
      placeholder: "Address",
      name: "address",
    },
    {
      label: "City",
      placeholder: "City",
      name: "city",
    },
    {
      label: "Contact",
      placeholder: "Contact",
      name: "contact",
    },
    {
      label: "Email",
      placeholder: "Email",
      name: "email",
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
      name: "collegeName",
    },
    {
      id: 2,
      label: "Location",
      placeholder: "Location",
      name: "collegeLocation",
    },
    {
      id: 3,
      label: "Degree",
      placeholder: "Degree",
      name: "degree",
    },
    {
      id: 4,
      label: "Start Date",
      placeholder: "Start Date",
      name: "startDate",
    },
    {
      id: 5,
      label: "End Date",
      placeholder: "End Date",
      name: "endDate",
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
      name: "programmingLanguages",
    },
    {
      label: "Tools & Technologies",
      placeholder: "Tools & Technologies",
      name: "technologies",
    },
  ];
  const awardsLabel = [
    {
      label: "Awards",
      placeholder: "Awards",
    },
  ];

  const handleAddExperiencePanel = (event, listCount) => {
    let expList = expDetails;
    let index = listCount;
    setExpPanelId(listCount + 1);
    if (!expList[index]) {
      expList[index] = { id: listCount };
      if (!expList[index].details) {
        expList[index].details = [];
        expList[index].details.push(ExperienceDetailsConfig[0].details);
      }
    }

    setExpDetails(expList);
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
              name={personalInfo.name}
              autoComplete={false}
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
                  experienceDetails={experienceDetails}
                  setExperienceDetails={setExperienceDetails}
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
              onChange={handleChangeEducationDetails}
              className="input-value"
              name={educationInfo.name}
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
