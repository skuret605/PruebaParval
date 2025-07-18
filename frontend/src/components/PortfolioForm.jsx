import { useState } from "react";

const PortfolioForm = ({ onAddInvestment }) => {
  const [activo, setActivo] = useState("");
  const [monto, setMonto] = useState("");
  const [rentabilidad, setRentabilidad] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!activo || !monto || !rentabilidad) {
      setError("Todos los campos son obligatorios");
      return;
    }
    if (isNaN(monto) || isNaN(rentabilidad)) {
      setError("Monto y Rentabilidad deben ser números");
      return;
    }
    if (parseFloat(monto) <= 0 || parseFloat(rentabilidad) < 0) {
      setError(
        "Monto debe ser mayor que 0 y Rentabilidad no puede ser negativa"
      );
      return;
    }
    if (rentabilidad > 100) {
      setError("Rentabilidad no puede ser mayor que 100%");
      return;
    }
    if (activo.length > 50) {
      setError("El nombre del activo no puede exceder los 30 caracteres");
      return;
    }

    setError("");
    onAddInvestment({
      activo,
      monto: parseFloat(monto),
      rentabilidad: parseFloat(rentabilidad),
    });

    setActivo("");
    setMonto("");
    setRentabilidad("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6">
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Activo"
          value={activo}
          onChange={(e) => setActivo(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Monto"
          value={monto}
          onChange={(e) => setMonto(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <input
          type="number"
          placeholder="Rentabilidad (%)"
          value={rentabilidad}
          onChange={(e) => setRentabilidad(e.target.value)}
          className="p-2 border border-gray-500 rounded bg-gray-100 text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-400"
        />
        <button
          type="submit"
          className="text-white p-2 rounded bg-blue-500 transition delay-100 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500"
        >
          Add Investment
        </button>
      </div>
    </form>
  );
};

export default PortfolioForm;
