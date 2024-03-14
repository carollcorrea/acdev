import styles from './Footer.module.css'
import { AiFillHeart } from "react-icons/ai";

function Footer() {
    return (
        <div className={styles.footer}>
            <p>contato@acdev.tech</p>
            <p>Feito com <AiFillHeart/> por Ana Carollina © 2024 </p>
        </div>
    )
}

export default Footer