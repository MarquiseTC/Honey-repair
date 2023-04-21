import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import  {getAllCustomerDetails} from "../ApiManager"

export const CustomerDetails = () => {
const {customerId} = useParams()
const [customer, updateCustomer] =useState()


useEffect( 
    () => {
        getAllCustomerDetails(customerId)
    .then(updateCustomer)
}, [customerId])
// when clicking on customer from the customer list it will return the following code located in the return


return <>
<section className="customer" >
<header className="customer_header">{customer?.user?.fullName}</header>
<div> Email: {customer?.user?.email}</div>
<div>Phone Number: {customer?.phoneNumber}</div>
<footer>Current Address: {customer?.address}</footer>
</section>
</>
}