import React from 'react'
import { MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import { CaretRightOutlined } from '@ant-design/icons';
import "./Primart_info_form.css"
import { Form, Input, Space,Select,Col,Row, Button } from 'antd';
import { Collapse } from 'antd';
const { Panel } = Collapse;



function Primary_info_form() {
    
  return (
    <div>

<Collapse bordered={false} defaultActiveKey={['1']}>
<Panel header="Eduction Type" key="1">
    <Form>
    {(fields, { add, remove }) => (
      <>
       {fields.map(({ key, name, ...restField }) => (
      <Space>
       <Row 
        {...restField}
        name={[name, 'first']}>
       <Col span={8} push={2} ><Form.Item id='txt' label="PAN No."><Input /></Form.Item></Col >
       <Col span={8} offset={6}><Form.Item label="Aadhar No."><Input /></Form.Item></Col >
     </Row>
     <Row>
       <Col span={8} push={2} ><Form.Item label="Father Name"><Input /></Form.Item></Col >
       <Col span={8} offset={6}><Form.Item label="Mother Name"><Input /></Form.Item></Col >
     </Row>
     <Row>
       <Col span={8} push={2} ><Form.Item label="Spouse Name"><Input /></Form.Item></Col >
       <Col span={8} offset={6}><Form.Item label="Passport No."><Input /></Form.Item></Col >
     </Row>
     <Row>
       <Col span={8} push={2} ><Form.Item label="Marital Status">  <Select style={{width:"100%"}}  placeholder=""></Select></Form.Item></Col >
      
     </Row>
      <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined />}>
                Add field
              </Button>
   <MinusCircleOutlined onClick={() => remove(name)} />
   </Space>
   ))}
    </>
)
}
    </Form>
    </Panel>
    </Collapse>
    </div>
  )}


export default Primary_info_form