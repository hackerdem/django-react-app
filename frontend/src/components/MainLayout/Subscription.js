import React, { Fragment,Component } from "react";
import { MDBCard, MDBCardBody, MDBCardHeader, MDBInput } from "mdbreact";
import axios from 'axios';

class TagList extends Component {

constructor(props){
  super(props);
  this.state ={
    yourName:'',
    yourEmail:'',
    success:false
  };
  this.hanldeInputChange = this.hanldeInputChange.bind(this);
  this.handleSubmission = this.handleSubmission.bind(this);
  this.renderForm = this.renderForm.bind(this);
}
hanldeInputChange(event){
  const target = event.target;
  const value = target.value;
  const name = target.name;
  this.setState({
    [name]:value
  })
}

handleSubmission(event){
  event.preventDefault();
  console.log(this.state.yourEmail, this.state.yourName);
  axios.post('http://127.0.0.1:8000/subscribe',
              {
                'email':this.state.yourEmail,
                'name':this.state.yourName
              })
              .then(function(response){
                this.setState({success:true});
              }.bind(this))
              .catch(function(error){
                this.setState({success:false});
               
              })
              

}

renderForm(event){
  if(this.state.success===false){
    return (
      <form>
        <label htmlFor="defaultFormEmailEx" className="grey-text">Your email</label>
          <MDBInput name="yourEmail" value={this.state.yourEmail} onChange={this.hanldeInputChange} type="email" id="defaultFormLoginEmailEx" className="form-control"/>
            <label htmlFor="defaultFormNameEx" className="grey-text">Your name</label>
              <MDBInput name="yourName"  value={this.state.yourName} onChange={this.hanldeInputChange} type="text" id="defaultFormNameEx" className="form-control"/>
              <Fragment>
                <button onClick={this.handleSubmission} className="btn btn-info btn-md" type="submit">Sign up</button>
              </Fragment>
      </form>
    );
  }else{
    return (
      <MDBCardHeader className="card-header">Your subscription has been processed successfully.</MDBCardHeader>
    )
  }
}
render() {
  return (
    <MDBCard className="card mb-4 text-center wow fadeIn">
      <MDBCardHeader className="card-header">Do you want to get informed about new articles?</MDBCardHeader>
        <MDBCardBody className="card-body">
          {this.renderForm()}
        </MDBCardBody>
    </MDBCard>
    );
  }
}

export default TagList;
