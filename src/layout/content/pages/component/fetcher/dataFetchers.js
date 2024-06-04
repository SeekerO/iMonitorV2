import DataSet from "./DataSet.json";
import New_Dataset from "./imonitor_dataset.json";
export function DataFetcher(title) {
  const nodes = DataSet.nodes;
  const new_nodes = New_Dataset.nodes;

  const filteredNodes = new_nodes.filter((node) => node.acro === title);

  if (title === "ALL") return new_nodes;
  else return filteredNodes;
}

export function CompanyFetcher() {
  const nodes = New_Dataset.nodes;
  return nodes;
}
