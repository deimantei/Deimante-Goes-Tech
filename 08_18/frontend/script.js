$.getJSON("http://localhost:5000/get-allCustomer",function(customers){ console.log(customers) });
    function(data) {
        const customers = data.response.customers;
        const customersTabElement = $('#customersTab');
        for (let i = 0; i < customers.length; i++ {
            //const customer 
            let row = document.createElement('tr');
            const firstName = document.createElement('td');
            firstName.innerHTML = customers.firstName;
            const lastName = document.createElement('td');
            lastName.innerHTML= customer.lastName
            const email = document.createElement('td');
            email.innerHTML= customer.email
            const phone = document.createElement('td');
            phone.innerHTML= customer.phone
            //kazko trukssta
        })
    }