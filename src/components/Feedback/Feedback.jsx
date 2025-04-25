import css from "./Feedback.module.css";

export default function Feedback({ feedback, total, positive }) {
  return (
    <div className={css.feedbackOutput}>
      <p>Good: {feedback.good}</p>
      <p>Neutral: {feedback.neutral}</p>
      <p>Bad: {feedback.bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positive}%</p>
    </div>
  );
}
