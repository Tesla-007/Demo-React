GENERIC JS FILE = [ ("util/validators.js"), ("hoc/withFormComponent.js") ]

Use "withFormComponent"  as hoc in order to connect your component with form utility file.

your element tag must have { name, type, valid, touched, value, errorMessage, validators } , customValidators is optional.

name         is of type   "STRING"
type         is of type   "STRING"
valid        is of type  "boolean"
touched      is of type  "boolean"
value        is of type   "STRING"
errorMessage is of type   "STRING"


VALIDATORS must be an array which will contain the validation errorMessage passed as a parameter

if VALIDATORS is patternValidation then add it as an comma seperated array (pattern to check and error message)
currently there is only one pattern check "EMAIL"

you can more pattern check in generic file metioned above

CUSTOM VALIDATORS are same as VALIDATORS except you need to pass 3 parameters (err, errFunction, errorDetails)