import Head from 'next/head';
import { GetStaticProps } from 'next';
import * as prismic from '@prismicio/client';

import Header from '../../components/Header';

import ProjetoItem from '../../components/ProjectItem';
import { ProjetosContainer } from '../../styles/ProjetosStyles';
import { getPrismicClient } from '../../services/prismic';

interface IProject {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjectProps {
  projects: IProject[];
}

export default function Projetos({ projects }: ProjectProps) {
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
      <main className="container" data-aos="fade-up">
        {projects.map(project => (
          <ProjetoItem
            key={project.slug}
            title={project.title}
            type={project.type}
            slug={project.slug}
            imgUrl={project.thumbnail}
          />
        ))}
      </main>
    </ProjetosContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const client = getPrismicClient();

 const projectResponse = await client.get({
  predicates: [
    prismic.predicate.at('document.type', 'portfolio-davilsonjunior'),
  ],
});

  const data = await client.get();

console.log('projectResponse:', projectResponse);

  const projects = projectResponse.results.map(project => ({
    slug: project.uid,
    title: project.data.title,
    type: project.data.type,
    description: project.data.description,
    link: project.data.link.url,
    thumbnail: project.data.thumbnail.url
  }));

  return {
    props: {
      projects
    },
    revalidate: 86400
  };
};
