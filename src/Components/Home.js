import React, { Component } from 'react';
import history from './history';
import '../App.css';



class Home extends React.Component{
    state={
        profileImg:'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
      }
      imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () =>{
          if(reader.readyState === 2){
            this.setState({profileImg: reader.result})
          }
        }
        reader.readAsDataURL(e.target.files[0])
      };
    render(){
        const { profileImg } = this.state
        return(
            <div>   
                <h1 className="heading">Profile</h1>
                <button  className="button" id="logout" name="logout" value="Register" variant="btn btn-success" onClick={() => history.push('/login')} >Logout</button>  
                

                        <div id="main-registration-container">
                            <div id="register">
                            <div className="container"> 
                    <div className="img-holder">
                        <img src={profileImg} alt="" id="img" className="img" />
                    </div>
                    <input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
                        <div className="label">
                            <label className="image-upload" htmlFor="input">
                                <i className="material-icons">add_a_photo</i>
                                Choose your Photo
                            </label>
                        </div>
                        </div>
                                <form method="post"  name="userRegistrationForm" >
                                <label>Profile Name</label>
                                <input type="text" name="emailid" value="vik"/>
                                <div className="errorMsg"></div>
                                <label>Bio</label>
                                <input type="password" name="password"/>
                                <div className="errorMsg"></div>
                                <button  className="button" value="Login" variant="btn btn-success" onClick={() => history.push('/home')}>Update Profile</button>  
                                </form>
                            </div>
                        </div>
                
                    

            </div>
        );
    }
}
export default Home;