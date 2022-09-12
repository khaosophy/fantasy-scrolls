import { useParams } from 'react-router-dom';

export default function SpellDescription(props) {
  const { spell: spellKey } = useParams();
  console.log(spellKey);
  /* TODO: query data based on spellKey */
  return (<>
    <h1>Hello World</h1>
    {/* <SpellCard 
        name={spell.name}
        description={spell.desc}
        level={spell.level}
        lists={spell.classes}
        school={spell.school.name}
      /> */}
  </>);
}