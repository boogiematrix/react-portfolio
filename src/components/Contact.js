import React, {useState} from 'react';

export function Contact(props) {
    const [contactName, setContactName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;

        if (name === contactName) {
            setContactName(value)
        } else if (name === email) {
            setEmail(value)
        } else {
            setMessage(value)
        }

    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        
    }

    let alertMessage = ''

    return (
        <div>
            <form>
                <input
                    value={contactName}
                    name="contactName"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                    onBlur={alertMessage = 'This field is required'}
                />
                <input
                    value={email}
                    name="email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="email"
                    onBlur={alertMessage = 'This field is required'}
                />
                <input
                    value={message}
                    name="message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="message..."
                    onBlur={alertMessage = 'This field is required'}
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            <h3>{alertMessage}</h3>
        </div>
    )
}