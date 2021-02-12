import React from "react";
import TextField from "@material-ui/core/TextField";
import { Collapse } from "antd";

const { Panel } = Collapse;

const ExperienceComponent = ({ experienceInfo, listCount }) => {
  function callback(key) {
    console.log(key);
  }
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
                console.log({ info });
                return (
                  <TextField
                    id={`standard-multiline-flexible-3${info.id}`}
                    label={info.label}
                    name={info.name}
                    placeholder={info.placeholder}
                    //   onChange={handleChangeExperienceValues}
                    className="input-value"
                    value={info.value}
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
