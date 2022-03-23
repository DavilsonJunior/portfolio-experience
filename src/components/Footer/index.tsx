import {
  AiOutlineInstagram,
  AiOutlineGithub,
  AiFillLinkedin
} from 'react-icons/ai';
import { Container } from './styles';

function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiOutlineInstagram
            onClick={() =>
              handleRedirect('https://www.instagram.com/davilson_junior/')
            }
          />
          <AiOutlineGithub
            onClick={() => handleRedirect('https://github.com/DavilsonJunior')}
          />
          <AiFillLinkedin
            onClick={() =>
              handleRedirect(
                'https://www.linkedin.com/in/davilson-paulino-da-cunha-junior-23029315a/'
              )
            }
          />
        </section>
      </div>
    </Container>
  );
}

export default Footer;
