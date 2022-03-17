import { AiFillHtml5 } from 'react-icons/ai';
import { SiTypescript } from 'react-icons/si';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import Link from 'next/link';
import SectionTitle from '../SectionTitle';
import KnowledgeItem from './KnowledgeItem';
import { Container } from './styles';

function Knowledges() {
  return (
    <Container>
      <SectionTitle
        title="Conhecimento"
        description="Algumas das tecnologias que possuo conhecimento"
      />
      <section>
        <KnowledgeItem title="HTML" icon={<AiFillHtml5 />} />
        <KnowledgeItem title="CSS" icon={<FaCss3Alt />} />
        <KnowledgeItem title="Typescript" icon={<SiTypescript />} />
        <KnowledgeItem title="React" icon={<FaReact />} />
        <KnowledgeItem title="Javascript" icon={<IoLogoJavascript />} />
      </section>
      <section>
        <button type="button">
          <Link href="/github">
            <a>Ver mais sobre</a>
          </Link>
        </button>
      </section>
    </Container>
  );
}

export default Knowledges;
