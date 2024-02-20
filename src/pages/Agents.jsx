import { Column } from 'primereact/column';
import { TreeTable } from 'primereact/treetable';
import React, { useEffect, useState } from 'react';
import useFetch from '../ApiClient/GetApi';
import DefaultLayout from '../layout/DefaultLayout';
import Loader, { Loader2 } from '../components/loader/Loader';

export default function Agents() {
  const { data } = useFetch('dashboard/v1/allAgents');
  const [nodes, setNodes] = useState([]);
  useEffect(() => {
    if (data && data.data) {
      const agents = data.data;
      const formattedNodes = agents.map((agent) => ({
        data: {
          firstname: agent.firstName,
          lastname: agent.lastName,
          email: agent.email,
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
          <Column field="firstname" header="First Name" expander></Column>
          <Column field="lastname" header="Last Name"></Column>
          <Column field="email" header="Email"></Column>
        </TreeTable>
      </div>
    </DefaultLayout>
  );
}
