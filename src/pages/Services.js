import ArrowLink from '../components/ArrowLink';

const serviceItems = [
  { number: '01', title: 'Product engineering', text: 'From first prototype to resilient production systems, we build software that is ready for real users.' },
  { number: '02', title: 'Web experiences', text: 'Fast, expressive websites and platforms that make complicated products feel remarkably simple.' },
  { number: '03', title: 'Technical direction', text: 'A clear path through architecture, tooling, and delivery when your team needs an experienced second brain.' },
];

export default function Services() {
  return <main className="inner-page section-pad"><div className="page-intro compact"><div className="eyebrow"><span className="signal-dot" /> Capabilities</div><h1>Built for the<br /><em>next move.</em></h1></div><div className="service-list">{serviceItems.map((item) => <article className="service-item" key={item.number}><span className="item-number">{item.number}</span><h2>{item.title}</h2><p>{item.text}</p><span className="item-arrow">↗</span></article>)}</div><div className="service-footer"><p>Have something in mind? Even if it is still a little fuzzy, we would like to hear about it.</p><ArrowLink /></div></main>;
}
