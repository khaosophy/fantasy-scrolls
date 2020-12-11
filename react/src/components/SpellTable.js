import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Loading from './Loading';
import Table from './Table';

export default function SpellTable() {
  const [spells, setSpells] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    fetch('https://www.dnd5eapi.co/api/spells')
    // fetch('https://api.open5e.com/spells')
      .then(result => result.json())
      .then(data => {
        setSpells(data.results);
        setIsLoaded(true);
      })
  }, []);

  if(!isLoaded) {
    return <Loading />
  }

  const columns = [
    {
      Header: 'Key',
      accessor: 'index',
    },
    {
      Header: 'Spell Name',
      accessor: 'name',
      Cell: ({ row }) => (<Link to={`/spells/${row.values.index}`}>{row.values.name}</Link>)
    }
  ]

  return (
    <Layout>
      <h1>D&D 5e Spells</h1>
      <Table columns={columns} data={spells} />
    </Layout>
  )
}