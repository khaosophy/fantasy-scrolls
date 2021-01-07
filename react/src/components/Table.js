import PropTypes from 'prop-types';
import { useColumnOrder, useSortBy, useTable } from 'react-table';

export default function Table(props) {
  const { columns, data } = props;
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    { 
      columns,
      data
    },
    useSortBy,
  );

  let tableClasses = ['table'];
  if(props.isStriped) tableClasses.push('is-striped');
  if(props.isBordered) tableClasses.push('is-bordered');
  if(props.isFullWidth) tableClasses.push('is-fullwidth');
  if(props.isNarrow) tableClasses.push('is-narrow');
  if(props.isHoverable) tableClasses.push('is-hoverable');

  return (
    <div className="table-container">
      <table className={tableClasses.join(' ')} {...getTableProps()}>
        <thead className="thead">
          {headerGroups.map(headerGroup => (
            <tr className="tr" {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th className="th" {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>
                    {column.isSorted
                      ? !column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className="tbody" {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr className="tr" {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td className="td" {...cell.getCellProps()}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

Table.propTypes = {
  columns: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  isBordered: PropTypes.bool,
  isStriped: PropTypes.bool,
  isFullWidth: PropTypes.bool,
  isHoverable: PropTypes.bool,
  isNarrow: PropTypes.bool,
}