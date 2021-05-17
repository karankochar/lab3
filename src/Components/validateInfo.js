export default function validateInfo(values) {
    let errors = {};
  
    if (!values.productid) {
      errors.productid = 'product id required';
    }
    // else if (!/^[A-Za-z]+/.test(values.name.trim())) {
    //   errors.name = 'Enter a valid name';
    // }
  
    if (!values.productname) {
      errors.productname = 'Name required';
    } 
    
    if (!values.productcost) {
      errors.productcost = 'Product cost is required';
    } else if (values.productcost < 5) {
      errors.productcost = 'product cost needs to be more that 5 rupees';
    }
  
    return errors;
}