export default function Method({ steps }) {
  return (
    <div>
      <h2>Method</h2>
      <div className="container my-grid">
        <ol>
          {steps.map((step, i) => (
            <li key={step.id} className="my-card">
              {step.name}
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}
