import { useEffect, useRef, useState } from 'react';
import Notification from '../ui/Notification';
import classes from './ContactForm.module.css';

const ContactForm = () => {
   const [requestStatus, setRequestStatus] = useState();
   const emailInputRef = useRef();
   const nameInputRef = useRef();
   const messageInputRef = useRef();

   useEffect(() => {
      if (requestStatus === 'success' || requestStatus === 'error') {
         const timer = setTimeout(() => {
            setRequestStatus(null);
         }, 2500);

         return () => clearTimeout(timer);
      }
   }, [requestStatus]);

   const handleSubmitForm = async (e) => {
      e.preventDefault();

      const email = emailInputRef.current.value;
      const name = nameInputRef.current.value;
      const message = messageInputRef.current.value;

      if (
         !email.trim() ||
         !email.includes('@') ||
         !name.trim() ||
         !message.trim()
      ) {
         return console.log('Error en en formulario');
      }

      setRequestStatus('pending');
      const data = await fetch('/api/contact', {
         method: 'POST',
         headers: {
            'Content-Type': 'application/json',
         },
         body: JSON.stringify({ email, name, message }),
      });
      const result = await data.json();

      if (result.ok) {
         setRequestStatus('success');
      } else {
         setRequestStatus('error');
         throw new Error('Something went wrong :(');
      }
   };

   let notification;
   if (requestStatus === 'pending') {
      notification = {
         status: 'pending',
         title: 'Sending message...',
         message: 'Your message is on its way!',
      };
   }

   if (requestStatus === 'success') {
      notification = {
         status: 'success',
         title: 'Success!',
         message: 'Message sent successfully!',
      };
   }

   if (requestStatus === 'error') {
      notification = {
         status: 'error',
         title: 'Error :(',
         message: 'Something went wrong!',
      };
   }

   return (
      <section className={classes.contact}>
         <h1>How can I help you?</h1>
         <form className={classes.form} onSubmit={handleSubmitForm}>
            <div className={classes.controls}>
               <div className={classes.control}>
                  <label htmlFor="email">Your Email</label>
                  <input type="email" id="email" required ref={emailInputRef} />
               </div>
               <div className={classes.control}>
                  <label htmlFor="name">Your Name</label>
                  <input type="text" id="name" required ref={nameInputRef} />
               </div>
            </div>
            <div className={classes.control}>
               <label htmlFor="message">Your Message</label>
               <textarea id="message" rows="5" ref={messageInputRef}></textarea>
            </div>

            <div className={classes.actions}>
               <button type="submit">Send Message</button>
            </div>
         </form>
         {notification && (
            <Notification
               status={notification.status}
               title={notification.title}
               message={notification.message}
            />
         )}
      </section>
   );
};

export default ContactForm;
