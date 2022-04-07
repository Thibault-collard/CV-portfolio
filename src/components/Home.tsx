import React from "react";
import {Link} from 'react-router-dom'

const Home: React.FunctionComponent = () => {
    const thib_pic = require("../images/home/thibault.png")
    
    return(
        <>
            <div className="container">
                <div className="row" style={{height:"70vh",display: "flex",alignItems: "center",verticalAlign: "center",marginLeft:"auto",marginRight: "auto",marginTop:"5vh"}}>
                    <h2 className="col-sm-4 col-lg-5" style={{ fontSize:"7wv"}}>
                    Coding the Future <br/> of User Experience <br/>
                        <hr style={{ borderWidth:"0 0 .4vw 0",margin:"2vh 0",padding:0}}/>
                    <div style={{paddingBottom:".8vw",fontSize:"1.5vw",fontStyle:"italic",fontWeight:300,textAlign:"justify"}}>I am a junior developer, passionate about building excellent software that improves the lives of those around me. What would you do if you had a software expert available at your fingertips?</div>
                    <Link to="/portfolio" className="btn-third"> View Portfolio </Link>
                    </h2>
                    <div style={{textAlign:"center",marginLeft:"3vh"}}className="col-sm-8 col-lg-7">
                        <img style={{width:"60vh"}} src={thib_pic} alt='tcb'/>
                    </div>
                </div>
            </div>   
        </>   
    )
};

export default Home