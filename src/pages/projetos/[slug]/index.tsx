import Prismic from '@prismicio/client';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BannerProjeto from '../../../components/BannerProject';
import Header from '../../../components/Header';
// import { getPrismicClient } from '../../../services/prismic';
import { ProjetoContainer } from '../../../styles/ProjetoStyles';
import LoadingScreen from '../../../components/LoadingScreen';
// import LoadingScreen from '../../../components/LoadingScreen';

interface IProjeto {
  slug: string;
  title: string;
  type: string;
  description: string;
  link: string;
  thumbnail: string;
}

interface ProjetoProps {
  projeto: IProjeto;
}

export default function Projeto({ projeto }: ProjetoProps) {
  // const router = useRouter();
  // if (router.isFallback) {
  //   return <LoadingScreen />;
  // }

  return (
    <ProjetoContainer>
      {/* <Head>
        <title> {projeto.title} Projeto | Meu portfólio</title>
        <meta name="description" content={projeto.description} />
        <meta property="og:image" content={projeto.thumbnail} />
        <meta property="og:image:secure_url" content={projeto.thumbnail} />
        <meta name="twitter:image" content={projeto.thumbnail} />
        <meta name="twitter:image:src" content={projeto.thumbnail} />
        <meta property="og:description" content={projeto.description} /> 
  </Head> */}

      <Header />
      {/* <BannerProjeto
        title={projeto.title}
        type={projeto.type}
        imgUrl={projeto.thumbnail}
      /> */}

      <BannerProjeto
        title="Event"
        type="Projeto para agendamento de eventos"
        imgUrl="https://user-images.githubusercontent.com/35976070/95802681-893cdf00-0cd4-11eb-9e64-7415607a7a88.png"
      />

      <main>
        <p>
          {/* projeto.description */}
          Lorem Ipsum é simplesmente uma simulação de texto da indústria
          tipográfica e de impressos, e vem sendo utilizado desde o século XVI,
          quando um impressor desconhecido pegou uma bandeja de tipos e os
          embaralhou para fazer um livro de modelos de tipos
        </p>
        <button type="button">
          <a href="https://github.com/DavilsonJunior/event-frontend">
            Ver projeto online
          </a>
        </button>
      </main>
    </ProjetoContainer>
  );
}
