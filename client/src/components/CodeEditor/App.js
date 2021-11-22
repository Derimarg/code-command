import React, { useState, useEffect } from "react";
import { initialHTML, initialCSS, initialJS } from "./InitialCode";
import ColumnResizer from "react-column-resizer";
import "./Editor.css";
import Editors from "./Editors";

export function App() {
  const [htmlValue, setHtml] = useState(initialHTML);
  const [cssValue, setCSS] = useState(initialCSS);
  const [jsValue, setJs] = useState(initialJS);
  const [Code, setCode] = useState(`
<html>
<body>${htmlValue}</body>
<style>${cssValue}</style>
<script>${jsValue}</script>
</html>`);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setCode(`
      <html>
      <body>${htmlValue}</body>
      <style>${cssValue}</style>
      <script>${jsValue}</script>
      </html>`);
    }, 250);
    return () => clearTimeout(timeout);
  }, [htmlValue, cssValue, jsValue]);

  return (
    <div className="container">
      <div
        style={{
          color: "white",
          width: "100%",
          height: "30px",
          fontSize: "2rem",
          margin: "2rem",
        }}
      >
        <a className="link" href="/">
          Code Command Editor
        </a>
      </div>
      <center>
        <div className="pane top-pane">
          <table>
            <tbody>
              <tr>
                <Editors
                  displayName="HTML"
                  lang="html"
                  value={htmlValue}
                  setValue={setHtml}
                />

                <ColumnResizer className="columnResizer resizer" minWidth={0} />

                <Editors
                  displayName="CSS"
                  lang="css"
                  value={cssValue}
                  setValue={setCSS}
                />

                <ColumnResizer className="columnResizer resizer" minWidth={0} />

                <Editors
                  displayName="Javascript"
                  lang="javascript"
                  value={jsValue}
                  setValue={setJs}
                />
              </tr>
            </tbody>
          </table>
        </div>

        <div className="outputScreen">
          <iframe
            srcDoc={Code}
            title="output"
            width="100%"
            height="100%"
            frameBorder="0"
            sandbox="allow-scripts"
            loading="lazy"
          ></iframe>
        </div>
      </center>
    </div>
  );
}
