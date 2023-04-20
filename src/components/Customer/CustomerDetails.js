import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

export const CustomerDetails = () => {
const {customerId} = useParams()
const [customer, updateCustomer] =useState()


useEffect( 
    () => {
        fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
    .then(res => res.json())
    .then(updateCustomer)
}, [customerId])
        


return <>
<section className="customer" >
<header className="customer_header">{customer?.user?.fullName}</header>
<div> Email: {customer?.user?.email}</div>
<div>Phone Number: {customer?.phoneNumber}</div>
<footer>Current Address: {customer?.address}</footer>
</section>
</>
}