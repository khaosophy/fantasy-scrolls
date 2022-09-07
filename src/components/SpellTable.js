import { useState } from 'react';
import { Helmet } from 'react-helmet';
import TextField from './TextField';

export default function SpellTable () {
  /**
   * Query all spell data from the SRD
   */

  const [searchQuery, setSearchQuery] = useState('');

  return (<>
    <div className="mt-3 mb-4">
      <Helmet>
        <title>Spell Table</title>
      </Helmet>
      <h1>Play With Magic</h1>

      <TextField
        id="spellTableSearchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        label="Look up a spell"
        autoFocus
      />
    </div>
  </>
  )
}