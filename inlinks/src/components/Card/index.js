import './styles.scss';
import { Link, NavLink } from 'react-router-dom';

export function Card(props) {
    return (
        <>
            <li>
                <Link target="_blank" to={`${props.link}`}>
                    <div className='header'>
                      <img src={props.icon} alt=""/>
                      <h2>{props.title}</h2>
                    </div>
                    <p>{props.description}</p>
                </Link>
            </li>
        </>
    )
}