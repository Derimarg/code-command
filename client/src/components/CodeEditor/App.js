import React, { useState, useEffect } from "react";
import { initialHTML, initialCSS, initialJS } from "./InitialCode";
import Editors from "./Editors";
import {
  EditorContainer,
  EditorNav,
  LogoLink,
  EditorTopPanel,
  EditorColumnResizer,
  EditorOutputScreen,
  EditorIframe,
} from "./Editor.Elements";

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
    <EditorContainer>
      <EditorNav>
        <LogoLink to="/">Code Command Editor</LogoLink>
      </EditorNav>
      <center>
        <EditorTopPanel>
          <table>
            <tbody>
              <tr>
                <Editors
                  displayName="HTML"
                  lang="html"
                  value={htmlValue}
                  setValue={setHtml}
                />

                <EditorColumnResizer className="columnResizer" />

                <Editors
                  displayName="CSS"
                  lang="css"
                  value={cssValue}
                  setValue={setCSS}
                />

                <EditorColumnResizer className="columnResizer" />

                <Editors
                  displayName="Javascript"
                  lang="javascript"
                  value={jsValue}
                  setValue={setJs}
                />
              </tr>
            </tbody>
          </table>
        </EditorTopPanel>

        <EditorOutputScreen>
          <EditorIframe
            srcDoc={Code}
            title="output"
            frameBorder="0"
            sandbox="allow-scripts"
            loading="lazy"
          ></EditorIframe>
        </EditorOutputScreen>
      </center>
    </EditorContainer>
  );
}
