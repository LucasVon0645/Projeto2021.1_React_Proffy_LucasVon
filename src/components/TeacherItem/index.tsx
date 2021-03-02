import React from 'react'

import myPhoto from './../../assets/images/foto.jpg'
import whatsAppIcon from './../../assets/images/icons/whatsapp.svg'

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">

                        <header>
                            <img src={myPhoto} alt="myPhoto"/>

                            <div>
                                <strong>Lucas Von</strong>
                                <span>Matemática</span>
                            </div>

                        </header>

                        <p>
                            Entusiasta dos conceitos matemáticos
                            <br /><br />
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur ullam quisquam voluptates, 
                            ratione iste culpa possimus vitae placeat deserunt ut optio totam rem voluptatibus minus voluptatem 
                            molestiae incidunt sed eius!
                        </p>

                        <footer>
                            <p>
                                Preço/hora
                                <strong>R$ 80,00</strong>
                            </p>

                            <button type="button">
                                <img src={whatsAppIcon} alt="Entrar em contanto" />
                                Entrar em contato
                            </button>
                        </footer>

                    </article>
    )
}

export default TeacherItem