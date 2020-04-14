import React, { Component } from 'react';
import FormsConnect from '../../hoc/withFormConnect';
import  Validators, { PATTERN } from '../../util/validators';
import './auth.css';

class Auth extends Component {


    requiredAplhaNumeric = (value = "") => {
        return (value.search("@") === -1);
       }

    formEl = {
        name  : "formEl",
        valid : false,
        touched  : false,
        email : {
            name       : "email",
            type       : "email",
            valid      : false,
            touched    : false,
            value      : "",
            errorMessage : "",
            validators : [ 
                            Validators.REQUIRED("Email Required") ,  
                            Validators.REQUIREDPATTERN( [ PATTERN.EMAIL, "Enter a valid email address" ] ) 
                         ]
        },
        city     : {
            name         : "city",
            valid        : false,
            touched      : false,
            value        : "",
            errorMessage : "",
            data         : [["PLEASE SELECT A CITY" , ""], ["KOLKATA", "KOLKATA"], ["MUMBAI", "MUMBAI"], [ "BANGALORE", "BANGALORE" ]],
            validators   : [ Validators.REQUIRED("Select a City") ]
        },
        password : {
            name       : "password",
            type       : "password",
            valid      : false,
            touched    : false,
            value      : "",
            errorMessage : "",
            validators : [ 
                            Validators.REQUIRED("Password Required"), 
                            Validators.MINLENGTH(6, "Password must be of atleast 6 characters" ) 
                        ],
            customValidators : Validators.CUSTOMVALIDATORS( 
                                        ["REQUIRED_ALPHA_NUMERIC", this.requiredAplhaNumeric, "Password need to contain alpha numeric characters"]
                                                        )
        }
    }


    render() {
        return(
            <div>

                {
                    (this.props.formEl) ? 
                        <form onSubmit = { this.submitHandler }>
                            <label htmlFor = { this.props.formEl.email.name }>Name : </label>
                            <input  type     = { this.props.formEl.email.type } 
                                    id       = "email"
                                    name     = { this.props.formEl.email.name }
                                    value    = { this.props.formEl.email.value }
                                    autoComplete =  { this.props.formEl.email.name }
                                    onChange = { (e) => this.onElementChange( e, this.props.formEl.email.name ) }/>
                            <span className = { ( !this.props.formEl.email.valid && this.props.formEl.email.touched) ? "text-danger": "text-hide" }> *{ this.props.formEl.email.errorMessage } </span>
                            <label htmlFor = { this.props.formEl.password.name }>Password : </label>
                            <input  type     = { this.props.formEl.password.type } 
                                    id       = "name"
                                    name     = { this.props.formEl.password.name }
                                    value    = { this.props.formEl.password.value }
                                    autoComplete =  { this.props.formEl.password.name }
                                    onChange = { (e) => this.onElementChange( e, this.props.formEl.password.name ) }/>
                            <span className = { ( !this.props.formEl.password.valid && this.props.formEl.password.touched) ? "text-danger": "text-hide" }> *{ this.props.formEl.password.errorMessage } </span>
                            <label htmlFor = { this.props.formEl.city.name }>SELECT A CITY : </label>
                            <select id       = "city"
                                    name     = { this.props.formEl.city.name }
                                    value    = { this.props.formEl.city.value }
                                    autoComplete =  { this.props.formEl.city.name }
                                    onChange = { (e) => this.onElementChange( e, this.props.formEl.city.name ) }>
                                { 
                                    this.props.formEl.city.data.map( city =>  
                                                                        <option key   = { city[1] } 
                                                                                value = { city[1] }>{ city[0] }</option>
                                                                   ) 
                                }
                            </select>
                            <span className = { ( !this.props.formEl.city.valid && this.props.formEl.city.touched) ? "text-danger": "text-hide" }> *{ this.props.formEl.city.errorMessage } </span>

                            <button type = "submit" disabled = { !this.props.formEl.valid } >SignUp</button>
                        </form> :
                        null
                }

                <div className = "showDetails">
                    <fieldset>
                        <legend>Features</legend>
                        <p>Form elements validation decoupled from your logic</p>
                        <p>Configuring "form element validation" made simple</p>
                        <p>Have a look at the src file!!</p>
                        <p>More details can be found in "<span>readme.txt</span>" attached with this project</p>
                    </fieldset>
                </div>
                
            </div>
        );
    }

    submitHandler = (event) => {
        event.preventDefault();
       
    }

    onElementChange = ( e, element ) => {
        this.props.updateFormState(e, element);
    }

    
   

    componentDidMount() {
        this.props.connectState(this.formEl);
    }
   

}

export default FormsConnect(Auth);