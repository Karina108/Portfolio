import React, { useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import style from "../styles/Contact.module.css";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { FaLinkedin, FaInstagramSquare, FaFacebook } from "react-icons/fa";
import { VscGithub } from "react-icons/vsc";
import { LuDownload } from "react-icons/lu";
import { FaSquareXTwitter } from "react-icons/fa6";
import emailjs from "@emailjs/browser";
import { EMAIL, FACEBOOK, GITHUB, INSTAGRAM, LINKEDIN, RESUME, TWITTER } from "../constant";
import resumeDownload from "../assets/contact/Karina_Resume_25.pdf"
const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    email_id: '',
    mobile: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Name validation
    if (!formData.from_name.trim()) {
      newErrors.from_name = 'Name is required';
    } else if (formData.from_name.length < 2) {
      newErrors.from_name = 'Name must be at least 2 characters';
    }

    // Email validation
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!formData.email_id) {
      newErrors.email_id = 'Email is required';
    } else if (!emailRegex.test(formData.email_id)) {
      newErrors.email_id = 'Please enter a valid email';
    }

    // Mobile validation (optional)
    if (formData.mobile) {
      const phoneRegex = /^[6-9]{1}[0-9]{9}$/;
      if (!phoneRegex.test(formData.mobile)) {
        newErrors.mobile = 'Please enter a valid 10-digit number';
      }
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fill in all required fields correctly');
      return;
    }

    emailjs
      .sendForm(
        "service_gmp2a88",
        "template_aeflk7d",
        form.current,
        "mlOT1nPied1W8SBwH"
      )
      .then(
        (result) => {
          setFormData({
            from_name: '',
            email_id: '',
            mobile: '',
            subject: '',
            message: ''
          });
          toast.success('Message sent successfully!');
          setErrors({});
        },
        (error) => {
          toast.error('Failed to send message. Please try again.');
        }
      );
  };

  return (
    <>
     <ToastContainer
        position="top-right"
        autoClose={2500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        className={style.toastContainer} 
      />
     <section id="contact" className={style.contact}>  
     <h2>
       Contact <span className={style.contactMe}>Me!</span>
     </h2>
     <div className={style.container}>
       {/* Left Side */}
       <div className={style.contactLeft}>
         <p className={style.contactDetail}>
           <MdEmail className={style.icon} />
           <a href={EMAIL}>singhkarina90@gmail.com</a>
         </p>
         <p className={style.contactDetail}>
           <IoCall className={style.icon} />
           <a href="tel:+917973742809">7973742809</a>
         </p>
         <div className={style.socialIcon}>
           <a href={LINKEDIN} target="_blank" rel="noopener noreferrer">
             <FaLinkedin />
           </a>
           <a href={GITHUB} target="_blank" rel="noopener noreferrer">
             <VscGithub />
           </a>
           <a href={TWITTER} target="_blank" rel="noopener noreferrer">
             <FaSquareXTwitter />
           </a>
           <a href={FACEBOOK} target="_blank" rel="noopener noreferrer">
             <FaFacebook />
           </a>
           <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
             <FaInstagramSquare />
           </a>
         </div>
         <div className={style.resumeOptions}>
           <a
             href={RESUME}
             target="_blank"
             rel="noopener noreferrer"
           >
             View Resume
           </a>
           <a href={resumeDownload} download="Karina_Resume.pdf" rel="noopener noreferrer">        
             <LuDownload /> Download Resume
           </a>
         </div>
       </div>

       {/* Right Side */}
       <div className={style.contactRight}>
         <form ref={form} onSubmit={sendEmail}>
           <div className={style.inputBox}>
             <div className={style.inputWrapper}>
               <input
                 type="text"
                 name="from_name"
                 placeholder="Your Name"
                 value={formData.from_name}
                 onChange={handleInputChange}
                 className={errors.from_name ? style.errorInput : ''}
               />
               {errors.from_name && <span className={style.errorText}>{errors.from_name}</span>}
             </div>
             <div className={style.inputWrapper}>
               <input
                 type="email"
                 name="email_id"
                 placeholder="Your Email"
                 value={formData.email_id}
                 onChange={handleInputChange}
                 className={errors.email_id ? style.errorInput : ''}
               />
               {errors.email_id && <span className={style.errorText}>{errors.email_id}</span>}
             </div>
           </div>

           <div className={style.inputBox}>
             <div className={style.inputWrapper}>
               <input
                 type="tel"
                 name="mobile"
                 placeholder="Your Mobile Number"
                 value={formData.mobile}
                 onChange={handleInputChange}
                 className={errors.mobile ? style.errorInput : ''}
               />
               {errors.mobile && <span className={style.errorText}>{errors.mobile}</span>}
             </div>
             <div className={style.inputWrapper}>
               <input
                 type="text"
                 name="subject"
                 placeholder="Email Subject"
                 value={formData.subject}
                 onChange={handleInputChange}
                 className={errors.subject ? style.errorInput : ''}
               />
               {errors.subject && <span className={style.errorText}>{errors.subject}</span>}
             </div>
           </div>

           <div className={style.textareaWrapper}>
             <textarea
               name="message"
               placeholder="Your Message"
               rows="8"
               value={formData.message}
               onChange={handleInputChange}
               className={errors.message ? style.errorInput : style.textAreaMsg}
             ></textarea>
             {errors.message && <span className={style.errorText}>{errors.message}</span>}
           </div>

           <button type="submit">Send Message</button>
         </form>
       </div>
     </div>
   </section>
      </>
   
  );
};

export default Contact;