import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    let newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Valid email is required';
    if (!message) newErrors.message = 'Message is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      alert('Form submitted!');
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    }
  };

  return (
    <section id="contact">
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name" />
        {errors.name && <p>{errors.name}</p>}
        
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" />
        {errors.email && <p>{errors.email}</p>}

        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Message" />
        {errors.message && <p>{errors.message}</p>}

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;