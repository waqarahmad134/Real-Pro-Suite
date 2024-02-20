import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import React, { useEffect, useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import DefaultLayout from '../layout/DefaultLayout';
import Loader from '../components/loader/Loader';

export default function Offices() {
  const { data } = useFetch('dashboard/v1/allOffices');
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    if (data && data.data) {
      const offices = data.data;
      const formattedNodes = offices.map((office) => ({
        data: {
          name: office.name,
          status: office.status === true ? 'True' : 'False',
        },
      }));
      setNodes(formattedNodes);
    }
  }, [data]);

  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return loading ? (
    <Loader />
  ) : (
    <DefaultLayout>
      <div>
        <TreeTable
          value={nodes}
          paginator
          rows={5}
          rowsPerPageOptions={[5, 10, 25]}
          tableStyle={{ minWidth: '50rem' }}
        >
          <Column field="name" header="Name" expander></Column>
          <Column field="status" header="Status"></Column>
        </TreeTable>
      </div>
    </DefaultLayout>
  );
}
