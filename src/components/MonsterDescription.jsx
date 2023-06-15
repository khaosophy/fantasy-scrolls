import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import GET_MONSTER from '../api/getMonster';
import { capitalize } from '../utils/text-utils';

export default function MonsterDescription() {
  const { monster: index } = useParams();
  const { loading, data } = useQuery(GET_MONSTER, { variables: { index }});

  if(loading) return (<h3>On the hunt for the monster...</h3>);

  if(!data) return false;
  const { monster } = data;
  console.log(monster);

  return (<>
    <h3>{monster.name}</h3>
    {/* todo: monster alignment */}
    <p>{capitalize(monster.size)} {capitalize(monster.type)}</p>

    <dl>
      {/* todo: AC is an array... what are some cases where it has more than one? */}
      <dt>Armor Class</dt>
      <dd>{monster.armor_class[0].value}</dd>

      <dt>Hit Points</dt>
      <dd>{monster.hit_points} ({monster.hit_dice})</dd>

      {/* todo: multiple speeds */}
      <dt>Speed</dt>
      <dd>{monster.speed.walk}</dd>
    </dl>

    <dl>
      {/**
       * todo: modifiers
       * these aren't in the API. I'll have to calculate them myself.
       */}
      <dt>Str</dt>
      <dd>{monster.strength}</dd>

      <dt>Dex</dt>
      <dd>{monster.dexterity}</dd>

      <dt>Con</dt>
      <dd>{monster.constitution}</dd>

      <dt>Int</dt>
      <dd>{monster.intelligence}</dd>

      <dt>Wis</dt>
      <dd>{monster.wisdom}</dd>

      <dt>Cha</dt>
      <dd>{monster.charisma}</dd>
    </dl>
  </>);
}