import './styles.scss';
import { projectData } from '../../data';
import { Card } from '../Card';
import avatar from '../../assets/avatar.png'

export function Header() {

    return (
        <div className="container">
            <div className="profile">
                <img 
                src={avatar} 
                alt="Inacio Raimundo GitHub profile picture" 
                />
                <h2>Inácio Raimundo</h2>
                <p>@inacio000</p>
            </div>

            <div className="switch">
                <button>
                </button>
                <span></span>
            </div>

            <div className="about">
                <p>Learning every day 🌱 👨🏽‍💻</p>
                <p>Focused on front-end web development</p>
                <p>↓ Check the links below ↓</p>
            </div>

            <ul>
                {
                    projectData.map((data) => (
                        <Card 
                            key={data.id}
                            icon={data.icon}
                            link={data.link}
                            title={data.title}
                            description={data.description}
                        />
                    ))
                }
            </ul>

        </div>
    )
}