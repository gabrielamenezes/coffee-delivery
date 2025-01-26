import { MapPinLine } from "@phosphor-icons/react";
import {
  BoxTitle,
  CartContainer,
  ContainerTextAndIcon,
  FormContainer,
  InputContainer,
  InputText,
  OrderSummary,
} from "./style";

export const Cart = () => {
  return (
    <CartContainer>
      <div className="firstColumn">
        <BoxTitle>Complete seu pedido</BoxTitle>
        <FormContainer>
          <ContainerTextAndIcon>
            <MapPinLine />
            <div>
              <span>Endereço de Entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </ContainerTextAndIcon>

          <InputContainer>
            <InputText placeholder="CEP" $gridInput="cep"></InputText>
            <InputText placeholder="Rua" $gridInput="rua"></InputText>
            <InputText placeholder="Número" $gridInput="numero"></InputText>
            <InputText
              placeholder="Complemento"
              $gridInput="complemento"
            ></InputText>
            <InputText placeholder="Bairro" $gridInput="bairro"></InputText>
            <InputText placeholder="Cidade" $gridInput="cidade"></InputText>
            <InputText placeholder="UF" $gridInput="uf"></InputText>
          </InputContainer>
        </FormContainer>
      </div>
      <div className="secondColumn">
        <OrderSummary>
          <BoxTitle>Cafés selecionados</BoxTitle>
        </OrderSummary>
      </div>
    </CartContainer>
  );
};
