import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import GET_SPELL from '../api/getSpell';
import SpellCard from '../components/SpellCard'; 

export default function SpellDescription() {
  const { spell: index } = useParams();
  const { loading, data } = useQuery(GET_SPELL, { variables: { index }});

  if (loading) return <h3>Peering through the weave...</h3>

  if (!data) return false;
  const { spell } = data;

  return (
    <SpellCard 
        name={spell.name}
        description={spell.desc}
        level={spell.level}
        lists={spell.classes}
        school={spell.school.name}
      />
  );
}