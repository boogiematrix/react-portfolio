import React, {useState} from 'react';
import './Contact.css'

export function Contact(props) {
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === 'contactName') {
            setContactName(value)
        } else if (name === 'email') {
            setEmail(value)
        } else {
            setMessage(value)
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }

    const alertMessage = 'This field is required'

    const handleBlur = (e) => {
        const { name, value } = e.target;
        if (!value) {
            
            if (name === 'contactName') {
                setContactName(alertMessage)
            } else if (name === 'email') {
                setEmail(alertMessage)
            } else {
                setMessage(alertMessage)
            }
        } return
    }

    return (
        <div>
            <form>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={"Name"}
                    onBlur={handleBlur}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder={"email"}
                    onBlur={handleBlur}
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={"message..."}
                    onBlur={handleBlur}
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}