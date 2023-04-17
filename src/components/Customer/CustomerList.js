import { useEffect, useState } from "react"
import "./customers.css"
import { Customer } from "./Customer"

export const CustomerList = () => {
    const [customers, setCustomers] = useState([])

    useEffect(
        () => {
           fetch(`http://localhost:8088/users?isStaff=false`)
           .then(response => response.json())
           .then((customerArray) => {
            setCustomers(customerArray)
           })

        },
        [])



    return (
        <div>
            <h2 className="customersTitle">Customers</h2>
            <article className="customers">
            {customers.map(customer => (
                <section className="customer" key={`customer--${customer.id}`}>
                      <Customer customer={customer} />
                </section>
            ))}
            </article>
        </div>
        )
  
}