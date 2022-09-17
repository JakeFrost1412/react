import birbimage from './images/birb_image.jpg'
import './CSS/Profile.css'

export default function Profile() {
    return (
            <img src={birbimage} className='birb' alt="profile pic" />
    )
}