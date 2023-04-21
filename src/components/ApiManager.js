export const getAllCustomers = () => {
   return fetch(`http://localhost:8088/users?isStaff=false`)
    .then(response => response.json())
    
    }
export const getAllCustomerDetails = (customerId) => {
return fetch(`http://localhost:8088/customers/${customerId}?_expand=user`)
.then(res => res.json())
}

export const getAllEmployeeDetails = (employeeId) => {
   return fetch(`http://localhost:8088/employees?_expand=user&_embed=employeeTickets&userId=${employeeId}`)
    .then(response => response.json())
}

export const getAllEmployees = () => {
   return fetch(`http://localhost:8088/users?isStaff=true`)
           .then(response => response.json())
}

export const getCustomerForm = (honeyUserObject) => {
    return fetch(`http://localhost:8088/customers?userId=${honeyUserObject.id}`) 
    .then(response => response.json())
 }

 export const saveCustomer = (profile) => {
    return  fetch(`http://localhost:8088/customers/${profile}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            })
            .then(response => response.json())
 }

 export const getEmployeeForm = (honeyUserObject) => {
    return fetch(`http://localhost:8088/employee?userId=${honeyUserObject.id}`) 
    .then(response => response.json())
 }

 export const saveEmployee = (profile) => {
    return  fetch(`http://localhost:8088/employee/${profile.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(profile)
            })
            .then(response => response.json())
 }

 export const getTicketEdit = (ticketId) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticketId}`)
    .then(response => response.json())
 }

 export const saveTicketEdit = (ticket) => {
    return fetch(`http://localhost:8088/serviceTickets/${ticket.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ticket)
        })
            .then(response => response.json())
        }
export const getTicketForm = (ticketToSendToAPI) => {
        return fetch(`http://localhost:8088/serviceTickets`, {
  method: "POST",
    headers: {
        "Content-Type": "application/json"
    
    },
body: JSON.stringify(ticketToSendToAPI)

  })
  .then(response => response.json())}