import { useState } from "react";
import { Highlight, themes } from "prism-react-renderer";
import Icon from "../ui/Icon";
import SectionTitle from "../ui/SectionTitle";

export default function CodeExample({ code }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1200);
  };

  return (
    <section id="code-example">
      <SectionTitle number="04">مثال عملي</SectionTitle>
      <div className="code">
        <header>
          <span>● &nbsp; server.mjs</span>
          <button onClick={copy}>
            <Icon name="copy" />
            {copied ? "اتنسخ" : "نسخ الكود"}
          </button>
        </header>
        <Highlight
          theme={themes.vsDark}
          code={code.trim()}
          language="javascript"
        >
          {({ className, style, tokens, getLineProps, getTokenProps }) => (
            <pre className={className} style={style}>
              {tokens.map((line, lineIndex) => (
                <div
                  className="code-line"
                  key={lineIndex}
                  {...getLineProps({ line })}
                >
                  <span className="line-number">
                    {String(lineIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="line-content">
                    {line.map((token, tokenIndex) => (
                      <span key={tokenIndex} {...getTokenProps({ token })} />
                    ))}
                  </span>
                </div>
              ))}
            </pre>
          )}
        </Highlight>
        <footer>
          شغّل المثال باستخدام <code dir="ltr">node server.mjs</code> ثم افتح{" "}
          <code dir="ltr">localhost:3000</code>.
        </footer>
      </div>
    </section>
  );
}
