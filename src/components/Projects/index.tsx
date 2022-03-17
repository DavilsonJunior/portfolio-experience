import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import ProjectItem from './ProjectItem';
import { Container } from './styles';

function Projects() {
  return (
    <Container>
      <SectionTitle title="Ultimos Projetos" /> {/* #06 */}
      <section>
        <ProjectItem
          img="https://user-images.githubusercontent.com/35976070/95802681-893cdf00-0cd4-11eb-9e64-7415607a7a88.png"
          title="Event"
          type="Projeto para agendamento de eventos"
          slug="teste"
        />

        <ProjectItem
          img="https://user-images.githubusercontent.com/35976070/158717254-89bf99bd-ff25-4c0c-8c65-b68900233a5f.png"
          title="GetBook"
          type="Faz busca de livros no banco de dados de uma bibliotecas"
          slug="teste"
        />

        <ProjectItem
          img="https://user-images.githubusercontent.com/35976070/85335359-44860180-b4b3-11ea-9a45-bd63df9f0204.jpg"
          title="Rocketshoes"
          type="Projeto desenvolvido no curso da Rocketseat"
          slug="teste"
        />
      </section>
      <button type="button">
        <Link href="/projetos">
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}

export default Projects;
