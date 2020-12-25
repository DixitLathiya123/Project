import React, { useState } from 'react'
import { Layout, Menu } from 'antd';

import { Navbar, Nav} from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import Slider from './Slider';

const { Sider } = Layout;

export const HeaderAndSidebar = ({ children }) => {
    const [state, setState] = useState(false)
    const onCollapse = () => setState(!state);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={state} onCollapse={() => { onCollapse() }} >

                <Menu theme="dark" s mode="inline" >
                    {
                        SidebarData() && SidebarData().map((item, index) => {
                            return (
                                <>
                                    <Menu.Item key={index + 1} icon={item.icon} >
                                        <Link to={item.path} >
                                            <span>{item.title}</span>
                                        </Link>
                                    </Menu.Item>
                                </>
                            )
                        })
                    }
                </Menu>
            </Sider>
            <Layout>
                <Navbar bg="light" >
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/dash">Home</Nav.Link>
                            <Nav.Link href="/info">Contact</Nav.Link>
                        </Nav>
                        <div>
                            <Nav className="mr-auto">
                                <Nav.Link href="/login">Log Out</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                <Slider />
                {children}
            </Layout>
        </Layout>
    );
}

export default HeaderAndSidebar