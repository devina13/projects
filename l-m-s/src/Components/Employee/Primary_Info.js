import { Button, message, Steps } from 'antd';
import React, { useState } from 'react'
import "./Primary_info.css"
import Primary_info_form from './Primary_info_form';
import Secondary_info_form from './Secondary_info_form';
import Education_form from './Education_form';


const { Step } = Steps;
const steps = [
  {
    title: 'Primary Info',
    content: <Primary_info_form/>,
  },
  {
    title: 'Secondary Info',
    content: <Secondary_info_form/>,
  },
  {
    title: 'Education Details',
    content: <Education_form/>,
  },
  {
    title: 'Address Details',
    content: 'Lvjdfklvf',
  },
  {
    title: 'Bank Details',
    content: 'Last-content',
  },
  {
    title: 'Technical Skills',
    content: 'Last-content',
  },
  {
    title: 'Experience',
    content: 'Last-content',
  },
  {
    title: 'Contact',
    content: 'Last-content',
  },
];

function Primary_Info() {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  
  return (
    <>
    <Steps
    current={current}>
      {steps.map((item) => (
        <Step key={item.title} title={item.title} />
      ))}
    </Steps>
    <div className="steps-content">{steps[current].content}</div>
    <div className="steps-action stepbroder">
      {current > 0 && (
        <Button
          style={{
            margin: '0 8px',
          }}
          onClick={() => prev()}
        >
          Previous
        </Button>
      )}
      {current === steps.length - 1 && (
        <Button type="primary" onClick={() => message.success('Processing complete!')}>
          Submit
        </Button>
      )}
      {current 
        < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
      )}
    </div>
  </>
  )
}

export default Primary_Info