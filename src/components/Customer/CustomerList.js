import { useEffect, useState } from "react"
import "./customers.css"
import { Customer } from "./Customer"
import { getAllCustomers } from "../ApiManager"

export const CustomerList = () => {
    const [customers, assignCustomers] = useState([])

    useEffect(
        () => {
           getAllCustomers()
           .then((customers) => {
            assignCustomers(customers)
           }
    )
        },
        []
        )



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