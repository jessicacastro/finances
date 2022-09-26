import { ContentContainer, HeaderContainer } from './styles';
import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  onOpenNewTransactionModal: () => void;
}

export const Header = ({ onOpenNewTransactionModal }: HeaderProps) => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={logoImg} alt="finances" />
        <button onClick={onOpenNewTransactionModal} type="button">Nova transação</button>
      </ContentContainer>
    </HeaderContainer>
  );
}

