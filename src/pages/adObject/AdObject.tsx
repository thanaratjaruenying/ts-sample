import React, { useEffect, useState } from 'react';
import { Column } from 'react-table';
import { useHistory, useRouteMatch } from 'react-router-dom';

import AdTable from './AdTable';
import './AdObject.scss';


interface DataInterface {
  status: string;
  weeklyAdRevenue: string;
  name: string;
  id: string;
  description: string;
  game: string;
  adType: string;
  resolution: string;
}

export default function AdObject() {
  const history = useHistory();
  const { url } = useRouteMatch();
  const [data, setData] = useState<DataInterface[]>([]);

  const rawData = React.useMemo(
    () => [
      {
        status: 'HIGHLY ACTIVE',
        weeklyAdRevenue: 'World',
        name: 'name',
        id: 'id',
        description: 'description',
        game: 'game',
        adType: 'adType',
        resolution: 'resolution',
      },
      {
        status: 'ACTIVE',
        weeklyAdRevenue: 'vorld',
        name: 'bame',
        id: 'od',
        description: 'nescription',
        game: 'xame',
        adType: 'ldType',
        resolution: 'eesolution',
      },
      {
        status: 'INACTIVE',
        weeklyAdRevenue: 'vorld',
        name: 'bame',
        id: 'od',
        description: 'nescription',
        game: 'xame',
        adType: 'ldType',
        resolution: 'eesolution',
      },
    ],
    []
  );
  useEffect(() => {
    setData(rawData);
  }, []);

  const columns = React.useMemo<Column<DataInterface>[]>(
    () => [
      {
        Header: 'Status',
        accessor: 'status',
      },
      {
        Header: 'Weekly Ad Revenue',
        accessor: 'weeklyAdRevenue',
      },
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'ID',
        accessor: 'id',
      },
      {
        Header: 'Description',
        accessor: 'description',
      },
      {
        Header: 'Game',
        accessor: 'game',
      },
      {
        Header: 'Ad Type',
        accessor: 'adType',
      },
      {
        Header: 'Resolution',
        accessor: 'resolution',
      },
    ],
    []
  );

  return (
    <div className='mainContainer'>
      <div className='adObjectTitleSection'>
        <div>
          <strong>Ad object</strong>
        </div>
        <div>
          <div onClick={() => history.push(`${url}/new`)}>Create ad object</div>
        </div>
      </div>
      {<AdTable columns={columns} data={data} />}
    </div>
  );
}
