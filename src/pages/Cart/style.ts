import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  justify-items: center;
  max-width: 80rem;
  margin: 2.5rem auto;
`;
export const BoxTitle = styled.h2`
  color: ${(props) => props.theme["base-subtitle"]};
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 0.9375rem;
`;

export const FormContainer = styled.div`
  width: 100%;
  padding: 2.5rem;
  background: ${(props) => props.theme["base-card"]};
`;
export const ContainerTextAndIcon = styled.div`
  display: grid;
  grid-template-columns: 30px 333px;
  margin-bottom: 2rem;
  div {
    font-weight: 400;
    font-size: 1rem;
    color: ${(props) => props.theme["base-subtitle"]};
    display: flex;
    flex-direction: column;
  }
  p {
    font-weight: 400;
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-text"]};
  }
  svg {
    color: ${(props) => props.theme["yellow-dark"]};
    font-size: 1.375rem;
    margin-right: 0.5rem;
  }
`;
export const InputContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto;
  gap: 1rem;
  grid-template-areas:
    "cep cep cep cep"
    "rua rua rua rua"
    "numero complemento complemento complemento"
    "bairro cidade cidade uf";
`;
const inputGridPosition = {
  cepInput: "cep",
  ruaInput: "rua",
  numeroInput: "numero",
  complementoInput: "complemento",
  bairroInput: "bairro",
  cidadeInput: "cidade",
  ufInput: "uf",
};
interface inputGridPositionProps {
  $gridInput: keyof typeof inputGridPosition;
}
export const BaseInput = styled.input`
  background: ${(props) => props.theme["base-input"]};
  height: 2.6rem;
  border: 1px solid ${(props) => props.theme["base-button"]};
  font-size: 0.875rem;
  border-radius: 4px;
  line-height: 1.3rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme["base-text"]};
  &:focus {
    border-color: ${(props) => props.theme["yellow-dark"]};
    box-shadow: none;
  }
  &::placeholder {
    color: ${(props) => props.theme["base-label"]};
  }
`;
export const InputText = styled(BaseInput)<inputGridPositionProps>`
  grid-area: ${(props) => props.$gridInput};
`;
export const OrderSummary = styled.div``;
