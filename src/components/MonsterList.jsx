import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import GET_MONSTERS from '../api/getMonsters';
import MonsterTypes from '../api/static/monsterTypes';
import TextField from './TextField';
import SelectField from './SelectField';

export default function MonsterList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [monsterType, setMonsterType] = useState('');
  const { loading, data, refetch } = useQuery(GET_MONSTERS);
  
  if(loading) return (<h3>On the hunt for monsters...</h3>);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch({ 
      name: searchQuery,
      type: monsterType,
    });
  }

  return (
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Monster List</title>
        <meta name="description" content="Peruse the monsters of the multiverse with these easy-to-use filters." />
      </Helmet>
      <h1>Monsters</h1>

      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-md-8">
            <TextField 
              label="Look up a monster"
              id="monsterSearchQuery"
              className="mb-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div className="col-md-4">
            <SelectField 
              id="monsterSearchType"
              label="Monster Type"
              className="mb-2"
              value={monsterType}
              onChange={(e) => setMonsterType(e.target.value)}
              options={[
                { value: '', label: 'Any Type' },
                ...MonsterTypes.map((type) => ({ value: type, label: type.charAt(0).toUpperCase() + type.toLowerCase().slice(1) })),
              ]}
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Search</button>
      </form>

      {/* todo: paginate */}
      {(data.monsters.length > 0) ? (
        <ul className="list-unstyled mt-3">
          {data.monsters.map((monster) => (
            <li key={monster.index}>
              <h2>{monster.name}</h2>
            </li>
          ))}
        </ul>
      ): (
        <p>No monsters found.</p>
      )}
    </div>
  )
}