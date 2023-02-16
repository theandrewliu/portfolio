import { useForm} from '@formspree/react'
import { useState } from 'react';


function ContactForm() {

    const [state, handleSubmit] = useForm("meqwabda")
    const initialFormValues = {
        name: "",
        email: "",
        message: "",
    };

    const[formDetails, setFormDetails] = useState(initialFormValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormDetails({
            ...formDetails,
            [name]: value,
        })
    }


    return (
        <>
        <div className={state.succeeded === true ?'flex flex-col justify-center items-center w-half':'hidden'}>
            <h1 className="text-4xl font-bold pt-10 pb-4">
                Contact Me
            </h1>
            <div className='text-3xl font-bold pt-20'>
                Message Sent!
            </div>
            <p className='text-2xl fond-medium pt-10'>I will get back to you as soon as I can!</p>
        </div>
        <div className={state.succeeded === true ? "hidden" :"flex flex-col justify-center items-center w-half"}>
            <h1 className="text-4xl font-bold pt-10 pb-4">
                Contact Me
            </h1>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center w-full max-w-lg space-y-5 pt-10">
                <div className="space-x-2 -space-y-2 flex justify-center flex-wrap">
                    <label className="block tracking-wide text-black font-bold mb-2" htmlFor="name">Name: </label>
                    <input
                        value={formDetails.name}
                        onChange={handleInputChange}
                        className="appearance-none block w-full bg-white text-black border rounded leading-tight"
                        required
                        type="text"
                        name="name"
                        label="name"
                    />
                </div>
                <div className="space-x-2 -space-y-2 flex justify-center flex-wrap">
                    <label className="block tracking-wide text-black font-bold mb-2" htmlFor="email">Email: </label>
                    <input
                        value={formDetails.email}
                        onChange={handleInputChange}
                        className="appearance-none block w-full bg-white text-black border rounded leading-tight"
                        required
                        type="text"
                        name="email"
                        label="email"
                    />
                </div>
                <div className="space-x-2 -space-y-2 flex justify-center flex-wrap">
                    <label className="block tracking-wide text-black font-bold mb-2" htmlFor="message">Message: </label>
                    <textarea
                        value={formDetails.message}
                        onChange={handleInputChange}
                        className="appearance-none block w-full h-40 bg-white text-black border rounded leading-tight "
                        required
                        type="text"
                        name="message"
                        label="message"
                    />
                </div>
                <button className="border rounded-md w-20 h-8 bg-shadow text-white active:bg-title-bar hover:bg-slate-500" type="submit">
                    Send
                </button>
            </form>
        </div>
        </>
    )
}

export default ContactForm