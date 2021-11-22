import React, { useState, useEffect } from "react";
import "./Editor.css";
import Editors from "./Editors";
import { initialHTML, initialCSS, initialJS } from "./InitialCode";

const EditorContainer = () => {
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

  const codeEditorDB = [
    {
      displayname: "HTML",
      lang: "html",
      value: `${htmlValue}`,
      setValue: `${setHtml}`,
    },
    {
      displayname: "CSS",
      lang: "css",
      value: `${cssValue}`,
      setValue: `${setCSS}`,
    },
    {
      displayname: "JavaScript",
      lang: "javascript",
      value: `${jsValue}`,
      setValue: `${setJs}`,
    },
  ];

  return (
    <div>
      <div
        style={{
          color: "white",
          width: "100%",
          height: "30px",
          fontSize: "2rem",
          margin: "2rem",
        }}
      >
        Code Command Editor
      </div>
      <center>
        <div className="pane top-pane">
          <table>
            <tbody>
              <tr>
                {codeEditorDB.map((x) => (
                  <Editors
                    displayName={x.displayname}
                    lang={x.lang}
                    value={x.value}
                    setValue={x.setValue}
                  ></Editors>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </center>
    </div>
  );
};

export default EditorContainer;
