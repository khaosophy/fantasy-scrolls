import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import GET_SPELL from '../api/getSpell';
import SpellCard from './SpellCard'; 

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
        concentration={spell.concentration}
        ritual={spell.ritual}
        components={spell.components}
        material={spell.material}
        castingTime={spell.casting_time}
        duration={spell.duration}
        range={spell.range}
        damageType={spell.damage?.damage_type.name}
        saveType={spell.dc?.type.full_name}
        higherLevel={spell.higher_level}
      />
  );
}