import styles from "./Input.module.scss";

type InputProps = {
  image: string;
  placeholder: string;
};

const Input: React.FC<InputProps> = ({ image, placeholder }) => {
  return (
    <div className={styles.input}>
      <img src={"/img/" + image + ".svg"} alt={placeholder} />
      <input type="text" placeholder={placeholder} />
    </div>
  );
};

export default Input;
