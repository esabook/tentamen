import { roleStore } from '@/store/roleStore';
import { permissionStore } from '@/store/permissionStore';

import Table from './Table';
import TableAction from './TableAction';
import { useEffect } from 'react';


export default function RolePage() {
  const { roles, getRoles } = roleStore();
  const { permissions, getPermissionAll } = permissionStore();

  useEffect(() => {
    getRoles();
    getPermissionAll();
  }, [getRoles, getPermissionAll]);


  // Tampilkan pesan loading jika data belum siap
  if (!permissions || !roles) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Role & Permission Matrix</h1>
        <div className="border rounded-lg p-8 text-center">
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  console.log('RolePage(): ');

  return (
    <div className="p-4">
      <TableAction/>
      <Table/>
    </div>
  );
}
