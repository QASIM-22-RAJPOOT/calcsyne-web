import { useMemo, useState } from 'react';

const num = (value) => Number(value) || 0;
const fmt = (value, digits = 2) => Number.isFinite(value) ? new Intl.NumberFormat('en-US', { maximumFractionDigits: digits }).format(value) : '—';

function Field({ label, value, onChange, type = 'number', min, step = 'any', placeholder }) {
  return <label className="field"><span>{label}</span><input type={type} value={value} onChange={(e) => onChange(e.target.value)} min={min} step={step} placeholder={placeholder} /></label>;
}

function Result({ label, value, sub }) {
  return <div className="result-card"><span>{label}</span><strong>{value}</strong>{sub && <small>{sub}</small>}</div>;
}

export function PercentageCalculator() {
  const [pct, setPct] = useState('20'); const [base, setBase] = useState('15000');
  const [part, setPart] = useState('30'); const [whole, setWhole] = useState('120');
  const [oldV, setOldV] = useState('100'); const [newV, setNewV] = useState('125');
  const ofNumber = num(base) * num(pct) / 100;
  const whatPercent = num(whole) === 0 ? NaN : num(part) / num(whole) * 100;
  const change = num(oldV) === 0 ? NaN : (num(newV) - num(oldV)) / Math.abs(num(oldV)) * 100;
  return <div className="calculator-stack">
    <section className="calc-block"><h2>What is X% of Y?</h2><div className="form-grid"><Field label="Percentage (%)" value={pct} onChange={setPct}/><Field label="Number" value={base} onChange={setBase}/></div><Result label={`${pct || 0}% of ${fmt(num(base))}`} value={fmt(ofNumber, 6)} /></section>
    <section className="calc-block"><h2>What percent is X of Y?</h2><div className="form-grid"><Field label="Part" value={part} onChange={setPart}/><Field label="Whole" value={whole} onChange={setWhole}/></div><Result label="Percentage" value={Number.isFinite(whatPercent) ? `${fmt(whatPercent, 4)}%` : 'Enter a non-zero whole'} /></section>
    <section className="calc-block"><h2>Percentage change</h2><div className="form-grid"><Field label="Old value" value={oldV} onChange={setOldV}/><Field label="New value" value={newV} onChange={setNewV}/></div><Result label="Change" value={Number.isFinite(change) ? `${change >= 0 ? '+' : ''}${fmt(change, 4)}%` : 'Old value cannot be 0'} /></section>
  </div>;
}

function calendarAge(start, end) {
  if (!start || !end) return null;
  let a = new Date(`${start}T00:00:00`), b = new Date(`${end}T00:00:00`);
  if (Number.isNaN(a.getTime()) || Number.isNaN(b.getTime()) || b < a) return null;
  let years = b.getFullYear() - a.getFullYear();
  let cursor = new Date(a); cursor.setFullYear(a.getFullYear() + years);
  if (cursor > b) { years--; cursor = new Date(a); cursor.setFullYear(a.getFullYear() + years); }
  let months = 0; let next = new Date(cursor);
  while (months < 11) { next = new Date(cursor); next.setMonth(cursor.getMonth() + 1); if (next > b) break; cursor = next; months++; }
  const days = Math.floor((b - cursor) / 86400000);
  const totalDays = Math.floor((b - a) / 86400000);
  return { years, months, days, totalDays };
}

export function AgeCalculator() {
  const today = new Date().toISOString().slice(0,10); const [birth, setBirth] = useState('2000-01-01'); const [onDate, setOnDate] = useState(today);
  const age = calendarAge(birth, onDate);
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid"><Field label="Date of birth" type="date" value={birth} onChange={setBirth}/><Field label="Age on date" type="date" value={onDate} onChange={setOnDate}/></div>{age ? <div className="result-grid"><Result label="Years" value={age.years}/><Result label="Months" value={age.months}/><Result label="Days" value={age.days}/><Result label="Total days" value={fmt(age.totalDays,0)}/></div> : <p className="calc-message">Choose a valid birth date and a later reference date.</p>}</section></div>;
}

export function BmiCalculator() {
  const [system, setSystem] = useState('metric'); const [kg, setKg] = useState('70'); const [cm, setCm] = useState('175'); const [lb, setLb] = useState('154'); const [ft, setFt] = useState('5'); const [inch, setInch] = useState('9');
  const bmi = system === 'metric' ? num(kg) / ((num(cm)/100) ** 2) : 703 * num(lb) / ((num(ft)*12 + num(inch)) ** 2);
  const category = bmi < 18.5 ? 'Below standard adult range' : bmi < 25 ? 'Standard adult range' : bmi < 30 ? 'Above standard adult range' : 'Higher adult BMI range';
  return <div className="calculator-stack"><section className="calc-block"><div className="segmented"><button className={system==='metric'?'active':''} onClick={()=>setSystem('metric')}>Metric</button><button className={system==='imperial'?'active':''} onClick={()=>setSystem('imperial')}>Imperial</button></div>{system==='metric'?<div className="form-grid"><Field label="Weight (kg)" value={kg} onChange={setKg} min="0"/><Field label="Height (cm)" value={cm} onChange={setCm} min="0"/></div>:<div className="form-grid form-grid--3"><Field label="Weight (lb)" value={lb} onChange={setLb} min="0"/><Field label="Height (ft)" value={ft} onChange={setFt} min="0"/><Field label="Inches" value={inch} onChange={setInch} min="0"/></div>}<Result label="Estimated BMI" value={Number.isFinite(bmi)&&bmi>0?fmt(bmi,1):'—'} sub={Number.isFinite(bmi)&&bmi>0?category:'Enter valid height and weight'} /><p className="calc-note">BMI is a screening measure, not a diagnosis or personalized medical advice.</p></section></div>;
}

export function DiscountCalculator() {
  const [price,setPrice]=useState('8000'); const [discount,setDiscount]=useState('25');
  const saved=num(price)*num(discount)/100; const final=num(price)-saved;
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid"><Field label="Original price" value={price} onChange={setPrice} min="0"/><Field label="Discount (%)" value={discount} onChange={setDiscount} min="0"/></div><div className="result-grid"><Result label="You save" value={fmt(saved)}/><Result label="Sale price" value={fmt(final)}/></div></section></div>;
}

export function LoanCalculator() {
  const [principal,setPrincipal]=useState('1000000'); const [rate,setRate]=useState('12'); const [years,setYears]=useState('5');
  const n=Math.max(1,Math.round(num(years)*12)); const r=num(rate)/100/12; const p=num(principal);
  const payment=r===0?p/n:p*r*((1+r)**n)/(((1+r)**n)-1); const total=payment*n; const interest=total-p;
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid form-grid--3"><Field label="Loan amount" value={principal} onChange={setPrincipal} min="0"/><Field label="Annual interest (%)" value={rate} onChange={setRate} min="0"/><Field label="Term (years)" value={years} onChange={setYears} min="0.1"/></div><div className="result-grid"><Result label="Monthly payment" value={fmt(payment)}/><Result label="Total interest" value={fmt(interest)}/><Result label="Total repayment" value={fmt(total)}/></div><p className="calc-note">Estimate only. Real lender payments can include fees, insurance, taxes, or different compounding rules.</p></section></div>;
}

export function CompoundInterestCalculator() {
  const [principal,setPrincipal]=useState('100000'); const [monthly,setMonthly]=useState('10000'); const [rate,setRate]=useState('10'); const [years,setYears]=useState('10');
  const months=Math.max(0,Math.round(num(years)*12)); const monthlyRate=num(rate)/100/12; let balance=num(principal);
  for(let i=0;i<months;i++){ balance=balance*(1+monthlyRate)+num(monthly); }
  const contributions=num(principal)+num(monthly)*months; const growth=balance-contributions;
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid"><Field label="Starting amount" value={principal} onChange={setPrincipal} min="0"/><Field label="Monthly contribution" value={monthly} onChange={setMonthly} min="0"/><Field label="Annual rate (%)" value={rate} onChange={setRate}/><Field label="Years" value={years} onChange={setYears} min="0"/></div><div className="result-grid"><Result label="Projected balance" value={fmt(balance)}/><Result label="Your contributions" value={fmt(contributions)}/><Result label="Estimated growth" value={fmt(growth)}/></div><p className="calc-note">Projection only; it does not guarantee investment returns and excludes taxes, fees, and inflation.</p></section></div>;
}

const gradePoints = { 'A':4, 'A-':3.7, 'B+':3.3, 'B':3, 'B-':2.7, 'C+':2.3, 'C':2, 'C-':1.7, 'D+':1.3, 'D':1, 'F':0 };
export function GpaCalculator() {
  const [rows,setRows]=useState([{grade:'A',credits:3},{grade:'B+',credits:3},{grade:'A-',credits:4}]);
  const update=(i,key,value)=>setRows(rows.map((r,idx)=>idx===i?{...r,[key]:value}:r)); const credits=rows.reduce((s,r)=>s+num(r.credits),0); const points=rows.reduce((s,r)=>s+(gradePoints[r.grade]??0)*num(r.credits),0); const gpa=credits?points/credits:0;
  return <div className="calculator-stack"><section className="calc-block"><div className="course-table"><div className="course-row course-row--head"><span>Course</span><span>Grade</span><span>Credits</span><span></span></div>{rows.map((row,i)=><div className="course-row" key={i}><span>Course {i+1}</span><select value={row.grade} onChange={(e)=>update(i,'grade',e.target.value)}>{Object.keys(gradePoints).map(g=><option key={g}>{g}</option>)}</select><input type="number" min="0" step="0.5" value={row.credits} onChange={(e)=>update(i,'credits',e.target.value)}/><button className="icon-button" onClick={()=>setRows(rows.filter((_,idx)=>idx!==i))} aria-label={`Remove course ${i+1}`}>×</button></div>)}</div><button className="secondary-button" onClick={()=>setRows([...rows,{grade:'A',credits:3}])}>+ Add course</button><Result label="Estimated GPA (4.0 scale)" value={fmt(gpa,2)} sub={`${fmt(credits,1)} total credits`} /></section></div>;
}

export function GradeCalculator() {
  const [rows,setRows]=useState([{name:'Assignments',score:85,weight:30},{name:'Midterm',score:78,weight:30},{name:'Final project',score:92,weight:40}]);
  const update=(i,key,value)=>setRows(rows.map((r,idx)=>idx===i?{...r,[key]:value}:r)); const totalWeight=rows.reduce((s,r)=>s+num(r.weight),0); const weighted=rows.reduce((s,r)=>s+num(r.score)*num(r.weight),0); const grade=totalWeight?weighted/totalWeight:0;
  return <div className="calculator-stack"><section className="calc-block"><div className="course-table"><div className="course-row grade-row course-row--head"><span>Assessment</span><span>Score %</span><span>Weight</span><span></span></div>{rows.map((row,i)=><div className="course-row grade-row" key={i}><input value={row.name} onChange={(e)=>update(i,'name',e.target.value)}/><input type="number" value={row.score} onChange={(e)=>update(i,'score',e.target.value)}/><input type="number" value={row.weight} onChange={(e)=>update(i,'weight',e.target.value)}/><button className="icon-button" onClick={()=>setRows(rows.filter((_,idx)=>idx!==i))}>×</button></div>)}</div><button className="secondary-button" onClick={()=>setRows([...rows,{name:`Assessment ${rows.length+1}`,score:0,weight:10}])}>+ Add assessment</button><Result label="Current weighted grade" value={`${fmt(grade,2)}%`} sub={`${fmt(totalWeight,1)} total weight entered`} /></section></div>;
}

export function DateDifferenceCalculator() {
  const today=new Date(); const later=new Date(today); later.setDate(today.getDate()+30); const [start,setStart]=useState(today.toISOString().slice(0,10)); const [end,setEnd]=useState(later.toISOString().slice(0,10));
  const a=new Date(`${start}T00:00:00`), b=new Date(`${end}T00:00:00`); const first=a<b?a:b, second=a<b?b:a; const data=calendarAge(first.toISOString().slice(0,10),second.toISOString().slice(0,10));
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid"><Field label="Start date" type="date" value={start} onChange={setStart}/><Field label="End date" type="date" value={end} onChange={setEnd}/></div>{data&&<div className="result-grid"><Result label="Years" value={data.years}/><Result label="Months" value={data.months}/><Result label="Days" value={data.days}/><Result label="Total days" value={fmt(data.totalDays,0)}/></div>}</section></div>;
}

export function TipCalculator() {
  const [bill,setBill]=useState('5000'); const [tip,setTip]=useState('10'); const [people,setPeople]=useState('2'); const t=num(bill)*num(tip)/100, total=num(bill)+t, per=total/Math.max(1,num(people));
  return <div className="calculator-stack"><section className="calc-block"><div className="form-grid form-grid--3"><Field label="Bill amount" value={bill} onChange={setBill} min="0"/><Field label="Tip (%)" value={tip} onChange={setTip} min="0"/><Field label="People" value={people} onChange={setPeople} min="1" step="1"/></div><div className="result-grid"><Result label="Tip amount" value={fmt(t)}/><Result label="Total bill" value={fmt(total)}/><Result label="Per person" value={fmt(per)}/></div></section></div>;
}

const conversionGroups={
  length:{label:'Length',base:'m',units:{m:['Meters',1],km:['Kilometers',1000],cm:['Centimeters',0.01],mi:['Miles',1609.344],ft:['Feet',0.3048],in:['Inches',0.0254]}},
  weight:{label:'Weight',base:'kg',units:{kg:['Kilograms',1],g:['Grams',0.001],lb:['Pounds',0.45359237],oz:['Ounces',0.028349523125]}},
  area:{label:'Area',base:'sqm',units:{sqm:['Square meters',1],sqkm:['Square kilometers',1e6],sqft:['Square feet',0.09290304],acre:['Acres',4046.8564224],hectare:['Hectares',10000]}},
  temperature:{label:'Temperature',units:{c:['Celsius'],f:['Fahrenheit'],k:['Kelvin']}}
};
function tempConvert(value,from,to){let c=from==='c'?value:from==='f'?(value-32)*5/9:value-273.15;return to==='c'?c:to==='f'?c*9/5+32:c+273.15;}
export function UnitConverter() {
  const [group,setGroup]=useState('length'); const [value,setValue]=useState('1'); const units=conversionGroups[group].units; const keys=Object.keys(units); const [from,setFrom]=useState('m'); const [to,setTo]=useState('km');
  const chooseGroup=(g)=>{setGroup(g);const ks=Object.keys(conversionGroups[g].units);setFrom(ks[0]);setTo(ks[1]||ks[0]);};
  const result=group==='temperature'?tempConvert(num(value),from,to):num(value)*units[from][1]/units[to][1];
  return <div className="calculator-stack"><section className="calc-block"><div className="segmented segmented--wrap">{Object.entries(conversionGroups).map(([k,v])=><button key={k} className={group===k?'active':''} onClick={()=>chooseGroup(k)}>{v.label}</button>)}</div><div className="form-grid form-grid--3"><Field label="Value" value={value} onChange={setValue}/><label className="field"><span>From</span><select value={from} onChange={(e)=>setFrom(e.target.value)}>{keys.map(k=><option value={k} key={k}>{units[k][0]}</option>)}</select></label><label className="field"><span>To</span><select value={to} onChange={(e)=>setTo(e.target.value)}>{keys.map(k=><option value={k} key={k}>{units[k][0]}</option>)}</select></label></div><Result label={`${units[from][0]} → ${units[to][0]}`} value={fmt(result,8)} /></section></div>;
}

export function ScientificCalculator() {
  const [display,setDisplay]=useState('0'); const [memory,setMemory]=useState(null); const [op,setOp]=useState(null); const [fresh,setFresh]=useState(true);
  const value=num(display);
  const input=(d)=>{if(fresh||display==='0'){setDisplay(String(d));setFresh(false);}else setDisplay(display+String(d));};
  const decimal=()=>{if(fresh){setDisplay('0.');setFresh(false);}else if(!display.includes('.'))setDisplay(display+'.');};
  const unary=(fn)=>{const v=fn(value);setDisplay(Number.isFinite(v)?String(Number(v.toPrecision(12))):'Error');setFresh(true);};
  const chooseOp=(next)=>{if(op&&memory!==null&&!fresh){equals(next);return;}setMemory(value);setOp(next);setFresh(true);};
  const equals=(nextOp=null)=>{if(memory===null||!op)return;let out; if(op==='+')out=memory+value;if(op==='−')out=memory-value;if(op==='×')out=memory*value;if(op==='÷')out=value===0?NaN:memory/value;if(op==='^')out=memory**value;setDisplay(Number.isFinite(out)?String(Number(out.toPrecision(12))):'Error');setMemory(out);setOp(nextOp);setFresh(true);};
  const deg=(fn)=>(x)=>fn(x*Math.PI/180);
  const buttons=[['sin',()=>unary(deg(Math.sin))],['cos',()=>unary(deg(Math.cos))],['tan',()=>unary(deg(Math.tan))],['log',()=>unary(Math.log10)],['ln',()=>unary(Math.log)],['√',()=>unary(Math.sqrt)],['x²',()=>unary(x=>x*x)],['π',()=>{setDisplay(String(Math.PI));setFresh(true)}],['7',()=>input(7)],['8',()=>input(8)],['9',()=>input(9)],['÷',()=>chooseOp('÷')],['4',()=>input(4)],['5',()=>input(5)],['6',()=>input(6)],['×',()=>chooseOp('×')],['1',()=>input(1)],['2',()=>input(2)],['3',()=>input(3)],['−',()=>chooseOp('−')],['0',()=>input(0)],['.',decimal],['^',()=>chooseOp('^')],['+',()=>chooseOp('+')]];
  return <div className="calculator-stack"><section className="calc-block scientific"><div className="scientific-display"><small>{memory!==null&&op?`${fmt(memory,8)} ${op}`:'Scientific calculator'}</small><strong>{display}</strong></div><div className="scientific-grid">{buttons.map(([label,action])=><button key={label} onClick={action}>{label}</button>)}<button className="danger" onClick={()=>{setDisplay('0');setMemory(null);setOp(null);setFresh(true)}}>AC</button><button onClick={()=>setDisplay(String(-value))}>±</button><button onClick={()=>unary(x=>x/100)}>%</button><button className="equals" onClick={()=>equals()}>=</button></div></section></div>;
}

export const widgetMap = {
  percentage: PercentageCalculator,
  age: AgeCalculator,
  bmi: BmiCalculator,
  discount: DiscountCalculator,
  loan: LoanCalculator,
  'compound-interest': CompoundInterestCalculator,
  gpa: GpaCalculator,
  grade: GradeCalculator,
  'date-difference': DateDifferenceCalculator,
  tip: TipCalculator,
  'unit-converter': UnitConverter,
  scientific: ScientificCalculator
};
