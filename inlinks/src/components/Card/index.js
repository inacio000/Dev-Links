import './styles.scss'

export function Card(props) {
    return (
        <>
            <li>
                <a target="_blank" href={props.link}>
                    <div className='header'>
                      <img src={props.icon} alt=""/>
                      <h2>{props.title}</h2>
                    </div>
                    <p>{props.description}</p>
                </a>
            </li>
        </>
    )
}