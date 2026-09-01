import { useMemo, useState } from 'react';
import { calculators } from '../data/calculators';
import CalculatorCard from '../components/CalculatorCard';
import AdSlot from '../components/AdSlot';

const quickTools = ['percentage', 'age', 'discount', 'loan'];

export default function HomePage() {
  const [query, setQuery] = useState('');
  const filtered = useMemo(() => calculators.filter((c) => `${c.name} ${c.category} ${c.description}`.toLowerCase().includes(query.toLowerCase())), [query]);

  return <>
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy-wrap">
          <span className="pill"><i></i> 100% free calculator tools</span>
          <h1>Quick calculations.<br/><span>Clear answers.</span></h1>
          <p className="hero-copy">Use simple, fast calculators for percentages, age, loans, grades, dates, discounts and everyday math. No account required.</p>
          <div className="hero-search">
            <span aria-hidden="true">⌕</span>
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="What do you want to calculate?" aria-label="Search calculators"/>
            <a href="/calculators/">All tools</a>
          </div>
          <div className="quick-links" aria-label="Popular calculators">
            {quickTools.map((slug) => {
              const c = calculators.find(item => item.slug === slug);
              return <a key={slug} href={`/calculators/${slug}/`}><b>{c.icon}</b>{c.shortName}</a>;
            })}
          </div>
          <div className="trust-row"><span>✓ No sign-up</span><span>✓ Works on mobile</span><span>✓ Inputs stay in your browser</span></div>
        </div>
        <div className="hero-panel" aria-label="Percentage calculator preview">
          <div className="hero-panel__top"><span>Percentage Calculator</span><span className="status-dot">Ready</span></div>
          <label className="preview-label">What is</label>
          <div className="mini-equation"><span>20%</span><b>of</b><span>15,000</span></div>
          <div className="mini-result"><div><small>Your answer</small><strong>3,000</strong></div><span>Instant result</span></div>
          <div className="hero-orbs"><i></i><i></i><i></i></div>
        </div>
      </div>
    </section>

    {query && <section className="section section--search-results"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">Search results</span><h2>Tools matching “{query}”</h2></div></div>
      <div className="tool-grid">{filtered.slice(0,8).map((c)=><CalculatorCard key={c.slug} calculator={c}/>)}</div>
      {filtered.length===0 && <div className="empty-state">No calculator matched “{query}”. Try age, percentage, loan, BMI or grade.</div>}
    </div></section>}

    <section className="section">
      <div className="container">
        <div className="section-heading"><div><span className="eyebrow">Popular calculators</span><h2>Choose a tool and get your answer</h2><p>Simple inputs, instant results, and useful explanations.</p></div><a href="/calculators/">See all 12 tools →</a></div>
        <div className="tool-grid">{calculators.slice(0,8).map((c)=><CalculatorCard key={c.slug} calculator={c}/>)}</div>
      </div>
    </section>

    <div className="container ad-wrap"><AdSlot type="leaderboard"/></div>

    <section className="section section--soft">
      <div className="container feature-grid">
        <article className="feature-card"><span>⚡</span><h2>Instant</h2><p>Calculations happen directly in your browser, so results appear immediately.</p></article>
        <article className="feature-card"><span>◎</span><h2>Easy to understand</h2><p>Each calculator includes a plain-language formula, example, FAQs and related tools.</p></article>
        <article className="feature-card"><span>▣</span><h2>Made for every screen</h2><p>Large inputs, readable results and responsive layouts make mobile use comfortable.</p></article>
      </div>
    </section>

    <section className="section seo-section">
      <div className="container content-card content-card--wide">
        <span className="eyebrow">Why CalcSyne</span><h2>One clean place for everyday calculations</h2>
        <p>CalcSyne brings common calculators into one consistent experience. Check a discount, estimate a monthly loan payment, calculate a grade, compare dates, convert units, or solve common percentage questions without digging through complicated pages.</p>
        <p>Calculator inputs are processed in your browser in this frontend-only version. For important financial, medical, academic, tax, or legal decisions, treat results as estimates and verify them with the relevant institution or qualified professional.</p>
      </div>
    </section>

    <section className="section section--faq">
      <div className="container faq-layout"><div><span className="eyebrow">FAQ</span><h2>Simple answers before you calculate</h2><p>What users commonly want to know.</p></div><div className="faq-list">
        <details><summary>Are CalcSyne calculators free?</summary><p>Yes. All calculators included in this project are free to use and do not require an account.</p></details>
        <details><summary>Do you save the numbers I enter?</summary><p>The included calculator logic runs locally in your browser. This project does not send calculator inputs to a custom backend.</p></details>
        <details><summary>Are the results official?</summary><p>No. They are general estimates. Banks, schools, healthcare providers and other institutions may use different rules or assumptions.</p></details>
      </div></div>
    </section>
  </>;
}
