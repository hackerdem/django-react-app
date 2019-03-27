import React, { Component } from "react";
import { MDBContainer, MDBCard, MDBCardBody,MDBCardImage, MDBCol,MDBBtn,MDBNavLink } from "mdbreact";
import axios from 'axios';



class TagFilter extends Component {
  state = {
    posts:[]
}
componentDidMount(){
    const tag = this.props.match.params.tag;
    axios.get(`http://127.0.0.1:8000/tag-filter/${tag}`)
    .then(res=>{
        this.setState({
            posts: res.data
        });
    })
    
}

render() {

  return (
    <MDBContainer className="container">  
      {this.state.posts.map((post,key)=>
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
    </MDBContainer>
    );
  }
}

export default TagFilter;