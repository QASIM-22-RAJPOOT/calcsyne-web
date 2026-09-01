import { calculators } from '../data/calculators';
import { widgetMap } from '../calculators/CalculatorWidgets';
import CalculatorCard from '../components/CalculatorCard';
import AdSlot from '../components/AdSlot';
import SeoJsonLd from '../components/SeoJsonLd';

export default function CalculatorPage({ calculator }) {
  const Widget = widgetMap[calculator.slug];
  const related = calculators.filter(c=>c.slug!==calculator.slug && (c.category===calculator.category || ['percentage','age','unit-converter'].includes(c.slug))).slice(0,3);
  return <>
    <SeoJsonLd calculator={calculator}/>
    <section className="section page-top calculator-hero"><div className="container"><nav className="breadcrumbs"><a href="/">Home</a><span>›</span><a href="/calculators/">Calculators</a><span>›</span><span>{calculator.shortName}</span></nav><div className="calculator-title"><div className="tool-card__icon tool-card__icon--large">{calculator.icon}</div><div><span className="eyebrow">{calculator.category} calculator</span><h1>{calculator.name}</h1><p>{calculator.description}</p></div></div></div></section>
    <section className="section section--calc"><div className="container calculator-layout"><div><div className="calculator-panel"><Widget/></div><AdSlot type="inArticle"/></div><aside className="calculator-sidebar"><AdSlot type="rectangle"/><div className="sidebar-card"><h2>Quick guide</h2><ol><li>Enter the values requested by the calculator.</li><li>Review the result shown instantly.</li><li>Check the formula and example below when you need context.</li></ol></div></aside></div></section>
    <section className="section"><div className="container content-layout"><article className="content-card"><span className="eyebrow">How it works</span><h2>About the {calculator.name}</h2><p>{calculator.intro}</p><h3>Formula</h3><p>{calculator.formula}</p><div className="formula-box">{calculator.formula}</div><h3>Example</h3><p>{calculator.example}</p><h3>Using the result responsibly</h3><p>Calculator results are designed for general informational use. Real-world policies, institutional rules, fees, taxes, health factors, and rounding methods can produce different official results. When a decision has financial, medical, academic, tax, or legal consequences, confirm the final number with the relevant qualified source.</p></article><aside><div className="sidebar-card"><h2>Privacy-first by design</h2><p>This starter version performs calculator math locally in your browser and does not require you to create an account.</p></div></aside></div></section>
    <section className="section section--faq"><div className="container faq-layout"><div><span className="eyebrow">FAQ</span><h2>{calculator.shortName} questions</h2></div><div className="faq-list">{calculator.faqs.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}</div></div></section>
    <section className="section"><div className="container"><div className="section-heading"><div><span className="eyebrow">Keep calculating</span><h2>Related tools</h2></div></div><div className="tool-grid">{related.map(c=><CalculatorCard calculator={c} key={c.slug}/>)}</div></div></section>
  </>;
}
