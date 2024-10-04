import Acesso from '@/components/acesso';
import ClientFetch from '@/components/client-fetch';
import ServerFetch from '@/components/server-fetch';

export default function HomePage() {
  return (
    <main>
      <h1>Home</h1>
      {/* <Acesso /> */}

      <div className="flex">
        <div>
          <h2>Server fetch</h2>
          <ServerFetch />
        </div>
        <div>
          <h2>Client fetch</h2>
          <ClientFetch />
        </div>
      </div>
    </main>
  );
}
