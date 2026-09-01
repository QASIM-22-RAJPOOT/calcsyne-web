export default function CalculatorCard({ calculator }) {
  return (
    <a className="tool-card" href={`/calculators/${calculator.slug}/`}>
      <div className="tool-card__top">
        <div className="tool-card__icon" aria-hidden="true">{calculator.icon}</div>
        <span className="tool-card__arrow" aria-hidden="true">↗</span>
      </div>
      <div>
        <span className="eyebrow">{calculator.category}</span>
        <h3>{calculator.name}</h3>
        <p>{calculator.description}</p>
      </div>
    </a>
  );
}
