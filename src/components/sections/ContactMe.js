import styles from './ContactMe.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaWhatsapp, FaGithub, FaLinkedin } from "react-icons/fa";
import ButtonB from '../elements/ButtonB' 




function ContactMe(){
    return(
        <div className={styles.ContactMe}>
            <div>
                <h1>Vamos trabalhar juntos?</h1>
                <p>
                    Se você busca um parceiro de desenvolvimento comprometido em traduzir<br/>
                    suas visões em experiências digitais incríveis, estou aqui para te ajudar!<br/>
                </p>
                <section>
                <a href='https://drive.google.com/file/d/19ldlY7z3RtXpYK9MLqdegVWQoaNuuKyj/view?usp=sharing'><ButtonB/></a>
                </section>
            </div>
            
                <ul>
                    <div>
                        <li><a href="mailto:contato@acdev.tech" target="_blank"><HiOutlineMail/></a></li>
                    </div>
                    <div>
                        <li><a href='https://wa.me/5511958580028'><FaWhatsapp /></a></li>
                    </div>
                    <div>
                        <li><a href='https://github.com/carollcorrea'><FaGithub/></a></li>
                    </div>
                    <div>
                        <li><a href='https://drive.google.com/file/d/19ldlY7z3RtXpYK9MLqdegVWQoaNuuKyj/view?usp=sharing'><FaLinkedin/></a></li>
                    </div>
                </ul>
        </div>
    )
}

export default ContactMe