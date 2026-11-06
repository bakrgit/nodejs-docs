import { useState } from 'react'
import SectionTitle from '../ui/SectionTitle'

export default function ProductionFailureLab({ lab }) {
  const [selected, setSelected] = useState(null)
  const choice = lab.choices.find(item => item.id === selected)
  return <section id="failure-lab" className="failure-lab"><SectionTitle number="06">Production Failure Lab</SectionTitle><div className="failure-shell"><div className="failure-heading"><span>INCIDENT / Q001</span><h3>{lab.title}</h3><p>{lab.summary}</p></div><div className="evidence-grid">{lab.evidence.map(item=><div className={item.tone} key={item.label}><small>{item.label}</small><b dir="ltr">{item.value}</b></div>)}</div><div className="diagnosis"><h4>هتبدأ بأي قرار؟</h4><div>{lab.choices.map(item=><button className={selected===item.id?'selected':''} onClick={()=>setSelected(item.id)} key={item.id}>{item.label}</button>)}</div>{choice&&<aside className={choice.correct?'correct':'incorrect'}><b>{choice.correct?'تشخيص صحيح':'راجع الدليل مرة تانية'}</b><p>{choice.feedback}</p></aside>}</div>{choice?.correct&&<div className="prevention"><h4>منع تكرار المشكلة</h4><ul>{lab.prevention.map(item=><li key={item}>{item}</li>)}</ul></div>}</div></section>
}
