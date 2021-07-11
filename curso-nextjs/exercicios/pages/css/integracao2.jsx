import styles from "./integracao2.module.css";

export default function integracao2() {
  return (
    <div id={styles.integracao2}>
      <div className={styles.vermelho}>Texto Vermelho</div>
      <div className={styles.azul}>Texto Azul</div>
      <div className={styles.branco}>Texto Branco</div>
    </div>
  );
}
