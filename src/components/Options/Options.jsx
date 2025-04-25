import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedback,
}) {
  return (
    <div className={css.feedbackButtons}>
      <button
        className={css.feedbackButton}
        onClick={() => updateFeedback("good")}
      >
        Good
      </button>
      <button
        className={css.feedbackButton}
        onClick={() => updateFeedback("neutral")}
      >
        Neutral
      </button>
      <button
        className={css.feedbackButton}
        onClick={() => updateFeedback("bad")}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button className={css.feedbackButton} onClick={resetFeedback}>
          Reset
        </button>
      )}
    </div>
  );
}
