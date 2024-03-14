import styles from './Backend.module.css'
import { FaPython } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { SiInsomnia } from "react-icons/si";

function Backend(){
    return(
        <div className={styles.backend}>
            <h1>Backend</h1>
                <div>
                    <p>
                        No backend conheço fundamentos de Python para análise de dados, banco de dados SQL
                        e NoSQL para modelagem e consultas em geral, maior compreensão
                        de APIs e arquitetura BFF, além da familiaridade com o Insomnia, 
                        para testar e depurar APIs, garantindo a robustez e segurança das
                        aplicações. 
                    </p>
                    <section>
                        <ul>
                            <li><FaPython/></li>
                            <li><FaDatabase/></li>
                        </ul>
                    </section>
                </div>
        </div>
    )
}

export default Backend