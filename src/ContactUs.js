import React from 'react';

function ContactUs() {
  return (
    <div>
      <h3>Contact Us</h3>
      <form>
        <div>
          <label>Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactUs;
