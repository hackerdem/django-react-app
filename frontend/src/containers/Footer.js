import React, { Component, Fragment } from "react";
import { MDBFooter,MDBContainer} from "mdbreact";

class Footer extends Component {


render() {
  return (
    <MDBContainer color="default-color" dark expand="md"> 
    <MDBFooter className="page-footer text-center font-small mdb-color darken-2 mt-4 wow fadeIn">

    
    
        <a className="btn btn-outline-white" href="https://mdbootstrap.com/docs/jquery/getting-started/download/" target="" role="button">Download MDB
            <i className="fas fa-download ml-2"></i>
        </a>
        <a className="btn btn-outline-white" href="https://mdbootstrap.com/education/bootstrap/" target="" role="button">Start free tutorial
            <i className="fas fa-graduation-cap ml-2"></i>
        </a>
    


    

    
    
        <a href="https://www.facebook.com/mdbootstrap" target="">
            <i className="fab fa-facebook-f mr-3"></i>
        </a>

        <a href="https://twitter.com/MDBootstrap" target="">
            <i className="fab fa-twitter mr-3"></i>
        </a>

        <a href="https://www.youtube.com/watch?v=7MUISDJ5ZZ4" target="">
            <i className="fab fa-youtube mr-3"></i>
        </a>

        <a href="https://plus.google.com/u/0/b/107863090883699620484" target="">
            <i className="fab fa-google-plus-g mr-3"></i>
        </a>

        <a href="https://dribbble.com/mdbootstrap" target="">
            <i className="fab fa-dribbble mr-3"></i>
        </a>

        <a href="https://pinterest.com/mdbootstrap" target="">
            <i className="fab fa-pinterest mr-3"></i>
        </a>

        <a href="https://github.com/mdbootstrap/bootstrap-material-design" target="">
            <i className="fab fa-github mr-3"></i>
        </a>

        <a href="http://codepen.io/mdbootstrap/" target="">
            <i className="fab fa-codepen mr-3"></i>
        </a>
    
   
    <Fragment >
        © 2019 Copyright:
        <a href="https://mdbootstrap.com/education/bootstrap/" target=""> MDBootstrap.com </a>
    </Fragment>
    

</MDBFooter>
</MDBContainer>
    )
  }
}

export default Footer;
