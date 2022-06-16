import React from 'react'
import { BiEnvelope} from 'react-icons/bi';
import { FaMapMarkerAlt} from 'react-icons/fa';
import { AiFillPhone, AiFillClockCircle} from 'react-icons/ai';
const Contact = () => {
  return (
    <div>
        <div className="contact-section">
            <div className="contact-info">
                <div><FaMapMarkerAlt/>Address, City, Country</div>
                
                <div><BiEnvelope/>contact@email.com</div>
                <div><AiFillPhone/>+00 0000 000 000</div>
                <div><AiFillClockCircle/>Mon - Fri 8:00 AM to 5:00 PM</div>
            </div>
            <div className="contact-form">
                <h2>Contact Us</h2>
                    <form className="contact" action="" method="post">
                        <input type="text" name="name" className="text-box" placeholder="Your Name" required />
                        <input type="email" name="email" className="text-box" placeholder="Your Email" required />
                        <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
                        <input type="submit" name="submit" className="send-btn" value="Send"/>
                    </form>
            </div>
        </div>
    </div>
  )
}

export default Contact
