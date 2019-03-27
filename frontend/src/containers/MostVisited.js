import React, { Component } from 'react';
import { MDBContainer ,MDBRow, MDBCard, MDBCardBody, MDBCardImage,MDBCol, MDBNavLink, MDBBtn, MDBPageNav } from 'mdbreact';

class Mostvisited extends Component {
  constructor(props) {
    super(props);
    this.state = {data: []};
  }
 sortData(data){
    return (
        data.sort((a,b)=>{
            return b.number_of_likes - a.number_of_likes
        }).slice(0,3)
    )
}
componentWillReceiveProps(nextProps){
    if(nextProps.data !== this.props.data){
      this.setState({
          data:this.sortData(nextProps.data)})
    }}
  render(){
  return (
      <MDBContainer className="mt-4">
        <MDBRow className="row">
          {this.state.data.map((post,key)=>(    
            <MDBCol key={post.slug} className="col-lg-4 col-md-12 mb-4">
              <MDBCard className="card mdb-color text-center z-depth-2">
                <MDBCardImage cascade src={post.mainimage} top alt="sample photo"/>
                <MDBCardBody className="card-body">
                  <h5 className="text-uppercase font-weight-bold cyan-text mt-2 mb-3">{post.title}</h5>
                  <MDBNavLink to={`/post/${post.slug}`}>
                    <MDBBtn rounded outline color="warning">Read More</MDBBtn>
                  </MDBNavLink>
                  <p className="white-text mb-0"> </p>
                </MDBCardBody>  
              </MDBCard>
            </MDBCol>   
          )
        )}
        </MDBRow>
      </MDBContainer>
  )}
}

export default Mostvisited;