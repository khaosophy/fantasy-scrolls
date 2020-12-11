import { useState, useEffect } from 'react';
import Layout from './Layout';
import Loading from './Loading';
import Table from './Table';

export default function SpellTable() {
  const [spells, setSpells] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/spells')
    // fetch('https://api.open5e.com/spells')
      .then(result => result.json())
      .then(data => {
        setSpells(data.results);
        setIsLoaded(true);
      })
  }, []);

  if(!isLoaded) {
    return <Loading />
  }

  return (
    <Layout>
      <h1>D&D 5e Spells</h1>
      <ul>
        {spells.map(spell => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
      {/* <Table columns={columns} data={data} /> */}
    </Layout>
  )
}