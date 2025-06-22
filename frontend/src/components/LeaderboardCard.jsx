// import React from "react";

// export default function LeaderboardCard({ leaderboard }) {
//   return (
//     <div className="card bg-base-100 shadow-xl p-4">
//       <h2 className="card-title mb-2">Leaderboard</h2>
//       <div className="overflow-x-auto">
//         <table className="table table-zebra">
//           <thead>
//             <tr>
//               <th>#</th>
//               <th>Nama</th>
//               <th>Skor</th>
//             </tr>
//           </thead>
//           <tbody>
//             {leaderboard?.map((item, idx) => (
//               <tr key={item.id || idx}>
//                 <td>{idx + 1}</td>
//                 <td>{item.nama || item.name}</td>
//                 <td>{item.skor || item.score}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
