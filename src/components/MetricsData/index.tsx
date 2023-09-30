import { PropsType } from "./props";
import "./style.css";

export default function MetricsData({ text, color, textNumber }: PropsType) {
  return (
    <div className="section-metrics">
      <h2 className={`color-${color}`}>{text}</h2>
      <p>{textNumber}</p>
    </div>
  );
}
