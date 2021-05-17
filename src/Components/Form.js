import React from 'react'
import useForm from './UseForm'
import validate from './validateInfo';
import './Form.css'

const Form = () => {

    const{ handleChange, values, handleSubmit, errors } = useForm(validate);

    return (
        <div>
            <div className='header'>
            <h1 >Product Form</h1>
            </div>
            
            <form onSubmit={handleSubmit}>
                    
                    <div className="form-group">
                        <label for="productid">Product Id</label>
                        <input type="text" 
                        id="productid" 
                        name='productid'
                        className="form-control"
                        placeholder="Enter Product Id"
                        value={values.productid}
                        onChange={handleChange}
                        />
                        {errors.productid && <small id="pid" class="form-text text-muted">{errors.productid}</small>}

                    </div>
                    <div className="form-group">
                        <label for="productname">Product Name</label>
                        <input type="text" 
                        id="productname" 
                        name='productname'
                        className="form-control"
                        placeholder="Enter Product Name"
                        value={values.productname}
                        onChange={handleChange}
                        />
                        {errors.productname && <small id="pname" class="form-text text-muted">{errors.productname}</small>}
                    </div>
                    <div className="form-group">
                        <label for="productcost">Product Cost</label>
                        <input type="text" 
                        id="productcost"
                        name='productcost' 
                        className="form-control"
                        placeholder="Enter Product Cost"
                        value={values.productcost}
                        onChange={handleChange}
                        />
                        {errors.productcost && <small id="pcost" class="form-text text-muted">{errors.productcost}</small>}
                    </div>
                    <label className="custom-control-label">Product Online</label>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="yes" name="yes" value="Yes" class="custom-control-input"/>
                        <label class="custom-control-label" for="customRadioInline1">Yes</label>
                    </div>
                    <div class="custom-control custom-radio custom-control-inline">
                        <input type="radio" id="no" name="no" value="No" class="custom-control-input"/>
                        <label class="custom-control-label" for="customRadioInline2">No</label>
                    </div><br></br>
                    <button className="btn btn-warning" type="submit">
                        Add Product
                    </button>
                    
            </form>
        </div>
    )
}

export default Form
