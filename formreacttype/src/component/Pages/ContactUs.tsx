// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { ChangeEvent, useState } from "react";
interface IContact{
    fullName: string;
    email: string;
    phone: string;
    message: string;
}
const ContactUs = () => {
    const [contact, setContact] = useState<IContact>({
        fullName: "",
        email: "",
        phone: "",
        message: "",
    })
    const handleFullNameChange = 
        (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
        ) => {
        setContact((prevContact)=> ({
            ...prevContact,
            fullName: e.target.value,
        }));
    }
    return (
    <div>
        <h2>Contact us</h2>
        <form action="">
            <div className="form-floating mb-3">
                <input 
                type="text" 
                className="form-control" 
                id="fullName" 
                placeholder="Full Name"
                />
                <label htmlFor="floatingInput">Full Name</label>
                {!contact.fullName && <span className="text text-danger">Please enter full name</span>}
            </div>
            
            <div className="form-floating">
                <input 
                type="email" 
                className="form-control" 
                id="email" 
                placeholder="Email"
                />
                <label htmlFor="email">Email Address</label>
            </div>

            <div className="form-floating">
                <input 
                type="text" 
                className="form-control" 
                id="phone" 
                placeholder="Phone Number"
                />
                <label htmlFor="phone">Phone Number</label>
            </div>

            <div className="form-floating">
                <input 
                type="text" 
                className="form-control" 
                id="comment" 
                placeholder="Phone Number"
                />
                <label htmlFor="comment">Comment</label>
            </div>
        </form>
    </div>
    )
}

export default ContactUs