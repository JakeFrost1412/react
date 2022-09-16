import './Footer.css'
import logo from './logo.svg';

export default function Footer() {
    return (
            <footer className='foot'>
                <div className='socials'>
                    <img src={logo} alt="logo" />
                    <img src={logo} alt="logo" />
                    <img src={logo} alt="logo" />
                    <img src={logo} alt="logo" />
                </div>
            </footer>
    )
}