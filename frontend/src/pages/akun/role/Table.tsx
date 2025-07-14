import { roleStore } from '@/store/roleStore';
import { permissionStore } from '@/store/permissionStore';
import { useMemo, useState, useEffect, use } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type Row,
} from '@tanstack/react-table';
import type { Role } from '@/models/Role';
import type { Permission } from '@/models/Permission';
import {
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableNoDiv,
  TableRow,
} from '@/components/ui/table';
import { Checkbox } from '@/components/ui/checkbox';
import { rolePageStore } from './rolePageStore';

const columnHelper = createColumnHelper<Permission>();

// Kolom pertama untuk nama permission (sticky di sisi kiri)
const permissionNameColumn = columnHelper.accessor('name', {
  header: 'Permission',
  cell: (info) => <span className="font-semibold">{info.getValue()}</span>,
});

const mEditedRoles: Map<string, Role> = new Map();

const updatePermissionRole = (role: Role, permission: Permission, isChecked: boolean) => {
  // console.log('1. old.p: ', role.permissions);
  // console.log('1. new.p: ', mEditedRoles.get(role._id)?.permissions);

  if (mEditedRoles.get(role._id)) {
    const eRole = mEditedRoles.get(role._id);
    if (!eRole) return;
    const newPermissions = isChecked
      ? [...eRole.permissions, permission._id]
      : eRole.permissions.filter((pId) => pId !== permission._id);

    eRole.permissions = newPermissions;

    // console.log('2. old.p: ', role.permissions);
    // console.log('2. new.p: ', eRole.permissions);

    mEditedRoles.set(role._id, eRole);
  } else {
    const eRole = { ...role };
    const newPermissions = isChecked
      ? [...eRole.permissions, permission._id]
      : eRole.permissions.filter((pId) => pId !== permission._id);

    // console.log('3. old.p: ', role.permissions);
    // console.log('3. new.p: ', eRole.permissions);
  

    mEditedRoles.set(role._id, { ...eRole, permissions: newPermissions });
  }

  // detect has change
  const pMap = new Map<String, number>();
  mEditedRoles.get(role._id)?.permissions.forEach((p) => {
    pMap.set(p, (pMap.get(p) || 0) + 1);
  });

  role.permissions.forEach((p) => {
    pMap.set(p, (pMap.get(p) || 0) - 1);
  });

  let hasPermissionChange = false;
  for (let [k, v] of pMap) {
    if (v != 0) {
      hasPermissionChange = true;
      break;
    }
  }

  pMap.clear();
  if (!hasPermissionChange) {
    mEditedRoles.delete(role._id);
  }
  
    // console.log('4. old.p: ', role.permissions);
    // console.log('4. new.p: ', mEditedRoles.get(role._id)?.permissions);
    
};

function checkBoxRow(row: Row<Permission>, role: Role, onCompleted: () => void) {
  const permission = row.original;
  const hasPermission = role.permissions.includes(permission._id);
  const [isChecked, setIsChecked] = useState(hasPermission);

  const handleCheckbox = () => {
    updatePermissionRole(role, permission, !isChecked);
    setIsChecked(!isChecked);
    onCompleted();
  };

  return (
    <div className="flex">
      <Checkbox checked={isChecked} onCheckedChange={handleCheckbox} />
    </div>
  );
}

const emptyArray: Permission[] = [];

export default function Table() {
  const { roles } = roleStore();
  const { permissions } = permissionStore();
  const setEditedRoles = rolePageStore((state) => state.setEditedRoles);

  const columns = useMemo(() => {
    console.log('useMemo');
    if (!roles) return [];

    const roleColumns = roles.map((role) => {
      console.log('roles.map');
      // let count = 0;
      return columnHelper.display({
        id: role._id,
        header: () => <span>{role.name}</span>,
        cell: ({ row }) => {
          return checkBoxRow(row, role, () => {
            setEditedRoles(mEditedRoles);
            // count = 0;
          });
        },
      });
    });

    return [permissionNameColumn, ...roleColumns];
  }, [roles, columnHelper]);

  const table = useReactTable({
    data: permissions ?? emptyArray,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log('Table(): 2');
  return (
    <div className="relative border h-full rounded-lg">
      <TableNoDiv className="min-w-full divide-y">
        <TableHeader className="sticky top-0 z-10 bg-secondary">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header, index) => (
                <TableHead
                  key={header.id}
                  scope="col"
                  className={`p-3 text-left text-xs font-medium uppercase tracking-wider border-b ${
                    index === 0 ? 'sticky left-0 z-20 border-r' : ''
                  }`}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody className="divide-y ">
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id} className="group">
              {row.getVisibleCells().map((cell, index) => (
                <TableCell
                  key={cell.id}
                  className={`p-3 whitespace-nowrap text-sm border-b ${
                    index === 0 ? 'sticky left-0 border-r' : ''
                  }`}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </TableNoDiv>
    </div>
  );
}
