class Validators {
    static #_required = { "REQUIRED" : true };
    static #_minLength = null;
    static #_requiredPattern = null;
    static REQUIRED( errorMessage ) {
        return { 
                  ...this.#_required,
                  "errorMessage" : errorMessage
               };
    }
    static MINLENGTH = ( value, errorMessage ) => {
       this.#_minLength =  { "MINLENGTH" : value }; 
       return { 
                ...this.#_minLength,
                "errorMessage" : errorMessage
              };
    }
    static REQUIREDPATTERN( ...values ) {
       const data = new Map();
       values.forEach( value => {
            const [ err, errorMessage ] = value;
            data.set( err, { "errorMessage" : errorMessage} )
       })
       this.#_requiredPattern =  { "REQUIREDPATTERN" : data }; 
       return this.#_requiredPattern;
    }
    static CUSTOMVALIDATORS = ( ...values )  => {
        const data = new Map();
        values.forEach( value => {
                const [ err, errFunc, errorMessage ] = value;
                data.set( err, { "errFunc" : errFunc, "errorMessage" : errorMessage} )
        })
        return data;
    }
}

class PATTERN {
    static get EMAIL() {
        return "EMAIL";
    }
}

export { PATTERN };
export default Validators;