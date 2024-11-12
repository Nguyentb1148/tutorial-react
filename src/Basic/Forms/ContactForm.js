import {useState} from "react";

function  ContactForm(){
    const[formData,setFormData]= useState({
        name:'',
        email:'',
        message:'',
        topic:'General Inquiry'
    })
    const[submitted,setSubmitted]=useState(false);
    const handleChange=(event)=>{
        const{name,value}= event.target
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log("Form Data Submitted:",formData);
        setSubmitted(true);
    }
    return(
        <div>
            <h2> Contact Us</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Name:
                        <input
                            type='text'
                            name='name'
                            value={formData.name}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </label>
                </div>

                {/* Message Field */}
                <div>
                    <label>
                        Message:
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Topic:
                        <select
                            name='topic'
                            value={formData.topic}
                            onChange={handleChange}
                        >
                            <option value='General Inquiry'> General Inquiry</option>
                            <option value='Support'> Support</option>
                            <option value='Sales'> Sales</option>
                            <option value='Feedback'> Feedback</option>

                        </select>
                    </label>
                </div>
                <button type='submit'>
                    Submit
                </button>
                {submitted &&<p>Thank you, {formData.name} and your message (message: {formData.message}, topic: {formData.topic}) has been sent</p>}
            </form>
        </div>
    )
}

export default ContactForm