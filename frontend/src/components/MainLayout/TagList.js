import React, { Component } from "react";
import { MDBNavLink,MDBCard, MDBCardBody, MDBCardHeader, MDBBadge } from "mdbreact";
import axios from 'axios';

class TagList extends Component {
  state = {
    tags:[]
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/tags')
    .then(res=>{
        this.setState({
            tags: res.data
        });
    })
}
render() {
  return (
    <MDBCard className="card mb-4 text-center wow fadeIn">
      <MDBCardHeader className="card-header">
        <h4 className="mb-4"> 
          <strong>Popular Tags</strong>
        </h4>
      </MDBCardHeader>
      <MDBCardBody className="card-body">
        {this.state.tags.map((tag,key)=>
          <MDBBadge key={tag.tag} className="trigger dark-green mr-2 lighten-4">
            <MDBNavLink to={`/tag-filter/${tag.tag}`}>
              {tag.tag}
            </MDBNavLink>
          </MDBBadge>
        )}
      </MDBCardBody>                     
    </MDBCard>
    );
  }
}

export default TagList;
