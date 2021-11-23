import React, { useState, useEffect } from "react";
import Editors from "./Editors";
import useLocalStorage from "../../hooks/useLocalStorage";
import "./index.css";
import Navbar from "../Navbar/Navbar";
import {
  EditorContainer,
  EditorTopPanel,
  EditorPanel,
  EditorIframe,
} from "./Editor.Elements";

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
    <EditorContainer>
      <Navbar />
      <EditorTopPanel>
        <Editors
          language="html"
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
      </EditorTopPanel>
      <EditorPanel>
        <EditorIframe
          srcDoc={code}
          title="output"
          sandbox="allow-scripts"
          frameBorder="0"
        />
      </EditorPanel>
    </EditorContainer>
  );
}

export default App;
