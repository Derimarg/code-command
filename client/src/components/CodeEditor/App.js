import React, { useState, useEffect, useContext } from "react";
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
import { MouseContext } from "../../context/mouse-context";

function App() {
  const { cursorChangeHandler } = useContext(MouseContext);
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
    <EditorContainer
      onMouseEnter={() => cursorChangeHandler("hovered")}
      onMouseLeave={() => cursorChangeHandler("")}
    >
      <Navbar />
      <EditorTopPanel>
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
