import fs from 'fs/promises';

export default async function Acesso() {

    fs.appendFile('acesso.txt', `${Date.now()} `, 'utf-8');
    const data = await fs.readFile('acesso.txt', 'utf8');

    return <div>{data}</div>

}