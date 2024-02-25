import styles from "./Message.module.css";

function Message({ message }) {
  return (
    <p className={styles.message}>
      {message} <span role="img"> 🌍</span>
    </p>
  );
}

export default Message;
