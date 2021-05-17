import {useState, useEffect} from 'react';
import validate from './validateInfo';

const useForm = (validate) => {
    const [values, setValues] = useState({
        productid:'',
        productname:'',
        productcost:'',
    })

    const[errors, setErrors] = useState({})

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values))
        console.log(values)
    }

    const handleChange = e =>{
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })

       
    }
    return {handleChange, values, handleSubmit, errors}
}
export default useForm;