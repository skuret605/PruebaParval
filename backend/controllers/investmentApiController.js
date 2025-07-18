import investmentsData from "../data/investmentData.js";
let investments = investmentsData;

export function getAllInvestments(req, res) {
  res.json(investments);
}

export function addInvestment(req, res) {
  const { cliente, activo, monto, tipo, fecha, rentabilidad } = req.body;

  if (!cliente || !activo)
    return res.status(400).json({ message: "Datos incompletos" });

  const newInvestment = {
    id: investments.length + 1,
    cliente,
    activo,
    monto,
    tipo,
    fecha,
    rentabilidad,
  };

  investments.push(newInvestment);
  res.status(201).json(newInvestment);
}

export function deleteInvestment(req, res) {
  const id = Number(req.params.id);
  const index = investments.findIndex((investment) => investment.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Inversión no encontrada" });
  }

  investments.splice(index, 1);
  res.json({ message: "Inversión eliminada" });
}
