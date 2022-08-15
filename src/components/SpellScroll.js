import { useQuery, gql } from '@apollo/client';

export default function SpellScroll() {
  const { data, loading, error } = useQuery(GET_SPELLS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  const { spells } = data;
  return (
    <div>
      <h1>Generate a Random Spell Scroll</h1>
      <ul>
        {spells.map(spell => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul>
    </div>
  );
}

const GET_SPELLS = gql`
  query GetSpells {
    spells {
      index
      name
      school {
        name
      }
      level
      classes {
        name
      }
    }
  }

`;