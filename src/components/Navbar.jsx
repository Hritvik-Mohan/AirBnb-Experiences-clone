// import photogrid from "../images/airbnb-logo.png"
import photogrid from '../../public/images/airbnb-logo.png'

export default function Navbar() {
    return (
        <nav>
            <img src={photogrid} className="nav--logo" alt="" />
        </nav>
    )
}