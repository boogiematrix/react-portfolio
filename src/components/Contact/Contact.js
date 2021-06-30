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

    let alertMessage = null;

    const setPlaceholder = () => {
        return alertMessage = "This field is required"
    }

    return (
        <div>
            <form>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={alertMessage || "Name"}
                    onBlur={setPlaceholder}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder={alertMessage || "email"}
                    onBlur={setPlaceholder}
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder={alertMessage || "message..."}
                    onBlur={setPlaceholder}
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
        </div>
    )
}