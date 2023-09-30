import { PropsType } from "./props";
import "./style.css";

export default function MetricsData({ text, color, number }: PropsType) {
  return (
    <div className="section-metrics">
      <h2 className={`color-${color}`}>{text}</h2>
      <p>{String(number)}</p>
    </div>
  );
}
