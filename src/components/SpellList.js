import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import TextField from './TextField';
import GET_SPELLS from '../api/getSpells';
import GET_SCHOOLS from '../api/getSchools';
import GET_CLASSES from '../api/getClasses';
import SpellBrief from './SpellBrief';
import SelectField from './SelectField';

export default function SpellList () {
  const [searchQuery, setSearchQuery] = useState('');
  const [spellSchool, setSpellSchool] = useState('');
  const [spellClass, setSpellClass] = useState('');
  const { loading: schoolLoading, data: schoolData } = useQuery(GET_SCHOOLS);
  const { loading: classLoading, data: classData } = useQuery(GET_CLASSES);
  const { loading: spellLoading, data: spellData, refetch } = useQuery(GET_SPELLS);

  useEffect(() => {
    /* todo: update results when changing school or class list? */
    // updateResults();
  }, [spellSchool, spellClass]);

  if(spellLoading || schoolLoading || classLoading) return (
    <h3>Peering through the weave...</h3>
  );
  // todo: error handling
  if(!spellData || !schoolData || !classData) return false;
  const { spells } = spellData;
  const { magicSchools: schools } = schoolData;
  const { classes } = classData;

  const handleSubmit = (e) => {
    e.preventDefault();
    updateResults();
  }

  const handleReset = (e) => {
    setSpellClass('');
    setSpellSchool('');
    setSearchQuery('');
  }

  const updateResults = () => {
    refetch({
      name: searchQuery,
      school: spellSchool ? spellSchool : null,
      class: spellClass ? spellClass : null,
    })
  }

  const handleChange = (value, type) => {
    /* todo: cleanup */
    if (type === 'school') {
      return setSpellSchool(value);
    }
    if (type === 'class') {
      return setSpellClass(value);
    }
    return console.error('change request not understood');
  }

  return (<>
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Spell List</title>
      </Helmet>
      <h1>Play With Magic</h1>

      {/**
        * TODO: additional filters
        * * level
        * * concentration? 
        */}
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-2 col-6">
            <SelectField
              id="spellSearchSchool"
              label="Spell School"
              value={spellSchool}
              onChange={(e) => handleChange(e.target.value, 'school')}
              options={[
                { value: '', label: 'Any Spell School' },
                ...schools.map(school => ({ value: school.index, label: school.name }))
              ]}
            />
          </div>
          <div className="mb-2 col-6">
            <SelectField
              id="spellSearchClass"
              label="Class"
              value={spellClass}
              onChange={(e) => handleChange(e.target.value, 'class')}
              options={[
                {value: '', label: 'Any Class'},
                ...classes,
              ]}
            />
          </div>
        </div>
        <TextField
          id="spellSearchQuery"
          className="mb-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Look up a spell"
          autoFocus
        />
        <button type="submit" className="btn btn-primary">Search</button>
        <button className="btn btn-secondary ms-2" onClick={handleReset}>Reset</button>
      </form>

      {/* todo: paginate */}
      {(spells.length > 0) ? (
        <ul className="list-unstyled mt-3">
          {spells.map((spell) => (
            <li key={spell.index}>
                <SpellBrief
                  className="mt-3"
                  id={spell.index}
                  name={spell.name}
                  level={spell.level}
                  lists={spell.classes}
                  school={spell.school.name}
                  concentration={spell.concentration}
                />
            </li>
          ))}
        </ul>
      ) : <h3 className="mt-3">No spells found.</h3>}
    </div>
  </>
  )
}