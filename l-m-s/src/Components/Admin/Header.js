import { Layout } from "antd";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
export const Header = () => {
  return (
    <div>
      <Layout>
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
      </Layout>
    </div>
  );
};
