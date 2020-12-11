import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from './Layout';

export default function SpellDescription() {
  const { key } = useParams();
  const [spell, setSpell] = useState({});

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/spells/${key}`)
      .then(result => result.json())
      .then(data => setSpell(data))
  }, [key]);

  return (
    <Layout>
      <h1>Spell Description</h1>
      <p>Spell Name: {spell.name}</p>
    </Layout>
  )
}