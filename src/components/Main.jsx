import { useState } from "react"
const url = "https://expr-api-mongo-fs-deployed.web.app/getall"

export default function Main() {

    const [customer, setCustomers] = useState([])
    return (
        <>
            <div>
                <p> Click for customer details. </p>
                <div>{customer.map(customers => {
                    return (
                        <>
                            <ul>
                                <li>ID: {customers.id}</li>
                                <li>First Name:{customers.first_name}</li>
                                <li>Last Name: {customers.last_name}</li>
                                <li>Email: {customers.email}</li>
                                <li>Gender: {customers.gender}</li>
                                <li>ip_address {customers.ip_address}</li>
                            </ul>
                        </>
                    )
                })}</div>

                <button onClick={() => {

                    fetch(url)
                        .then(response => response.json())
                        .then(setCustomers)
                        .catch(console.error)

                }}> CLICK HERE</button>

            </div>
        </>
    )
}

