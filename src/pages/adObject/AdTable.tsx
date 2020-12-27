import React from 'react';
import { Column, useTable, useSortBy } from 'react-table';

import './AdTable.scss';

interface TableInterface<T extends object> {
  columns: Column<T>[];
  data: T[];
}

export default function AdTable<T extends object>({ columns, data }: TableInterface<T>) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data }, useSortBy);

  return (
    <div className='adTableContainer'>
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column: any) => (
                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                  {column.render('Header')}
                  <span>{column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}</span>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {rows.length > 0 ? (
          <tbody {...getTableBodyProps()}>
            {rows.map((row, index) => {
              prepareRow(row);

              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    const {
                      column: { Header },
                      value,
                      row: {
                        original: { status },
                      },
                    }: any = cell;

                    let customizedCell = null;
                    if (Header === 'Status') {
                      switch (value) {
                        case 'ACTIVE':
                          customizedCell = <span className='statusActiveCell'>{cell.render('Cell')}</span>;
                          break;
                        case 'INACTIVE':
                          customizedCell = <span className='statusInactiveCell'>{cell.render('Cell')}</span>;
                          break;
                        case 'HIGHLY ACTIVE':
                          customizedCell = <span className='statusHActiveCell'>{cell.render('Cell')}</span>;
                          break;
                      }
                    }
                    if (Header === 'Weekly Ad Revenue') {
                      switch (status) {
                        case 'ACTIVE':
                          customizedCell = <span className='revenueActiveCell'>{cell.render('Cell')}</span>;
                          break;
                        case 'INACTIVE':
                          customizedCell = <span className='revenueInactiveCell'>{cell.render('Cell')}</span>;
                          break;
                        case 'HIGHLY ACTIVE':
                          customizedCell = <span className='revenueHActiveCell'>{cell.render('Cell')}</span>;
                          break;
                      }
                    }
                    return (
                      <td {...cell.getCellProps()} className={index % 2 == 0 ? 'trWhite' : 'trGrey'}>
                        {customizedCell || cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        ) : (
          <tbody>
            <tr>
              <td colSpan={8}>
                <div>
                  <p>Before we can show ad object, we’ll first need to get some data in here!</p>
                </div>
              </td>
            </tr>
            <tr>
              <td colSpan={8}>
                <div>
                  <button>Create ad object</button>
                </div>
              </td>
            </tr>
          </tbody>
        )}
      </table>
    </div>
  );
}
