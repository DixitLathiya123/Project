import React, {  useState } from 'react'
import { Layout, Menu } from 'antd';
import { Navbar, Nav, Button } from 'react-bootstrap'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import { Link, useHistory } from 'react-router-dom';

import { SidebarData } from './SidebarData'
import { isEmpty } from '../../services/isEmpty'
import profile1 from '../../assets/Image/profileImage1.png'

const { Sider } = Layout;

export const HeaderAndSidebar = ({ children }, props) => {
    const [state, setState] = useState(false)
    const history = useHistory()
    const logout = () => {
        localStorage.clear()
        history.push("/login")
    }

    const [img, setImg] = useState({
        profileImg: profile1
    })

    const imageHandler = (e) => {
        const reader = new FileReader()
        reader.onload = () => {
            if (reader.readyState === 2) {
                setImg({
                    profileImg: reader.result
                })
            }
        }
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
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
                            <Nav.Link><Link to="/dashbord" >Home</Link></Nav.Link>
                        </Nav>
                        <div>
                            <div class="container">
                                <>
                                    <OverlayTrigger
                                        trigger="click"
                                        key="left"
                                        placement="left"
                                        overlay={
                                            <Popover id={`popover-positioned-left`}>
                                                <Popover.Title as="h3">{`Change Profile Picture`}</Popover.Title>
                                                <Popover.Content>
                                                    <img src={img.profileImg} class="img-circle" alt="Avatar" width="50" height="50" />
                                                    <input type="file" name="img" onChange={(e) => { imageHandler(e) }} />
                                                </Popover.Content>
                                            </Popover>
                                        }
                                    >
                                        <Button style={{ 'background': 'none', 'border': 'none', 'outline': 'none' }}><img src={img.profileImg} class="img-circle" alt="Avatar" width="50" height="50" /></Button>
                                    </OverlayTrigger>
                                </>
                            </div>
                        </div>
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