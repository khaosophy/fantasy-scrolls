import { useState } from 'react';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Layout from './Layout';
import Loading from './Loading';
import SpellFilters from './SpellFilters';
import Table from './Table';

export default function SpellTable() {
  // app state
  const { isLoading, isError, error, data } = useQuery('getAllSpells', () => fetch('http://localhost:5000/api/v1/spells').then(res => res.json()));
  
  // filter state
  const [search, setSearch] = useState('');

  if(isLoading) {
    return <Loading />
  }

  if(isError) {
    return <span> Error: {error.message}</span>
  }

  const columns = [
    {
      Header: 'Level',
      accessor: 'level',
    },
    {
      Header: 'Name',
      accessor: 'name',
      Cell: ({ row }) => (<Link to={`/spells/${row.original.slug}`}>{row.original.name}</Link>)
    },
    {
      Header: 'Concentration',
      accessor: 'concentration',
      Cell: ({ row }) => (row.original.concentration ? 'Yes' : 'No'),
    },
    {
      Header: 'Ritual',
      accessor: 'ritual',
      Cell: ({ row }) => (row.original.ritual ? 'Yes' : 'No'),
    },
    {
      Header: 'School',
      accessor: 'school',
    },
  ];

  return (
    <Layout>
      <h1 className="title">D&D 5e Spells</h1>
      <SpellFilters
        search={search}
        setSearch={setSearch}
      />
      <Table
        columns={columns}
        data={data.data}
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