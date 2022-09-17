import './CSS/Button.css'
import emaillogo from './images/Mail.png';
import linkedin from './images/linkedin.png';

export default function TheButton() {
    return (
        <div className="mainButt">
            <button className='email-btn'><img src={emaillogo} alt="email logo" />Email</button>
            <button className='linkedin-btn'><img src={linkedin} alt="linkedin logo" />LinkedIn</button>
        </div>
    )
}