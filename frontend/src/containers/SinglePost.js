import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody,MDBCardImage, MDBCol,MDBBtn,MDBNavLink } from "mdbreact";
import axios from 'axios';



class SinglePost extends Component {
  state = {
    post:{}
}
componentDidMount(){
    const slug = this.props.match.params.slug;
    axios.get(`http://127.0.0.1:8000/detail/${slug}`)
    .then(res=>{
      console.log(res.data)
        this.setState({
            post: res.data
        });
    })
    
}

render() {
  const post = this.state.post;
  return (
    <MDBContainer className="container">  
      <MDBCard className="card mb-4 wow fadeIn">
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
    </MDBContainer>
    );
  }
}

export default SinglePost;