import './CSS/Footer.css'
import twitter from './images/Twitter Icon.png';
import faceb from './images/Facebook Icon.png';
import insta from './images/Instagram Icon.png';
import gith from './images/GitHub Icon.png';

export default function Footer() {
    return (
            <footer className='foot'>
                <div className='socials'>
                    <img src={twitter} alt="logo" />
                    <img src={faceb} alt="logo" />
                    <img src={insta} alt="logo" />
                    <img src={gith} alt="logo" />
                </div>
            </footer>
    )
}