import { useNavigate } from "react-router-dom";
import styles from "../styles/toolcard.module.css";

export default function ToolCard({ title, description, icon = "✨", route }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className={styles.toolCard}>
      <div className={styles.toolCardContent}>
        <div className={styles.toolIcon}>{icon}</div>
        <h3 className={styles.toolTitle}>{title}</h3>
        <p className={styles.toolDescription}>{description}</p>
        <button className={styles.toolButton} onClick={handleClick}>
          Go to Tool
        </button>
      </div>
    </div>
  );
}
