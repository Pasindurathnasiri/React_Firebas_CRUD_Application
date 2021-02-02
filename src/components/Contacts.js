import React from "react";
import ContactForm from "./ContactForm";

const Contacts = () => {
    return ( 
        <React.Fragment>
        <div className="content">
            <div className="title">
                <h1>Contacts</h1>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <ContactForm />

                </div>
                <div className="col-md-7">
                    <div>list of contants</div>
                </div>
            </div>
            
            
        </div>
        
        </React.Fragment>
     );
}
 
export default Contacts;