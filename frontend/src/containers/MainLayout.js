import React, { Component} from "react";
import { MDBCol,MDBContainer, MDBRow,} from "mdbreact";
import TagList from "../components/MainLayout/TagList";
import PostList from "../components/MainLayout/PostList";
import Advertisement from "../components/MainLayout/Advertisement";
import Subscription from "../components/MainLayout/Subscription";
import PopularPosts from "../components/MainLayout/PopularPosts";


class MainLayout extends Component {

render() {
  return (
 
      <MDBContainer className="container">
          <MDBRow className="row">
            <PostList data={this.props.data} />
            <MDBCol className="col-md-4 mb-4">
              <TagList/>
              <Advertisement/>
              <Subscription/>
              <PopularPosts data={this.props.data}/>
            </MDBCol>                 
          </MDBRow>
         
      </MDBContainer>
 
  )}
}

export default MainLayout;
