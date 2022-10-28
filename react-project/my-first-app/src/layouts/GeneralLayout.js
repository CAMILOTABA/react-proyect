import React, { useState } from "react";
import { Layout,Button } from "antd";
import {GithubOutlined} from "@ant-design/icons"
import MenuTop from "../components/MenuComponents/MenuTop";
import MenuSider from "../components/MenuComponents/MenuSlider";

import "./GeneralLayout.scss"

export default function GeneralLayout(props){
    const [menuCollapsed,setMenuCollapsed] = useState(false);
    const {Header,Content,Footer} = Layout;
    const {children} = props;
    return (
        <Layout>
        <MenuSider menuCollapsed={menuCollapsed} />
        <Layout style={{marginleft: menuCollapsed ? "80px" : "200px"}}>
            <Header className="layout-admin_header">
                <MenuTop
                menuCollapsed={menuCollapsed}
                setMenuCollapsed={setMenuCollapsed}
                />
            
            </Header>
            <Content className="layout-admin_content">{children}</Content>
            <Footer className="layout-admin_footer">
                <Button type="link" onClick={() => console.log("Github")}>
                    <GithubOutlined style={{fontSize:"17px"}}/>
                </Button>
            </Footer>
        </Layout>
        </Layout>
    );
};