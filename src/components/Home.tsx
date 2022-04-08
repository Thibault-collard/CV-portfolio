import React from "react";
import {Link} from 'react-router-dom'

const Home: React.FunctionComponent = () => {
    const thib_pic = require("../images/home/thibault.png")
    
    return(
        <>
            <div className="container">
                <div className="row-pres">
                    <h2 className="col-sm-12 col-lg-5 head-title">
                    Coding the Future <br/> of User Experience <br/>
                        <hr style={{ borderWidth:"0 0 .4vw 0",margin:"2vh 0",padding:0}}/>
                    <div className='text-intro'>I am a junior developer, passionate about building excellent software that improves the lives of those around me. What would you do if you had a software expert available at your fingertips?</div>
                    <Link to="/portfolio" className="btn-third"> View Portfolio </Link>
                    </h2>
                    <div className='pic-div col-sm-0 col-lg-7'>
                        <img className='pic-home' src={thib_pic} alt='tcb'/>
                    </div>
                </div>
            </div>   
        </>   
    )
};

export default Home