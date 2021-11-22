import React, { useState, useEffect } from "react";
import Editors from "./Editors";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./index.css";
import Navbar from "../Navbar/Navbar";

function App() {
  const [html, setHtml] = useLocalStorage("html", " ");
  const [css, setCss] = useLocalStorage("css", " ");
  const [js, setJs] = useLocalStorage("js", "");
  const [code, setCode] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(`
        <html>
          <body>${html}</body>
          <style>${css}</style>
          <script>${js}</script>
        </html>
      `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <>
      <Navbar />
      <div className="pane top-pane">
        <Editors
          language="xml"
          displayName="HTML"
          value={html}
          onChange={setHtml}
        />
        <Editors
          language="css"
          displayName="CSS"
          value={css}
          onChange={setCss}
        />
        <Editors
          language="javascript"
          displayName="JS"
          value={js}
          onChange={setJs}
        />
      </div>
      <div className="pane">
        <iframe
          srcDoc={code}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
          width="100%"
          height="100%"
        />
      </div>
    </>
  );
}

export default App;
