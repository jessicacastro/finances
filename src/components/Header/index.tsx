import { ContentContainer, HeaderContainer } from './styles';
import logoImg from '../../assets/logo.svg';

export const Header = () => {
  return (
    <HeaderContainer>
      <ContentContainer>
        <img src={logoImg} alt="finances" />
        <button type="button">Nova transação</button>
      </ContentContainer>
    </HeaderContainer>
  );
}
