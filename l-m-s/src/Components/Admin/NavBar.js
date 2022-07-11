import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Breadcrumb, Menu, Layout } from "antd";
import { Input } from "antd";
import { Link } from "react-router-dom";
import BatchList from "./BatchList";
const { Header, Content, Sider } = Layout;

function NavBar() {
  return (
    <div>
        <Header className="header bg-white">
          <div className="globalListHeader">
            <div className="imagediv"></div>
            <div className="headerSearch">
              <Input
                size="medium"
                placeholder="Mentor/Employee"
                prefix={<SearchOutlined className="site-form-item-icon" />}
              />
            </div>
            <div className="logout">
              <button type="button" className="btn btn-outline-primary">
                Logout
              </button>
            </div>
          </div>
        </Header>
       
        <Layout>
          <Sider width={80} className="site-layout-background bg-white">
            <Menu mode="inline" />
            <div className="sideBar bg-white">
              <Link to={"./BatchList"}>
                <button className="side-btn batch">
                  <p className="sidebar-btn-text">
                    <small>Batch</small>
                  </p>
                </button>
              </Link>
              <Link to={"./MentorList"}>
                <button className="side-btn mentor">
                  <p className="sidebar-btn-text">
                    <small>Mentor</small>
                  </p>
                </button>
              </Link>
              <Link to={"./Requests"}>
                <button className="side-btn request">
                  <p className="sidebar-btn-text">
                    <small>Request</small>
                  </p>
                </button>
              </Link>
            </div>
          </Sider>
          {/* <Breadcrumb style={{ height: "25px !important", marginLeft: '45px', marginTop: '25px'}}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Batch</Breadcrumb.Item>
          </Breadcrumb> */}
          <BatchList />
        </Layout>
    </div>
  );
}

export default NavBar;
