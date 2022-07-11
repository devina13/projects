import { Menu, Layout } from "antd";

import { Link } from "react-router-dom";
export const SideBar = () => {
    const { Sider } = Layout;
    return (
        <div>
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
        </div>
    )
}