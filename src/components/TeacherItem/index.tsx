import React from 'react'
import api from '../../services/api'
import whatsAppIcon from './../../assets/images/icons/whatsapp.svg'

import './styles.css'

export interface Teacher {
    
    user: { avatar: string;
            bio: string;
            id: number;
            name: string;
            subject: string;
            whatsapp: number;}
    id: string;
    cost: number;
    user_id: string;
    
}

export interface TeacherItemProps {
    teacher: Teacher;
}



const  TeacherItem: React.FC<TeacherItemProps> = ({teacher}) => {
    

    console.log(teacher.id)

    function createNewConnection () {
        api.post('connections', {
            user_id: teacher.user_id,
        })
    }

    return (
        <article className="teacher-item">

                        <header>
                            <img src={teacher.user.avatar} alt='teacher'/>

                            <div>
                                <strong>{teacher.user.name}</strong>
                                <span>{teacher.user.subject}</span>
                            </div>

                        </header>

                        <p>{teacher.user.bio}</p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ {teacher.cost}</strong>
                            </p>

                            <a 
                                onClick={createNewConnection}
                                href={`https://wa.me/<number>${teacher.user.whatsapp}`}>
                                <img src={whatsAppIcon} alt="Entrar em contanto" />
                                Entrar em contato
                            </a>
                        </footer>

                    </article>
    )
}

export default TeacherItem