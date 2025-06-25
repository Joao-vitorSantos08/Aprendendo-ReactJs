import './style.css'

const Card = ({ title, decription}) => {
    return(
        <div className="card">
        <h3>{title}</h3>
        <p>{decription}</p>
    </div>
    )
}

export default Card