import React,{useState,useEffect} from "react";

const ContactForm = () => {

const initialFieldValues ={
    fullName: '',
    mobile: '',
    email: '',
    address:''

}

var [values,setValues] = useState(initialFieldValues);

    return ( 
        <React.Fragment>
        <form autoComplete="off">
            <div className="form-group input-group">
                <div className="input-group-prepend">
                    <div className="input-group-text">
                        <i className="fas fa-user"></i>
                    </div>    
                </div>
                <input className="form-control" placeholder="Full Name" name="fullName" value ={values.fullName} />

            </div>
            <div className="form-row">
                 <div className="form-group input-group col-md-6">
                     <div className="input-group-prepend">
                         <div className="input-group-text">
                             <i className="fas fa-user"></i>
                         </div>    
                     </div>
                     <input className="form-control" placeholder="Full Name" name="fullName" value ={values.fullName} />
     
                 </div>
                 <div className="form-group input-group col-md-6">
                     <div className="input-group-prepend">
                         <div className="input-group-text">
                             <i className="fas fa-user"></i>
                         </div>    
                     </div>
                     <input className="form-control" placeholder="Full Name" name="fullName" value ={values.fullName} />
     
                 </div>
            </div>
        </form>
        
        </React.Fragment>
     );
}
 
export default ContactForm;