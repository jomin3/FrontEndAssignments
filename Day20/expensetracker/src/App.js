import AddEntry from "./components/addentry";
import Entries from "./components/entries";
import Summary from "./components/summary";
import TotalBalance from "./components/totalbalance";
import { ExpenseProvider } from "./expense-context";
import "./App.css";

export default function App() {
  return (
    <ExpenseProvider>
      <div className="container justify-content-center">
        <TotalBalance />
        <Summary />
        <AddEntry />
        <Entries />
      </div>
    </ExpenseProvider>
  );
}
