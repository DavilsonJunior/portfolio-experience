import * as prismic from '@prismicio/client';

export function getPrismicClient(config = {}) {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT!, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
    ...config
  });

  return client;
}
