export default function TechnicalTerm({ children, violet = false }) { return <bdi className={`term ${violet ? 'violet' : ''}`} dir="ltr">{children}</bdi> }
