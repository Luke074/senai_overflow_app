import styled from "styled-components/native";
import colors from "../../styles/colors";

export const Container = styled.TouchableOpacity`
  width: 40%;
  border-radius: 4px;
  border-width: 2px;
  border-color: ${colors.light};
  padding: 10px;
`;

export const Text = styled.Text`
  color: ${colors.light};
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;
