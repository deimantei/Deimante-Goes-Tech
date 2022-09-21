import { useState } from 'react';
import { useEffect } from 'react';
import Button from 'react-bootstrap/Button';
function Customers(){
    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        loadCustomers();
    })

    const loadCustomers = () => {
        
        fetch('http://localhost:5000/get-allCustomer', {
            method: 'GET'
        }).then((response) => {
            response.json().then(obj => {
            setCustomers(obj.response.customers);
            })
        })
    }

    const addDummyClient = () => {
        const customersCopy = [...customers]; //copy the array
        let id;
        if (customersCopy.length === 0)
            id = 1;
        else
            id = customersCopy[customersCopy.length - 1].id + 1;
        const DummyCust = {
            id: id,
            firstname: 'DummyFirstName',
            lastname: 'DummyLastName',
            email: 'DummyEmail',
            phone: 'DummyPhone',
            vip:'Yes'
        }
        customers.push(DummyCust);
        setCustomers(customers);
    }
        return(
            <>
            <Button className='btn' onClick={addDummyClient}>Add dummy client</Button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                         <th>First name</th>
                         <th>Last name</th>
                         <th>E-mail</th>
                        <th> Phone</th>
                        <th>VIP</th>
                    </tr>
                </thead>
                <tbody id='customersTab'>
                    {customers.map((customer) => {
                        return(
                        <tr key={customer.id} >
                            <td>
                                {customer.id}
                            </td>
                            <td>
                                {customer.firstname}
                            </td>
                            <td>
                                {customer.lastname}
                            </td>
                            <td>
                                {customer.email}
                            </td>
                            <td>
                                {customer.phone}
                            </td>
                            <td>
                                {customer.vip}
                            </td>
                        </tr>
                    )})}
                </tbody>
            </table>
        </>
        );
}

export default Customers;
