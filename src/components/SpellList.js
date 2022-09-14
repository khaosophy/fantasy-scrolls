import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import TextField from './TextField';
import GET_SPELLS from '../api/getSpells';
import SpellBrief from './SpellBrief';

export default function SpellList () {
  const [searchQuery, setSearchQuery] = useState('');
  const { loading, data, refetch } = useQuery(GET_SPELLS);

  if(loading) return (
    <h3>Peering through the weave...</h3>
  );
  // todo: error handling
  if(!data) return false;
  const { spells } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch({ name: searchQuery });
  }

  return (<>
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Spell List</title>
      </Helmet>
      <h1>Play With Magic</h1>

      <form onSubmit={handleSubmit}>
        <TextField
          id="spellSearchQuery"
          className="mb-2"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          label="Look up a spell"
          autoFocus
        />
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* todo: paginate */}
      {/* todo: no results state */}
      {(spells.length > 0) && (
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
                />
            </li>
          ))}
        </ul>
      )}
    </div>
  </>
  )
}