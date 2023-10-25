import { useRef } from 'react';

export const ContactForm = ({ form, loading, handleChange, handleSumbit }) => {
    const formRef = useRef();

    return (
        <form
            ref={formRef}
            onSubmit={handleSumbit}
            className="mt-12 flex flex-col gap-8"
        >
            <label className="flex flex-col">
            <span className="text-white">Your Name</span>
            <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What´s your name"
                className="bg-tertiary py-4 px-6 
                placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
            </label>
            <label className="flex flex-col">
            <span className="text-white">Your Email</span>
            <input
                type="text"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email"
                className="bg-tertiary py-4 px-6 
                placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
            </label>
            <label className="flex flex-col">
            <span className="text-white">Your Message</span>
            <textarea
                rows="7"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say"
                className="bg-tertiary py-4 px-6 
                placeholder:text-secondary
                text-white rounded-lg outline-none border-none font-medium"
            />
            </label> 

            <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
            >
            {loading ? 'Sending...' : 'Send'}
            </button>

        </form>
    )
}
