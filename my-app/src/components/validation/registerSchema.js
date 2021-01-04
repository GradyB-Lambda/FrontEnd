import * as yup from 'yup'; 

export default yup.object().shape({
    username:yup
    .string()
    .required('enter a username'),
    password: yup
    .string()
    .required('enter a password'), 
    email:yup
    .string()
    .email('must be an email')
    .required('enter an email'), 
    terms: yup
    .boolean(true)
    .required('must agree to terms'),
});