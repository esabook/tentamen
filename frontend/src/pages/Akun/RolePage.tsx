import { roleStore } from '@/store/roleStore';
import { permissionStore } from '@/store/permissionStore';
import { useMemo, useState, useEffect } from 'react';

import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
  type Row,
} from '@tanstack/react-table';
import type { Role } from '@/models/Role';
import type { Permission } from '@/models/Permission';
import { toast } from 'sonner';
import Loading from '@/components/Loading';
import { Button } from '@/components/ui/button';

const columnHelper = createColumnHelper<Permission>();

// Kolom pertama untuk nama permission (sticky di sisi kiri)
const permissionNameColumn = columnHelper.accessor('name', {
  header: 'Permission',
  cell: (info) => <span className="font-semibold">{info.getValue()}</span>,
});

export default function RolePage() {
  // 1. Ambil data dan fungsi dari state management (Zustand)
  const { roles, isLoading, setIsLoading, getRoles, roleUpdate } = roleStore();
  const { permissions, getPermissionAll } = permissionStore();

  // 2. State lokal untuk mengelola data yang diedit dan melacak perubahan
  const [editedRoles, setEditedRoles] = useState<Role[] | null>(null);
  const [isDirty, setIsDirty] = useState(false);

  // 3. Ambil data awal saat komponen pertama kali dimuat
  useEffect(() => {
    getRoles();
    getPermissionAll();
  }, [getRoles, getPermissionAll]);

  // 4. Inisialisasi state lokal yang bisa diedit setelah data dari store berhasil dimuat
  useEffect(() => {
    if (roles) {
      // Lakukan deep copy untuk menghindari mutasi state global secara langsung
      setEditedRoles(JSON.parse(JSON.stringify(roles)));
    }
  }, [roles]);

  const handleCheckboxChange = (role: Role, permission: Permission, hasPermission: boolean) => {
    setEditedRoles((currentRoles) => {
      if (!currentRoles) return [];
      // Gunakan .map untuk membuat array baru demi imutabilitas
      return currentRoles.map((r) => {
        if (r._id === role._id) {
          const updatedPermissions = hasPermission
            ? r.permissions.filter((pId) => pId !== permission._id)
            : [...r.permissions, permission._id];
          return { ...r, permissions: updatedPermissions };
        }
        return r; // Kembalikan role lain tanpa perubahan
      });
    });
    setIsDirty(true); // Tandai bahwa ada perubahan yang belum disimpan
  };

  const columns = useMemo(() => {
    if (!editedRoles) return [];

    // Buat kolom secara dinamis untuk setiap role yang ada
    const roleColumns = editedRoles.map((role) =>
      columnHelper.display({
        id: role._id,
        header: () => <span>{role.name}</span>,
        cell: ({ row }) => {
          const permission = row.original;
          const hasPermission = role.permissions.includes(permission._id);
          const handleCheckbox = () => handleCheckboxChange(role, permission, hasPermission);

          return (
            <div className="flex justify-center">
              <input
                type="checkbox"
                checked={hasPermission}
                onChange={handleCheckbox}
                className="h-5 w-5 cursor-pointer"
              />
            </div>
          );
        },
      })
    );

    return [permissionNameColumn, ...roleColumns];
  }, [editedRoles, columnHelper]);

  // 6. Inisialisasi instance tabel dengan data dan kolom yang sudah didefinisikan
  const table = useReactTable({
    data: permissions ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const handleSave = async () => {
    if (!editedRoles || !roles || isLoading) return;

    setIsLoading(true);

    // 1. Temukan role yang benar-benar telah dimodifikasi
    const changedRoles = editedRoles.filter((editedRole) => {
      const originalRole = roles.find((r) => r._id === editedRole._id);
      if (!originalRole) return false; // Seharusnya tidak terjadi jika data konsisten

      // 2. Bandingkan array permission secara efisien setelah diurutkan
      const originalPerms = JSON.stringify(originalRole.permissions.sort());
      const editedPerms = JSON.stringify(editedRole.permissions.sort());
      return originalPerms !== editedPerms;
    });
    if (changedRoles.length === 0) {
      setIsDirty(false);
      setIsLoading(false);
      return;
    }

    try {
      // 3. Buat array promise untuk dijalankan secara paralel
      const updatePromises = changedRoles.map((role) => roleUpdate(role));
      await Promise.all(updatePromises);

      // 4. Jika sukses, reset status 'dirty' dan beri notifikasi
      setIsDirty(false);
      toast.success('Perubahan berhasil disimpan!');
    } catch (error) {
      console.error('Failed to save role changes:', error);
      toast.error('Gagal menyimpan perubahan. Silakan coba lagi.');
    } 
  };

  // Tampilkan pesan loading jika data belum siap
  if (!permissions || !editedRoles) {
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Role & Permission Matrix</h1>
        <div className="border rounded-lg p-8 text-center">
          <p>Loading data...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Role & Permission Matrix</h1>
        {
          <Button onClick={handleSave} disabled={!isDirty || isLoading}>
            {isLoading ? <Loading /> : ''}
            {isLoading ? (isDirty ? 'Menyimpan...' : 'Memuat') : 'Save Changes'}
          </Button>
        }
      </div>

      {/* Kontainer tabel dengan overflow untuk scrolling */}
      <div className="relative max-h-[calc(100vh-12rem)] overflow-auto border rounded-lg shadow-sm">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 sticky top-0 z-10">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header, index) => (
                  <th
                    key={header.id}
                    scope="col"
                    className={`p-3 text-left text-xs font-medium text-gray-600 uppercase tracking-wider border-b ${
                      index === 0 ? 'sticky left-0 bg-gray-100 z-20 border-r' : ''
                    }`}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50 group">
                {row.getVisibleCells().map((cell, index) => (
                  <td
                    key={cell.id}
                    className={`p-3 whitespace-nowrap text-sm text-gray-800 border-b ${
                      index === 0 ? 'sticky left-0 bg-white group-hover:bg-gray-50 border-r' : ''
                    }`}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
