import { useState } from 'react';

function Home() {
  console.log('');
  console.log('Made with 💜 by:');
  console.log('Guilherme Bafica 🤘');
  console.log('');

  return (
    <div>
      <h1>Home</h1>

      <Contador />
    </div>
  );
}

function Contador() {
  const [contador, setContador] = useState(1);

  function adicionarContador() {
    setContador(contador + 1);
  }

  return (
    <div>
      <div>{contador}</div>

      <button onClick={adicionarContador}>Adicionar</button>
    </div>
  );
}

export default Home;
