const ENGLISH_PARTS = /([A-Za-z][A-Za-z0-9./+_-]*(?:\s+[A-Za-z][A-Za-z0-9./+_-]*)*)/g

export default function BilingualText({ children }) {
  if (typeof children !== 'string') return children

  const readableText = children
    .replace(/([\p{Script=Arabic}])([A-Za-z0-9])/gu, '$1 $2')
    .replace(/([A-Za-z0-9])([\p{Script=Arabic}])/gu, '$1 $2')

  return readableText.split(ENGLISH_PARTS).map((part, index) =>
    /^[A-Za-z]/.test(part)
      ? <bdi className="english-term" dir="ltr" key={`${part}-${index}`}>{part}</bdi>
      : part
  )
}
