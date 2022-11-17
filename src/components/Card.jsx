// import katie from '../assets/images/katie-zaferes.png';
import star from '../../public/images/star.png';

export default function Card(props) {
    let badgeText;
    if (props.card.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.card.location === "Online") {
        badgeText = "ONLINE"
    }
    return (
        <div className='card'>
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={`../../public/images/${props.card.coverImg}`} alt="" className='card--image'/>
            <div className='card--stats'>
                <img src={star} alt="" className='card--star'/>
                    <span>{props.card.stats.rating}</span>
                    <span className='gray'>({props.card.stats.reviewCount}) • </span>
                    <span className='gray'>{props.card.location}</span>
            </div>
            <p className='card--title'>{props.card.title}</p>
            <p className='card--price'><span className="bold">From ${props.card.price}</span> / person</p>
        </div>
    )
}



// {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}