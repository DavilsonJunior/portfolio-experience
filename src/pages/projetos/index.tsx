import Head from 'next/head';
import Header from '../../components/Header';

import ProjetoItem from '../../components/ProjectItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projetos: IProjeto[];
}

export default function Projetos({ projetos }: ProjetoProps) {
  return (
    <ProjetosContainer>
      <Head>
        <title>Projetos | Meu portfólio</title>
        <meta
          name="description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
        <meta property="og:image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
        <meta name="twitter:image" content="/ogimage.png" />
        <meta name="twitter:image:src" content="/ogimage.png" />
        <meta
          property="og:description"
          content="Sou um desenvolvedor Front-end e aqui apresento alguns projetos desenvolvidos por mim!"
        />
      </Head>

      <Header />
      <main className="container">
        {/* projetos.map(projeto => (
          <ProjetoItem
            key={projeto.slug}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
            imgUrl={projeto.thumbnail}
          />
        )) */}
        <ProjetoItem
          title="Event"
          type="Projeto para agendamento de eventos"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/35976070/95802681-893cdf00-0cd4-11eb-9e64-7415607a7a88.png"
        />
        <ProjetoItem
          title="GetBook"
          type="Faz busca de livros no banco de dados de uma bibliotecas"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/35976070/158717254-89bf99bd-ff25-4c0c-8c65-b68900233a5f.png"
        />

        <ProjetoItem
          title="Rocketshoes"
          type="Projeto desenvolvido no curso da Rocketseat"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/35976070/85335359-44860180-b4b3-11ea-9a45-bd63df9f0204.jpg"
        />

        <ProjetoItem
          title="Event"
          type="Projeto para agendamento de eventos"
          slug="teste"
          imgUrl="https://user-images.githubusercontent.com/35976070/95802681-893cdf00-0cd4-11eb-9e64-7415607a7a88.png"
        />
      </main>
    </ProjetosContainer>
  );
}
