const PortfolioTable = ({ investments }) => (
  <div className="overflow-x-auto shadow-lg rounded-[10px] bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center">
    <table className="min-w-full text-white text-center">
      <thead>
        <tr>
          <th className="py-3 px-6 border-b-4 border-gray-500 bg-gray-700 rounded-tl-[10px] text-center">
            ID
          </th>
          <th className="py-3 px-6 border-b-4 border-gray-500 bg-gray-700 text-center">
            Activo
          </th>
          <th className="py-3 px-6 border-b-4 border-gray-500 bg-gray-700 text-center">
            Monto
          </th>
          <th className="py-3 px-6 border-b-4 border-gray-500 bg-gray-700 rounded-tr-[10px] text-center">
            Rentabilidad (%)
          </th>
        </tr>
      </thead>
      <tbody>
        {investments.map((inv, idx) => (
          <tr
            key={inv.id}
            className={idx % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
          >
            <td className="py-2 px-6 border-b border-gray-600 text-center">
              {inv.id}
            </td>
            <td className="py-2 px-6 border-b border-gray-600 text-center">
              {inv.activo}
            </td>
            <td className="py-2 px-6 border-b border-gray-600 text-center">
              {inv.monto}
            </td>
            <td className="py-2 px-6 border-b border-gray-600 text-center">
              %{inv.rentabilidad}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PortfolioTable;
