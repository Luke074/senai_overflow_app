import styled from "styled-components";
import colors from "../../styles/colors"
import { TextDefault } from "../../styles/stylesGlobal";

export const Label = styled(TextDefault)`
    width: 85%;
    text-align: left;
    font-weight: bold;
    font-style: italic;
    font-size: 20px;
    margin-bottom: 7px;
`;

export const Content = styled.View`
    flex: 1;
    width: 100%;

    align-items: center;
    justify-content: center;

`;

export const TextInputLogin = styled.TextInput`
    width: 90%;
    color: ${colors.light};
    padding: 10px;
    margin-bottom: 15px;

    background-color: ${colors.darkGray};
    font-size: 20px;
    border-radius: 5px;
`;