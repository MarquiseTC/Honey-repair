import { Link } from "react-router-dom"

export const Customer = ({ customer }) => {
    return <section className="customer" >
            <div>
               <Link to={`/customers/${customer.id}`}>Name: {customer.fullName}</Link> 
            </div>
        </section>
    }