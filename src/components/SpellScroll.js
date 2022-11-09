import { useState } from 'react';
import { useQuery, useLazyQuery } from '@apollo/client';
import { Helmet } from 'react-helmet';
import GET_CLASSES from '../api/getClasses';
import GET_SPELLS from '../api/getSpells';
import SelectField from './SelectField';
import SpellBrief from './SpellBrief';

export default function SpellScroll() {
  const [isGenerated, setIsGenerated] = useState(false);

  const [getSpells, { loading: spellsLoading, error: spellsError, data: spellData }] = useLazyQuery(GET_SPELLS);

  const handleScrollGeneration = (e, spellLevel, role = null) => {
    e.preventDefault();
    setIsGenerated(true);
    getSpells({ variables: {
      class: role,
      level: parseInt(spellLevel),
    } });
  }

  const handleReset = () => {
    setIsGenerated(false);
  }
  
  return (<>
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Random Spell Scroll</title>
        <meta name="description" content="Need to pick a random spell from the D&D 5e spell list? This tool will let you do just that! Very useful for things like generating a spell scroll." />
      </Helmet>
      <h1>Generate a Random Spell Scroll</h1>
    </div>

    <SpellForm
      handleSubmit={handleScrollGeneration}
      handleReset={handleReset}
    />

    {isGenerated && (
      <RandomSpell data={spellData} loading={spellsLoading} error={spellsError} />
    )}
  </>);
}

const SpellForm = ({ handleSubmit, handleReset }) => {
  const [spellLevel, setSpellLevel] = useState(null);
  const [role, setRole] = useState(null);

  const { data: classesData, loading: classesLoading, error: classesError } = useQuery(GET_CLASSES);
  if (classesLoading) return <p>Loading...</p>;
  if (classesError) return <p>Error</p>;
  const { classes } = classesData;

  return (
    <form onSubmit={(e) => handleSubmit(e, spellLevel, role)}>
        <div className="row mb-2">
          <div className="mb-2 mb-sm-0 col-sm-6">
            <SelectField
              id="scrollClassSelect"
              label="Select a Class"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              options={[
                {value: 'any', label: 'Any Class'},
                ...classes,
              ]}
            />
          </div>
          <div className="col-sm-6">
            <SelectField
              id="scrollLevelSelect"
              label="Select a Spell Level"
              value={spellLevel}
              onChange={(e) => setSpellLevel(e.target.value)}
              options={[
                {value: 'any', label: 'Any Spell Level'},
                {value: 0, label: 'Cantrip'},
                ...Array.from({length: 9}, (_, i) => ({ value: i + 1, label: `${i + 1}` }))
              ]}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Generate</button>
        <button 
          type="reset"
          className="btn btn-outline-secondary ms-1"
          onClick={() => {
            setRole(null);
            setSpellLevel(null);
            handleReset();
          }}
        >
          Clear
        </button>
      </form>
  )
}

const RandomSpell = ({data, loading, error}) => {
  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error}</p>
  if(!data) return null;
  if(data.spells.length === 0) return <p>No Spells Found.</p>
  
  const { spells } = data;
  const spell = spells[Math.floor(Math.random() * spells.length)];

  return (
    <SpellBrief
      className="mt-3"
      id={spell.index}
      name={spell.name}
      level={spell.level}
      lists={spell.classes}
      school={spell.school.name}
      concentration={spell.concentration}
      ritual={spell.ritual}
    />
  );
}