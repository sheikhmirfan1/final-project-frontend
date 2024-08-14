import axios from "axios";
import { Footer } from "../components/Footer.jsx";
import { MyMap } from "./Map.jsx";
import { useState } from "react";
import { Alert } from "@material-tailwind/react";





const ContactUs = () => {

const [message, setMessage] = useState({
    email: "",
    subject: "",
    text: ""
});
const [messageInfo, setMessageInfo] = useState(null)
const [error,setError] = useState(null)

const sendMessage = async (e) => {
  e.preventDefault()
    try{
  const newMessage = await axios.post(`http://localhost:3000/api/send-email`, message)
  setMessageInfo(newMessage.data.message)
 
}

catch(err) {
  setError(err)
 
}
finally {
  setMessage({
    email: "",
    subject: "",
    text: "",
  })
}
}

  

  return (
    <>
      {messageInfo && <Alert>{messageInfo}</Alert>}
      <section >
        
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-black dark:text-black">
            Contact Us
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-black dark:text-gray-400 sm:text-xl">
            Need details about our Restaurant ? Let us know.
          </p>
          <form action="#" className="space-y-8" onSubmit={sendMessage}>
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="name@example.com"
                required="name@example.com"
                onChange={(e) =>
                  setMessage({ ...message, email: e.target.value })
                }
                value={message.email}
              ></input>
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-2 text-sm font-medium text-black dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                className="block p-3 w-full text-sm text-black bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Let us know how we can help you"
                required="Subject"
                onChange={(e) =>
                  setMessage({ ...message, subject: e.target.value })
                }
                value={message.subject}
              ></input>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-black dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-black bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Leave a comment..."
                required
                onChange={(e) =>
                  setMessage({ ...message, text: e.target.value })
                }
                value={message.text}
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-blue-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      <div className="bg-gray-900">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-lg">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-white dark:text-black">
            Our Location
          </h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">
            Find us at the heart of the city.
          </p>
          <MyMap />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
