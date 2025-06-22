import React from "react";

export default function UserTable({ users }) {
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>#</th>
            <th>Username</th>
            <th>Nama</th>
            <th>Role</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {users?.map((user, idx) => (
            <tr key={user.id || idx}>
              <td>{idx + 1}</td>
              <td>{user.username}</td>
              <td>{user.nama || user.name}</td>
              <td>{user.role}</td>
              <td>
                <button className="btn btn-xs btn-warning mr-2">Edit</button>
                <button className="btn btn-xs btn-error">Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
