import React, { useState } from 'react'
import { Layout, Menu } from 'antd';
import { Navbar, Nav } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';

import { SidebarData } from './SidebarData'
import { isEmpty } from '../../Services/isEmpty'

const { Sider } = Layout;

export const HeaderAndSidebar = ({ children }, props) => {
    const [state, setState] = useState(false)
    const history = useHistory()
    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }
    return (
        <Layout style={{ minHeight: '100vh' }} >
            <Sider collapsible collapsed={state} onCollapse={() => { setState(!state) }} >
                <Menu theme="dark" s mode="inline" >
                    {
                        !isEmpty(SidebarData()) && 
                        SidebarData().map((item, index) => {
                            return (
                                <>
                                    <Menu.Item key={index + 1} icon={item.icon} className="sidebar" >
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
            <Layout >
                <Navbar bg="light" className="sticky">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/dash" >Home</Link></Nav.Link>
                        </Nav>
                        <div>
                            <Nav className="mr-auto">
                                <Nav.Link onClick={() => logout()}>Log Out</Nav.Link>
                            </Nav>
                        </div>
                    </Navbar.Collapse>
                </Navbar>
                {children}
            </Layout>
        </Layout>
    );
}
export default HeaderAndSidebar