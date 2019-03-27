

import React, { Component,Fragment } from "react";
// import ReactDOM from "react-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
import Navbar from "./containers/Navbar.js";
import MostVisited from "./containers/MostVisited.js";
import { BrowserRouter ,Route} from 'react-router-dom';
import MainLayout from "./containers/MainLayout.js";
import Footer from "./containers/Footer.js";
import axios from 'axios';
import SinglePost from "./containers/SinglePost.js";
import TagFilter from "./components/MainLayout/TagFilter.js";

class App extends Component {
  state = {
    posts:[]
}
componentDidMount(){
    axios.get('http://127.0.0.1:8000/posts')
    .then(res=>{
        this.setState({
            posts: res.data
        });
    })
}

  render(){
    
  return (
    <BrowserRouter>
        <Fragment>
  
            <Navbar/>
            <MostVisited data={this.state.posts}/>
            <Route exact={true} path='' render={()=>(<MainLayout data={this.state.posts}/>)}/>
            <Route exact={true} path='/post/:slug' component={SinglePost}/>
            <Route exact={true} path='/tag-filter/:tag' component={TagFilter}/>
            
            <Footer/>
        </Fragment>
        
    </BrowserRouter>
  );
}}

export default App;
