import React, {useState, useEffect}from "react";
import "./Form.css";

function Form(){
    const initialvalues ={username:"",email:"",password:""};
    const[formvalues, setFormvalues] =useState(initialvalues);
    const[formErrors, setFormErrors] =useState({});
    const [isSubmit, setIsSubmit]=useState(false);
    const handleChange=(e) => {
            console.log(e.target);
            const{name, value }=e.target;
            setFormvalues({...formvalues,[name]:value});
            console.log(formvalues);
    };
    const handleSubmit = (e) =>{
        e.preventDefault();
        setFormErrors(validate(formvalues)); 
        setIsSubmit(true);   
    };
    useEffect(() => {
        console.log(formErrors);
        if(Object.keys(formErrors).length === 0 && isSubmit){
            console.log(formvalues);}
        }, [formErrors]);
    const validate=(values)=>{
        const errors={};
        const regex =/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(!values.username){
            errors.username="Username is required !";
        }
        if(!values.email){
            errors.email="Email is required !";
        }else if(!regex.test(values.email)){
            errors.email="Email is invalid format!";

        }
        if(!values.password){
            errors.password="Password is required !";
        } else if(values.password.length < 4){
            errors.password="Password must be more tha 4 characters!";
        }
        return errors;
    }
    return(
        <div className="container">
            {Object.keys(formErrors).length === 0 && isSubmit ? (<div className="ui-message-success"> Signed in Successfully</div> ):(
                            <pre>{JSON.stringify(formvalues,undefined,2)}</pre>

            )}
            <form onSubmit={handleSubmit}>
                <h1>Login Form </h1>
                <div className="uidivider"></div>
                <div className="ui form">
                    <div className="field">
                        <label>UserName</label><br/>
                        <input type="text"
                         name="username"
                        placeholder="userName" 
                        value={formvalues.username}
                        onChange={handleChange}
                        />
                    <p>{formErrors.username}</p>
                    </div><br/>
                    <div className="field">
                        <label>Email</label><br/>
                        <input type="email" 
                        name="email" 
                        placeholder="Email"  
                        value={formvalues.email}
                        onChange={handleChange}

                        />
                    <p>{formErrors.email}</p>
                    </div><br/>

                    <div className="field">
                        <label>Password</label><br/>
                        <input type="password" 
                        name="password" 
                        placeholder="Password"  
                        value={formvalues.password}
                        onChange={handleChange}

                        />
                    <p>{formErrors.password}</p>
                    </div><br/>

                    <button className="fluid-ui-button-blue">Submit</button>
                </div>
            </form>
        </div>
    )
}
export default Form;
                    
