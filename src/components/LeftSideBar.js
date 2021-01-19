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
  return (
    <Collapse
      defaultActiveKey={["1"]}
      onChange={callback}
      className="resume-heading-section"
    >
      <Panel header="Personal Info" key="1">
        <TextField
          id="standard-multiline-flexible"
          label="Name"
          placeholder="Full Name"
          value={fullName}
          onChange={handleChange}
          className="input-value"
        />
        <TextField
          id="standard-multiline-flexible"
          label="DOB"
          placeholder="DD/MM/YYYY"
          value={dateOfBirth}
          onChange={handleChange}
          className="input-value"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Address"
          placeholder="Address"
          //   value={address}
          onChange={handleChange}
          className="input-value"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Email"
          placeholder="Email"
          //   value={email}
          onChange={handleChange}
          className="input-value"
        />
        <TextField
          id="standard-multiline-flexible"
          label="Contact"
          placeholder="Contact"
          //   value={contact}
          onChange={handleChange}
          className="input-value"
        />
      </Panel>
      <Panel header="This is panel header 2" key="2"></Panel>
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
