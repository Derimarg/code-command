import styled from "styled-components";
import { Link } from "react-router-dom";
import ColumnResizer from "react-column-resizer";

export const EditorContainer = styled.div`
  background-color: #202020;
  overflow: hidden;
`;

export const EditorNav = styled.div`
  width: 100%;
  height: 30px;
  background-color: #1e1e1e;
  justify-content: start !important;
  font-size: 2rem;
  margin: 2rem;
`;

export const LogoLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  color: #fff;
`;

export const EditorTopPanel = styled.div`
  height: 50vh;
  display: flex;
  background-color: black;
`;

export const EditorWrapper = styled.div`
  width: 33vw;
`;

export const EditorHeading = styled.div`
  background-color: #272727;
  color: white;
  padding: 0.3em;
`;

export const EditorColumnResizer = styled(ColumnResizer)`
  background-color: #272727;
  margin-top: 5vw;
  width: 2vw;
  min-width: 0;
`;

export const EditorOutputScreen = styled.div`
  width: 100vw;
  height: 50vh;
  border: 0px;
  background-color: #20202000;
  margin-left: 0px !important;
  margin-right: 0px !important;
  display: flex;
`;

export const EditorIframe = styled.iframe`
  border-top: 5px solid black;
  width: 100%;
  height: 100%;
`;
