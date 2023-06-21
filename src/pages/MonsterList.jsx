import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { useQuery } from '@apollo/client';
import GET_MONSTERS from '../api/getMonsters';
import MonsterTypes from '../api/static/monsterTypes';
import ChallengeRatings from '../api/static/challengeRatings';
import TextField from '../components/forms/TextField';
import SelectField from '../components/forms/SelectField';
import MonsterBrief from '../components/monsters/MonsterBrief';
import { capitalize } from '../utils/text-utils';

export default function MonsterList() {
  const [searchQuery, setSearchQuery] = useState('');
  const [monsterType, setMonsterType] = useState('');
  const [minCR, setMinCR] = useState('');
  const [maxCR, setMaxCR] = useState('');

  const { loading, data, refetch } = useQuery(GET_MONSTERS);
  
  if(loading) return (<h3>On the hunt for monsters...</h3>);

  const handleSubmit = (e) => {
    e.preventDefault();
    refetch({ 
      name: searchQuery,
      type: monsterType,
      challenge_rating: {
        lte: parseFloat(maxCR),
        gte: parseFloat(minCR),
      }
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
          <div className="col-md-5">
            <TextField 
              label="Look up a monster"
              id="monsterSearchQuery"
              className="mb-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
          </div>
          <div className="col-md-2">
            <SelectField
              id="monsterSearchMinCR"
              label="Min CR"
              className="mb-2"
              value={minCR}
              onChange={(e) => setMinCR(e.target.value)}
              options={[
                { value: '', label: 'Any CR' },
                ...ChallengeRatings.map(({ value, label }) => ({ value, label })),
              ]}
            />
          </div>
          <div className="col-md-2">
            <SelectField
              id="monsterSearchMaxCR"
              label="Max CR"
              className="mb-2"
              value={maxCR}
              onChange={(e) => setMaxCR(e.target.value)}
              options={[
                { value: '', label: 'Any CR' },
                ...ChallengeRatings.map(({ value, label }) => ({ value, label })),
              ]}
            />
          </div>
          <div className="col-md-3">
            <SelectField 
              id="monsterSearchType"
              label="Monster Type"
              className="mb-2"
              value={monsterType}
              onChange={(e) => setMonsterType(e.target.value)}
              options={[
                { value: '', label: 'Any Type' },
                ...MonsterTypes.map((type) => ({ value: type, label: capitalize(type) })),
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
              <MonsterBrief
                className="mt-3"
                id={monster.index}
                name={monster.name}
                type={monster.type}
                speed={monster.speed}
                cr={monster.challenge_rating}
              />
            </li>
          ))}
        </ul>
      ): (
        <p>No monsters found.</p>
      )}
    </div>
  )
}