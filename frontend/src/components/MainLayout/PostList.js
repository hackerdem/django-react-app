import React, { Component } from "react";
import { MDBCard, MDBCardBody,MDBCardImage, MDBCol,MDBBtn,MDBNavLink } from "mdbreact";
import Pagination from "./Pagination";

class PostList extends Component {
constructor(props){
        super(props);
        var itemsData = props.data;
        this.state = {
          items: itemsData,
          pageOfItems:[]
      };
      this.onChangePage = this.onChangePage.bind(this);
  }


componentWillReceiveProps(nextProps){
      if (nextProps.data !== this.props.data){
        this.setState({
          items:nextProps.data
        });
      }
}
onChangePage(pageOfItems){
  this.setState({
    pageOfItems:pageOfItems
  });
}
render() {
  return (
    <MDBCol className="col-md-8 mb-4">
      {this.state.pageOfItems.map((post,key)=>
        <MDBCard key={post.slug} className="card mb-4 wow fadeIn">
          <MDBCardImage className="card-img-top" src={post.mainimage} alt="Generic placeholder image" />
          <MDBCardBody className="card-body">
            <p className="h5 my-4">{post.title} </p>
            <p className="h5 my-4">{post.category} {post.publish_date} </p>
            <p className="h5 my-4">By {post.author}</p>
            <p className="text-justify">{post.body}</p>
            <MDBNavLink to={`/post/${post.slug}`}>
              <MDBBtn rounded outline color="warning">Read More</MDBBtn>
            </MDBNavLink>
          </MDBCardBody>
        </MDBCard>
      )}
      <Pagination items={this.state.items} onChangePage={this.onChangePage} />
    </MDBCol>
    );
  }
}

export default PostList;
