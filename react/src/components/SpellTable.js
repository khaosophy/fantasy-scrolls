import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Loading from './Loading';
import Table from './Table';

export default function SpellTable() {
  const [spells, setSpells] = useState([])
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    /**
     * TODO:
     * Check to see if the data is in localStorage first
     * if not, run the query
     * 
     * TODO: we need to also fetch SCHOOL and LEVEL
     */
    fetch('http://localhost:5000/api/v1/spells')
      .then(result => result.json())
      .then(data => {
        const { data: spells } = data;
        setSpells(spells);
        setIsLoaded(true);
      })
  }, []);

  if(!isLoaded) {
    return <Loading />
  }

  const columns = [
    {
      Header: 'Level',
      accessor: 'level',
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ row }) => (<Link to={`/spells/${row.values.slug}`}>{row.values.name}</Link>)
    },
    {
      Header: 'Concentration',
      accessor: 'concentration',
      Cell: ({ row }) => (row.values.concentration ? 'Yes' : 'No'),
    },
    {
      Header: 'Ritual',
      accessor: 'ritual',
      Cell: ({ row }) => (row.values.ritual ? 'Yes' : 'No'),
    },
    {
      Header: 'School',
      accessor: 'school',
    },
  ];

  return (
    <Layout>
      <h1 className="title">D&D 5e Spells</h1>
      <Table
        columns={columns}
        data={spells}
        initialState={{
          sortBy: [{
            id: 'name',
            desc: false,
          }]
        }}
        isStriped
        isHoverable
        isNarrow
        isFullWidth
      />
    </Layout>
  )
}