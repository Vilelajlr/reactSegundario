import styles from './Frase.module.css';

function Frase(){
    return (
        <div className={styles.fraseContainer}>
            <p className={styles.fraseContent}>“O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.”</p>
            <p className={styles.fraseContent}>Winston Churchill</p>
        </div>
    );
}

export default Frase;