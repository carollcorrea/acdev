import styles from './Frontend.module.css'
import { RiJavascriptFill } from "react-icons/ri";
import { PiFileHtmlFill } from "react-icons/pi";
import { PiFileCssFill } from "react-icons/pi";
import { FaReact } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { TbApi } from "react-icons/tb";



function Frontend (){
    return(
        <div className={styles.frontend}>
            <h1>Frontend</h1>
            <div>
                <section>
                    <ul>
                            <li><PiFileHtmlFill/></li>
                            <li><PiFileCssFill/></li>
                            <li><RiJavascriptFill/></li>
                            <li><BiLogoTypescript/></li>
                    </ul>
                    <ul>
                            <li><FaReact/></li>
                            <li><SiNextdotjs/></li>
                            <li><FaBootstrap/></li>
                            <li><TbApi/></li>
                    </ul>
                </section>
                <p>
                    Crio interfaces web com frameworks modernos para transformar
                    suas ideias em realidade de maneira atraente e responsiva.
                    <br/>
                    <br/>
                    Tenho conhecimentos em HTML, CSS e Javascript , domínio de
                    frameworks populares como React e Next.js otimizados com 
                    Typescript para desenvolver aplicações dinâmicas e escaláveis. 
                    Experiência na utilização de Bootstrap para assegurar a 
                    consistência visual, garantindo que seus projetos se destaquem
                    em um ambiente digital cada vez mais competitivo.
                </p>
            </div>
        </div>
    )
}

export default Frontend