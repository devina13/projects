import React from "react";
import { Input, Col, Row, Form, Select, DatePicker } from "antd";
import "./Primart_info_form.css"




function Primary_info_form() {
   
  return (
    <div>
      <Form className="form" layout="vertical">
        <Row>
          <Col span={8} push={2}x>
            <Form.Item label="Employee ID">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Employee Name">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Date Of Join">
              <DatePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Date Of Birth">
              <DatePicker
                style={{
                  width: "100%",
                }}
              />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="E-mail ID">
              <Input />
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Blood Group">
              <Input />
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Designation">
            <Select style={{width:"100%"}}  placeholder=""></Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Gender">
            <Select style={{width:"100%"}}  placeholder=""></Select>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col span={8} push={2}>
            <Form.Item label="Nationality">
            <Select style={{width:"100%"}}  placeholder=""></Select>
            </Form.Item>
          </Col>
          <Col span={8} offset={6}>
            <Form.Item label="Employee Status">
            <Select style={{width:"100%"}}  placeholder=""></Select>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    </div>
  );
}

export default Primary_info_form;
