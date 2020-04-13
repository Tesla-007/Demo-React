import React, { Component } from 'react';

const formConnect = (WrappedComponent) => {
    return (
        class extends Component {
            state = {
                formEl : null
            }
            connectState = (formEl) =>{
                this.setState({
                    formEl : formEl
                })
            }


            updateFormState = (e, element) => {
                let elValid = true;
                const el = this.state.formEl[element];
                const value = e.target.value;
                el.validators.forEach( validator => {
                    if( this.isElementValid(elValid, validator, value) )
                    {
                        const errMessage = validator.errorMessage;
                        this.setState(this.updateState(value, el, errMessage), this.updateFormValidity)
                        elValid = false;
                    }
        
                    else if( elValid && validator.REQUIREDPATTERN ){
                        validator.REQUIREDPATTERN.forEach(( data, validateForm ) => {
                            if( validateForm === "EMAIL" && !e.target.validity.valid)
                                {
                                    const errMessage = data.errorMessage;
                                    this.setState(this.updateState(value, el, errMessage), this.updateFormValidity)
                                    elValid = false;
                                }
                        })
                    }
                });

                if( elValid && el.customValidators ){
                    el.customValidators.forEach( ( data, key) => {
                        const inValid = data.errFunc(value);
                        if( inValid ) {
                            const errMessage = data.errorMessage;
                            this.setState(this.updateState(value, el, errMessage), this.updateFormValidity)
                            elValid = false;
                        }
                    })
                }
                if( elValid )
                    this.setState(this.updateState(value, el, "", true), this.updateFormValidity);
            }


            isElementValid = (elValid, validator, value) => {
                    return (
                        ( elValid && validator.REQUIRED && value === "" ) ||
                        ( elValid && validator.MINLENGTH && value.length < validator.MINLENGTH )
                    );
            }

            updateState = (value, element,errMessage="", elValid=false, formValid = false) => {
                const jsonString = '{"'+ element.type +'": { "value"   : "' + value +'", "valid"   : '+ elValid +', "touched" : '+ true +', "errorMessage"   : "'+ errMessage +'" } }';
                const jsonData = JSON.parse(jsonString);
                jsonData[element.type] = {
                    ...element,
                    ...jsonData[element.type]
                };
                return  {
                        "formEl" : {
                        ...this.state.formEl,
                        "valid"   : formValid,
                        "touched" : true,
                        ...jsonData
                    }
                }
            }
            
            
            updateFormValidity = () => {
                const formValid = this.checkFormValidity();
                if(formValid !== this.state.formEl.valid){
                    this.setState({
                        "formEl" : {
                            ...this.state.formEl,
                            "valid"  : formValid
                        }
                    })
                }
            }
        
            checkFormValidity = () => {
                let valid = true;
                const formString = JSON.stringify(this.state.formEl);
                const formsArray = formString.split('valid":');
                for (let i = 2; i < formsArray.length; i++) {
                    if(formsArray[i].split(",")[0] !== "true")
                        {
                            valid = false;
                            break;
                        }
                }
                return valid;
            }

            render(){
               return(
                    <WrappedComponent formEl = { this.state.formEl } 
                                      updateFormState = { (e, element) => this.updateFormState(e,element) } 
                                      connectState = { (formEl) => this.connectState(formEl) }/>
               );
            }
        }
    )
}

export default formConnect;