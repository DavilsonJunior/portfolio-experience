import { Container, TextContainer, InfosContainer, CodeItem } from './styles';

import pictureUser from '../../assets/profile.jpg';

function HomeHero() {
  return (
    <Container>
      <img src={pictureUser} alt="Foto do usuario" />
      <div>
        <TextContainer>
          <h1>Olá</h1>
          <h2>Me chamo</h2>
          <h2>
            <span>Davilson Jr</span>
          </h2>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className="comment">//Minha apresentação</span>
            <br />
            <span className="purple">Infos</span> {'\u007B'} {/* unicode */}
            <div>
              Nome: <span className="blue">Davilson,</span>
            </div>
            <div>
              Sobrenome: <span className="blue">Paulino da Cunha Junior</span>
            </div>
            {'\u007D'}
          </CodeItem>

          <CodeItem>
            <span className="purple">Cargo</span> {'\u007B'} {/* unicode */}
            <div>
              Função: <span className="blue">Desenvolvedor Front-end</span>
            </div>
            {'\u007D'}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}

export default HomeHero;
