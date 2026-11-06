const glyphs = { search: '⌕', book: '♧', play: '▷', sun: '☼', menu: '☰', close: '×', check: '✓', copy: '□' }
export default function Icon({ name }) { return <span className="ico" aria-hidden="true">{glyphs[name]}</span> }
