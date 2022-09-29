import {useState} from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import Label from 'react-bootstrap/FormLabel';
import Button from 'react-bootstrap/Button';


function CreateCustomer(){

    const[customer, setCustomer] = useState({
    firstname:'', lastname:'', 
    email:'', phone:'', vip:false
    });

const onInputChange = (event) => {
    let value;
    if(event.target.type === 'checkbox') {
        value = event.target.checked;
    }
    else{
        value = event.target.value;
    }
    const customerChanged = Object.assign({}, customer); //copy object
    customerChanged[event.target.id] = value;
    setCustomer(customerChanged);
}

const InputElement = (fieldname, type) => {
    return(
        <input id={fieldname} value={customer[fieldname]}
        onChange={(event)=> {onInputChange(event)}}
        type={type}/>
    )
}

const onSave = () => {
    const headers = new Headers();
    headers.append('Content-type', 'application/json');
    fetch('http://localhost:5000/add-customer', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(customer)
    }).then((response) => {
        response.json().then((body) =>
            alert(body.response));
    });
}

return (
<Form>
    <FormGroup>
        <Label htmlFor='firstname'>
First Name
        </Label>

        {InputElement('firstname', 'text')}
        {/* <input id='firstname' value={customer.firstname}
        onChange={(event)=> {onInputChange(event)}}/> */}

        <Label htmlFor='lastname'>
Last Name
        </Label>
        {InputElement('lastname', 'text')}
        {/* <input id='lastname' value={customer.lastname}
        onChange={(event)=> {onInputChange(event)}}/> */}

        <Label htmlFor='email'>
Email
        </Label>
        {InputElement('email', 'text')}
        {/* <input id='email' value={customer.email}
        onChange={(event)=> {onInputChange(event)}}/> */}

        <Label htmlFor='phone'>
Phone
        </Label>
        {InputElement('phone', 'text')}
        {/* <input id='phone' value={customer.phone}
        onChange={(event)=> {onInputChange(event)}}/> */}


{/* Keep it for later */}
        <Label htmlFor='vip'>
Vip Flag
        </Label>
        {InputElement('vip', 'checkbox')}
        
    </FormGroup>
    <Button onClick={onSave}>Save</Button>
</Form>
    )
}

export default CreateCustomer;