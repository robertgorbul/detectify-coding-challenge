import Head from 'next/head';

import { NotesEditor } from '~components/NotesEditor';

const IndexPage: React.FC = () => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="initial-scale=1.0, width=device-width, shrink-to-fit=no"
      />
      <link rel="shortcut icon" href="/favicon.png" />
      <title>Notes App</title>
      <meta name="description" content="Web-based note taking app" />
    </Head>
    <main className="flex justify-center items-start w-full min-h-screen">
      <NotesEditor />
    </main>
  </>
);

export default IndexPage;
