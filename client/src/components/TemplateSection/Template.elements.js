import styled from "styled-components";

export const TemplateContainer = styled.div`
    padding: 160px 0;
    background: ${({lightBg})=>(lightBg ? "#fff" : "202A45")}
`;

export const Container = styled.div`
    height: 700,
    clear: "both",
    paddingTop: 20,
    textAlign: "center",
    max-width: 1200px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;

    h2 {
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        margin: 2rem;
        line-height: 1.25;
        text-align: Center;
        font-weight: bold;
    }
    h3 {
        font-family: "Rubik", sans-serif;
        font-weight: 500;
        margin: 5px 0px -15px 20px;
        line-height: 1.25;
        border-bottom: solid;
        width: fit-content;
    }

    p {
        font-size: 16px;
        line-height: 1.5;
        margin: 20px 0;
    }
`;

