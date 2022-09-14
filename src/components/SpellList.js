import { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import TextField from './TextField';
import GET_SPELLS from '../api/getSpells';
import SpellBrief from './SpellBrief';

export default function SpellList () {
  const [searchQuery, setSearchQuery] = useState('');
  const [renderedList, setRenderedList] = useState([]);
  const { loading, data } = useQuery(GET_SPELLS);

  useEffect(() => {
    if(!data) return;
    setRenderedList(data.spells);
  }, [data]);

  if(loading) return (
    <h3>Peering through the weave...</h3>
  );
  // todo: error handling
  if(!data) return false;
  const { spells } = data;

  const handleSubmit = (e) => {
    e.preventDefault();
    const filteredSpells = spells.filter(spell => spell.name.toLowerCase().includes(searchQuery.toLowerCase()))
    setRenderedList(filteredSpells);
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
      {(renderedList.length > 0) && (
        <ul className="list-unstyled mt-3">
          {renderedList.map((spell) => (
            <li key={spell.index}>
                <SpellBrief
                  className="mt-3"
                  key={spell.index}
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