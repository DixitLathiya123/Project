import React from 'react'
import { MDBContainer, MDBFooter } from "mdbreact";

function Footer() {
    return (
        <MDBFooter >
            <div className="footer-copyright text-center footer">
                <MDBContainer fluid>
                    &copy; {new Date().getFullYear()} Copyright:  Dixit Lathiya
                    </MDBContainer>
            </div>
        </MDBFooter>
    )
}
export default Footer
