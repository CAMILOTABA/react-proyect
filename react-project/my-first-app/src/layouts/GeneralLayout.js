import React, { useState } from "react";
import { Layout, Button } from "antd";
import { GithubOutlined } from "@ant-design/icons";
import MenuTop from "../components/MenuComponents/MenuTop/MenuTop";
import MenuSider from "../components/MenuComponents/MenuSider/MenuSider";

import "./GeneralLayout.scss";

export default function GeneralLayout(props) {
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { children } = props;
    return(
        <Layout>
            <MenuSider menuCollapsed={menuCollapsed}/>
            <Layout style={{marginLeft: menuCollapsed ? "80px" : "200px" }}>
                <Header className="layout-adminheader">
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}
                    />
                </Header>
                <Content className="layout-admincontent">{children}
                </Content>
                <Footer className="layout-admin__footer">
                    <Button type="link" onClick={() => console.log("Github") }>
                        <GithubOutlined style={{fontSize: "17px" }} /> UM 2022
                    </Button>
                </Footer>
            </Layout>
        </Layout>
    );
}
