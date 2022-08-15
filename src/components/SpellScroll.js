import { useQuery, gql } from '@apollo/client';
import SelectField from './SelectField';

export default function SpellScroll() {
  const { data: spellsData, loading: spellsLoading, error: spellsError } = useQuery(GET_SPELLS);
  const { data: classesData, loading: classesLoading, error: classesError } = useQuery(GET_CLASSES);

  if (spellsLoading || classesLoading) return <p>Loading...</p>;
  if (spellsError || classesError) return <p>Error</p>;

  const { spells } = spellsData;
  const { classes } = classesData;

  const handleScrollGenerator = (e) => {
    e.preventDefault();
    console.log('selecting a spell...');
  }
  
  return (
    <div>
      <h1>Generate a Random Spell Scroll</h1>

      <form onSubmit={(e) => handleScrollGenerator(e)}>
        <div className="row mb-2">
          <div className="col-6">
            <SelectField
              id="scrollClassSelect"
              label="Select a Class"
              options={[
                {value: 'any', label: 'Any Class'},
                ...classes,
              ]}
            />
          </div>
          <div className="col-6">
            <SelectField
              id="scrollLevelSelect"
              label="Select a Spell Level"
              options={[
                {value: 'any', label: 'Any Spell Level'},
                {value: 0, label: 'Cantrip'},
                ...Array.from({length: 9}, (_, i) => ({ value: i + 1, label: `${i + 1}` }))
              ]}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Generate</button>
      </form>

      {/* <ul>
        {spells.map(spell => (
          <li key={spell.index}>{spell.name}</li>
        ))}
      </ul> */}
    </div>
  );
}

const GET_CLASSES = gql`
  query Classes {
    classes {
      value: index
      label: name
    }
  }
`

const GET_SPELLS = gql`
  query Spells {
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