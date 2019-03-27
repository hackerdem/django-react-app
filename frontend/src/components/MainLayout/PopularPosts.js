import React, { Component } from "react";
import { MDBNavLink,MDBCard, MDBCardBody, MDBCardHeader, MDBListGroup,MDBListGroupItem, MDBMedia, MDBCardImage } from "mdbreact";


class PopularPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
      }

     sortData(data){
        return (
            data.sort((a,b)=>{
                return b.number_of_views - a.number_of_views
            }).slice(0,5)
        )
    }

    componentDidMount(){
            this.setState({
                data: this.props.data
            });  
    }
    
    componentWillReceiveProps(nextProps){
        if(nextProps.data !== this.props.data){
          this.setState({
              data:this.sortData(nextProps.data)})
        }}

    render() {
    return (
        <MDBCard className="card mb-4 wow fadeIn">
            <MDBCardHeader className="card-header">Popular Posts</MDBCardHeader>
            <MDBCardBody className="card-body">
            <MDBListGroup className="list-unstyled">
                {this.state.data.map((post,key)=>
                    <MDBListGroupItem key={post.slug} className="media">
                        <MDBNavLink to={`/post/${post.slug}`}>
                        <MDBCardImage className="img-thumbnail d-flex mr-3" src={post.mainimage} alt="Generic placeholder image" />
                        </MDBNavLink>
                        <MDBMedia className="media-body">
                            <a href="">
                            <h5 className="mt-0 mb-1 font-weight-bold"></h5>
                            </a>
                            {post.title}
                        </MDBMedia>
                    </MDBListGroupItem>
                )}
            </MDBListGroup>
            </MDBCardBody>  
        </MDBCard>
        );
    }
}

export default PopularPosts;
