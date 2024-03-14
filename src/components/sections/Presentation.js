import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import woman from '../../img/woman.svg'
import { useEffect, useState } from 'react'

function Presentation(){
    const [text, setText] = useState('');
    const toRotate = ['meu nome é Caroll', 'eu sou Dev Frontend'];
    const [loop, setLoop] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const period =100;
    const [delta, setDelta] = useState (100)


    useEffect(()=>{
        let ticker = setInterval(()=>{
            toType()
        }, delta)
        return()=>{clearInterval(ticker)}
    }, [text])

    const toType = () => {
        let i= loop % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0,text.length-1) : fullText.substring(0,text.length+1);

        setText(updatedText);

        if(!isDeleting && updatedText === fullText){
         setIsDeleting(true);
         setDelta(period);
        }else if (isDeleting && updatedText === ''){
         setIsDeleting(false);
         setDelta(period);
         setLoop(loop+1);
        }
    }


    return (
            <div className={styles.presentation}>
                <container>
                    <h1>Olá, {text}</h1><br/>
                    <p>Combino criatividade & habilidades técnicas<br/>
                    para criar interfaces web atraentes e funcionais.
                    </p>
                    <a href='https://github.com/carollcorrea'><ButtonA/></a>
                </container>
                <img className={styles.img} src={woman} alt='erro'/> 
            </div>
    )
}

export default Presentation