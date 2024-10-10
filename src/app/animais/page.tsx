import Image from 'next/image';
import styles from './animais.module.css';

type Animal = {
  id: number;
  nome: string;
  descricao: string;
  imagem: string;
};

export default async function AnimaisPage() {
  const response = await fetch('https://api.origamid.online/animais', {
    cache: 'no-store',
  });

  const animais = (await response.json()) as Animal[];

  return (
    <main>
      <h1>Animais</h1>
      <Image
        src="/images/horse.jpg"
        alt="Cavalo"
        height={1600}
        width={2400}
        sizes="(max-width: 600px) 100vw, 50vw"
        priority
      />

      <ul className={styles.animais}>
        {animais.map((animal, i) => (
          <li key={animal.id}>
            <h2>{animal.nome}</h2>
            <Image
              src={animal.imagem}
              alt={animal.descricao}
              height={1600}
              width={2400}
              sizes="(max-width: 600px) 100vw, 50vw"
              priority={i < 2}
            />
          </li>
        ))}
      </ul>
    </main>
  );
}
