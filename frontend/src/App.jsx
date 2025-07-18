import { useState } from "react";
import PortfolioTable from "./components/PortfolioTable";
import PortfolioForm from "./components/PortfolioForm";
import investmentsData from "./PortfolioInvestments";

function App() {
  const [investments, setInvestments] = useState(investmentsData);
  const [lastId, setLastId] = useState(
    investmentsData.length > 0
      ? Math.max(...investmentsData.map((inv) => inv.id))
      : 0
  );

  const addInvestment = (newInvestment) => {
    const nextId = lastId + 1;
    setInvestments([...investments, { ...newInvestment, id: nextId }]);
    setLastId(nextId);
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4 text-white">
        Portfolio Simulator
      </h1>
      <PortfolioForm onAddInvestment={addInvestment} />
      <PortfolioTable investments={investments} />
    </div>
  );
}

export default App;
