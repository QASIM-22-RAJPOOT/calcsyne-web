import { useMemo, useState } from 'react';
import { calculators } from '../data/calculators';
import CalculatorCard from '../components/CalculatorCard';
import AdSlot from '../components/AdSlot';

export default function CalculatorsPage() {
  const [query,setQuery]=useState('');
  const [category,setCategory]=useState('All');
  const categories=['All',...new Set(calculators.map(c=>c.category))];
  const items=useMemo(()=>calculators.filter(c=>(category==='All'||c.category===category)&&`${c.name} ${c.description}`.toLowerCase().includes(query.toLowerCase())),[query,category]);

  return <section className="section page-top"><div className="container">
    <div className="page-intro page-intro--center"><span className="eyebrow">Calculator library</span><h1>Find the calculator you need</h1><p>Search or filter practical tools for math, finance, education, health, dates and conversions.</p></div>
    <div className="library-toolbar">
      <div className="search-box search-box--library"><span aria-hidden="true">⌕</span><input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder="Search by name, e.g. percentage or loan" aria-label="Search calculators"/></div>
      <div className="category-row">{categories.map(c=><button className={category===c?'active':''} onClick={()=>setCategory(c)} key={c}>{c}</button>)}</div>
    </div>
    <div className="results-count">Showing <strong>{items.length}</strong> calculator{items.length === 1 ? '' : 's'}</div>
    <div className="tool-grid">{items.map(c=><CalculatorCard calculator={c} key={c.slug}/>)}</div>
    {items.length===0&&<div className="empty-state">No tools found. Try another search or category.</div>}
    <div className="spacer-md"></div><AdSlot type="leaderboard"/>
  </div></section>;
}
