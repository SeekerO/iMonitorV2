import DataSet from "./DataSet.json";

export function DataFetcher(title) {
  const nodes = DataSet.nodes;

  const filteredNodes = nodes.filter((node) => node.acro === title);

  if (title === "ALL") return nodes;
  else return filteredNodes;
}

export function CompanyFetcher() {
  const nodes = DataSet.nodes;
  return nodes;
}
