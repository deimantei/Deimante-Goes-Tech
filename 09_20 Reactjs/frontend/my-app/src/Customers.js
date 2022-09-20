import React from 'react';

class Customers extends React.Component {
    
    constructor() {
        super();
        this.state = {
            customers: []
        }
        this.loadCustomers();
    }

    loadCustomers = () => {
        fetch('http://localhost:5000/get-allCustomer', {
            method: 'GET'
        }).then((response) => {
            response.json().then(obj => {
                this.setState({ customers: obj.response.customers });
            })
        })
    }
    addDummyClient = () => {
        const customers = [...this.state.customers]; //copy the array
        let id;
        if (customers.length === 0)
            id = 1;
        else
            id = customers[customers.length - 1].id + 1;
        const DummyCust = {
            id: customers.length,
            firstname: 'DummyFirstName',
            lastname: 'DummyLastName',
            email: 'DummyEmail',
            phone: 'DummyPhone',
            vip:'Yes'
        }
        customers.push(DummyCust);
        this.setState({customers:customers});
    }

    render() {
        return(
            <>
            <button onClick={this.addDummyClient}>Add dummy client</button>
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
                    {this.state.customers.map((customer) => {
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
}

export default Customers