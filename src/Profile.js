import birbimage from './images/birb_image.jpg'
import './Profile.css'

export default function Profile() {
    return (
            <img src={birbimage} className='birb' alt="birby" />
    )
}