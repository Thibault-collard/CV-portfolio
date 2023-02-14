import React, { Fragment,useState } from 'react'
import axios from "axios";

interface FormElements extends HTMLFormControlsCollection {
    email: HTMLInputElement,
    name: HTMLInputElement,
    message: HTMLInputElement
}

interface InputFormElement extends HTMLFormElement {
    readonly elements: FormElements
}

interface AlertBox{
    message? : string,
    colorBox? : string,
    isActive?: boolean
}

const Contact: React.FunctionComponent = () => {
    const emailIcon = require("../images/site/icon-mail.png")
    const phoneIcon = require("../images/site/icon-phone.png")
    const locationIcon = require("../images/site/icon-location.png")
    const [alertBox, setAlertBox] = useState<AlertBox[]>()

    function handleSubmit (e: React.FormEvent<InputFormElement>){
        e.preventDefault();
        let fieldsEmpty = false;
        
        const data = {
            email: e.currentTarget.elements.email.value,
            name: e.currentTarget.elements.name.value,
            message: e.currentTarget.elements.message.value
        }

        for (const field_name in data){
            if(data[field_name].length < 1){
                setAlertBox([{message:`Please, complete all the fields`,colorBox:"#f8d7da",isActive:true}])
                fieldsEmpty = true
            }
        }
        if(!fieldsEmpty){
            axios.post("/api/sendEmail", data)
                .then(() => setAlertBox([{message:"Your message was sent successfully!",colorBox:"#b1e9c3",isActive:true}]))
        }
           
    };

  return (
    <Fragment>
        <script src="js/jquery.js"></script>
	    <div id="page" className="hfeed site">
		    <main id="main" className="site-main cd-main">
                <div className="layout-medium"> 
                    <div id="primary" className="content-area">
                        <div id="content" className="site-content" role="main">
                            <div className="page-single page-layout">
                                <article className="page hentry">
                                <div className="entry-content">
                                    
                                    <div className="boxed">
                                    
                                        <div className="row">

                                            <div className="col-xs-12 col-sm-4">

                                                <div className="fun-fact">
                                                    <img src={locationIcon} alt="location"/>
                                                    <h4>based in Annemasse, France</h4>
                                                </div>

                                            </div>
                                            
                                            <div className="col-xs-12 col-sm-4">

                                                <div className="fun-fact">
                                                    <img src={phoneIcon} alt="phone"/>
                                                    <h4>Tel : +336 35 38 95 12</h4>
                                                </div>

                                            </div>
                                            
                                            <div className="col-xs-12 col-sm-4">

                                                <div className="fun-fact">
                                                    <img src={emailIcon} alt="email"/>
                                                    <h4>thibault.collard@gmail.com</h4>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                    <div className="section-title center">
                                        <h2>
                                            <i>Drop Me A Line</i>
                                        </h2>
                                    </div>

                                    <h2 className="center fw-300">Find out if I'm <strong>available</strong> and
                                        <br/>
                                        ask me anything
                                    </h2>
                                    <div className="contact-form">
                                        {alertBox && alertBox.map((boxParams) =>
                                            <div style={{backgroundColor:boxParams.colorBox}} onClick={() => setAlertBox([{isActive:false}])} className="alert success">{boxParams.message}  
                                            </div>
                                        )}
                                        <form id="contact-form" className="validate-form" method="post" onSubmit={handleSubmit}>

                                            <input type="hidden" name="subject" id="subject"/>

                                            <p>
                                                <input placeholder="Name" type="text" name="name" id="name" className="required"/>
                                            </p>

                                            <p>
                                                <input placeholder="Email" type="text" name="email" id="email"
                                                    className="required email"/>
                                            </p>

                                            <p className="antispam">Leave this empty if you are a human :
                                                <br /><input name="url" />
                                            </p>

                                            <p>
                                                <textarea placeholder="Message" name="message" id="message" className="required"></textarea>
                                            </p>
                                            <p>
                                                <button className="submit button primary">Send</button>
                                            </p>

                                        </form>
                                    </div>

                                </div>
                            </article>


                        </div>
                        </div>
                        
                    </div>
                    
                </div>                 
            </main>
        </div>
    </Fragment>
  )
}

export default Contact