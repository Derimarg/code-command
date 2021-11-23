import styled from "styled-components";
import { Controlled as ControlledEditor } from "react-codemirror2";

export const EditorContainer = styled.div`
  background-color: #202020;
  overflow: hidden;
  margin: 0;
`;

export const EditorTitle = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: hsl(225, 6%, 13%);
  color: white;
  padding: 0.5rem 0.5rem 0.5rem 1rem;
  border-top-right-radius: 0.5rem;
  border-top-left-radius: 0.5rem;
`;

export const EditorCollapseButton = styled.button`
  margin-left: 0.5rem;
  background: none;
  border: none;
  color: white;
  cursor: pointer;
`;

export const EditorTopPanel = styled.div`
  height: 50vh;
  display: flex;
  background-color: black;
`;

export const EditorPanel = styled.div`
  height: 50vh;
  display: flex;
`;

export const EditorControlled = styled(ControlledEditor)`
  flex-grow: 1;
  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  overflow: hidden;
`;

export const EditorIframe = styled.iframe`
  border-top: 5px solid black;
  width: 100%;
  height: 100%;
`;
