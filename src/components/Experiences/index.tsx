import SectionTitle from '../SectionTitle';
import ExperienceItem from './ItemContainer';

import { Container, CurriculumCard } from './styles';

function Experiences() {
  return (
    <Container>
      <SectionTitle title="Experiência" description="Profissional" />
      <section>
        <ExperienceItem
          title="Desenvolvedor Full-Stack"
          subtitle="Projeto Pessoal"
          description="Março de 2021 até o momento"
        />
        <ExperienceItem
          title="Desenvolvedor Front-end"
          subtitle="Café e Pixel"
          description="Março de 2021 a Novembro de 2021"
        />
        <ExperienceItem
          title="Desenvolvedor Front-end"
          subtitle="DiagoNow"
          description="Janeiro de 2021 a abril de 2021"
        />
        <ExperienceItem
          title="Estágio em Desenvolvimento Web"
          subtitle="Speedsoft - Soluções educacionais"
          description="Março de 2020 a Dezembro de 2020"
        />
      </section>
      <CurriculumCard>
        <div>
          <span className="badge">CV</span>

          <h1>Meu Currículo</h1>
          <p>Baixe meu currículo completo em PDF e conheça mais sobre minha trajetória.</p>

          <a href="/curriculo.pdf" download>
            📄 Baixar Currículo
          </a>
        </div>
      </CurriculumCard>
    </Container>
  );
}

export default Experiences;
