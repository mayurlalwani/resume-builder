import React from "react";
import TextField from "@material-ui/core/TextField";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ExperienceComponent = ({
  experienceInfo,
  listCount,
  setExperienceDetails,
  experienceDetails,
  expPanelId,
}) => {
  function callback(key) {
    console.log(key);
  }
  const handleChangeExperienceDetails = (e, index) => {
    setExperienceDetails({
      ...experienceDetails,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <Collapse
        // defaultActiveKey={["1"]}
        onChange={callback}
        className="resume-heading-section"
      >
        <Panel header={`Experience #${listCount}`} key={listCount}>
          {experienceInfo.details
            ? experienceInfo.details.map((info, index) => {
                return (
                  <TextField
                    id={`standard-multiline-flexible-3${info.id}`}
                    label={info.label}
                    name={info.name + "-" + expPanelId}
                    placeholder={info.placeholder}
                    className="input-value"
                    value={info.value}
                    onChange={handleChangeExperienceDetails}
                  />
                );
              })
            : ""}
        </Panel>
      </Collapse>
    </>
  );
};

export default ExperienceComponent;
