import React, { Component } from "react";
import { MDBCard, MDBCardBody } from "mdbreact";

const TagList =() => {
  return (
        <MDBCard className="card blue-gradient mb-4 wow fadeIn">
            <MDBCardBody className="card-body text-white text-center">
                <h4 className="mb-4">
                    <strong>Learn Bootstrap 4 with MDB</strong>
                </h4>
                <p>
                    <strong>Best & free guide of responsive web design</strong>
                </p>
                <p className="mb-4">
                    <strong>The most comprehensive tutorial for the Bootstrap 4. Loved by over 500 000 users. Video
                            and written versions available. Create your own, stunning website.</strong>
                </p>
                <a target="" href="https://mdbootstrap.com/education/bootstrap/" className="btn btn-outline-white btn-md">Start free tutorial
                    <i className="fas fa-graduation-cap ml-2"></i>
                </a>
            </MDBCardBody>                      
        </MDBCard>
    );
  }


export default TagList;
