import React from "react";
import { DownOutlined, SearchOutlined } from "@ant-design/icons";
import { Breadcrumb, Layout, Menu, Input, Space } from "antd";
import { Avatar } from "antd";
import { Dropdown } from "antd";
import { Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

function MentorHeader() {
  const menu = (
    <Menu
      items={[
        {
          label: <p className="dropdownName">Profile</p>,
          key: "0",
        },
        {
          label: <p className="dropdownName">Change Password</p>,
          key: "1",
        },
        {
          label: <p className="dropdownName">Logout</p>,
          key: "2",
        },
      ]}
    />
  );
  return (
    <div>
      <Layout>
        <Header className="header bg-white">
          <div className="mentor-head-search">
            <div className="logo-header"></div>
            <div className="mentor-global-search">
              <Input
                size="medium"
                placeholder="Mentor/Employee"
                prefix={<SearchOutlined className="site-form-item-icon" />}
              />
            </div>
            <div className="user">
              <div className="avatar">
                <Avatar size={40} icon={<img src="./Assets/Avatar@2x.png"/>}/>
              </div>
              <Dropdown overlay={menu} trigger={["click"]}>
                <a onClick={(e) => e.preventDefault()}>
                    <div className="user-name">
                    <Space>
                    <p className="drpdwn">Dimpy</p>
                    <div className="user-dropdown">
                    <DownOutlined style={{ color: "#A4AFB7" }} />
                    </div>
                  </Space>
                    </div>
                </a>
              </Dropdown>
            </div>
          </div>
        </Header>
        <Layout>
          <Sider width={80} className="site-layout-background bg-white">
            {/* <Menu mode="inline " /> */}
            <div className="sideBar">
                <Link to={'./Dashboard'}>
                <button className="side-btn dashboard">
                  <p className="sidebar-btn-text">
                    <small>Dashboard</small>
                  </p>
                </button>
                </Link>
                <Link to={'./Batch'}>
                <button className="side-btn mentor-batch" style={{marginTop:'15px'}}>
                  <p className="sidebar-btn-text">
                    <small>Batch</small>
                  </p>
                </button>
                </Link>
                
            </div>

          </Sider>
          {/* <Layout
            style={{
              padding: "0 24px 24px",
            }}
          > */}
            <Breadcrumb
              style={{
                margin: "12px 12px",
              }}
            >
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            {/* <Content
              className="site-layout-background"
              style={{
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
              Content
            </Content> */}
          {/* </Layout> */}
        </Layout>
      </Layout>
    </div>
  );
}

export default MentorHeader;
