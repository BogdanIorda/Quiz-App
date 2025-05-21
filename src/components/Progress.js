function Progress({
  index,
  numQuestions,
  points,
  maxPossiblePoints,
  answer,
  question,
}) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong> / {numQuestions}
      </p>
      <p>
        Worth ({question.points} {question.points === 1 ? "point" : "points"})
      </p>
      <p>
        <strong>{points}</strong> / {maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
