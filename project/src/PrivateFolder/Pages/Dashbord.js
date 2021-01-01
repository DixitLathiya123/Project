import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom';
import { Card } from 'antd';
import Loader from 'react-loader-spinner'
import { isEmpty } from '../../Services/isEmpty'

import deleteButton from '../../PublicFolder/Image/delete.png'
import 'react-toastify/dist/ReactToastify.css';
import HeaderAndSidebar from '../Header/HeaderAndSidebar'
import { useDispatch, useSelector } from 'react-redux';
import { deleteBlog, getBlogById } from '../../Redux/Actions';

function Dashbord() {
    const { Meta } = Card;

    const dispatch = useDispatch()
    // const blogById = []
    const blogById = useSelector(state => state.getBlogById.blogById.blog)

    useEffect(() => {
        dispatch(getBlogById())
    }, [])

    const deleteBlogById = (deleteId) => {
        dispatch(deleteBlog(deleteId))
    }

    const history = useHistory()
    return (
        < div >
            <HeaderAndSidebar title="dashbord">
                <div className="row">
                    <div className="col-12  blogbutton">
                        <Button className="blogbutton2" variant="dark"><Link to="/createBlog"> Create Blog</Link></Button >
                    </div>
                </div>
                <div className="row allblog">
                    {isEmpty(blogById) &&
                        <div className="loader">
                            <Loader type="Bars" color="#00BFFF" height={80} width={80} />
                        </div>
                    }
                    {
                        !isEmpty(blogById) &&
                         blogById.map((item, i) => {
                            return (
                                <>
                                    <Card className="blogcard" key={i}
                                        hoverable
                                        style={{ width: 320 }}
                                        cover={
                                            <img
                                                alt="example"
                                                onClick={() => history.push({
                                                    pathname: "/singleBlog",
                                                    state: item
                                                }
                                                )}
                                                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                            />
                                        }
                                    >
                                        <div className="row">
                                            <div className="col-8">
                                                <Meta title={item.blogTitle.slice(0, 20) + "..."} description={item.blogContent.slice(0, 20) + "..."} />
                                            </div>
                                            <div className="col-4">
                                                <div className="row ">
                                                    <div className="deleteButton">
                                                        <img src={deleteButton} alt="delete" height="95%" width="30%" onClick={() => { deleteBlogById(item._id) }} />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </>
                            )
                        })
                    }
                </div>
            </HeaderAndSidebar>
        </div >

    )
}


export default Dashbord
