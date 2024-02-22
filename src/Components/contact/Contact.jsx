import React, { useState } from 'react';
import "./contact.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    } else {
      newErrors.name = '';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    } else {
      newErrors.email = '';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
      valid = false;
    } else {
      newErrors.subject = '';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else {
      newErrors.message = '';
    }

    setErrors(newErrors);
    return valid;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      toast.success('Form Send successfully!', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      // Clear form data
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } else {
      toast.error('Please fill out all required fields correctly.', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact container section" id='contact'>
      <h2 className="section_title">My Details</h2>
      <div className="contact_container grid">
        <div className="contact_info">
          <h3 className="contact_title">Let's talk</h3>
          <p className="contact_details">Send me a mail for further information About me!</p>
        </div>
        <form onSubmit={handleFormSubmit} className="contact_form">
          <div className="contact_form-group">
            <div className="contact_form-div">
              <input
                type="text"
                className={`contact_form-input ${errors.name && 'error'}`}
                placeholder='Insert your name'
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="contact_form-div">
              <input
                type="email"
                className={`contact_form-input ${errors.email && 'error'}`}
                placeholder='Type your mail'
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="contact_form-div">
            <input
              type="text"
              className={`contact_form-input ${errors.subject && 'error'}`}
              placeholder='Insert your subject'
              name="subject"
              value={formData.subject}
              onChange={handleChange}
            />
          </div>
          <div className="contact_form-div contact_form-area">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              className={`contact_form-input ${errors.message && 'error'}`}
              placeholder="Write your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className="btn">Send</button>
        </form>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Contact;
