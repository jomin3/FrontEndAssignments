import Banking from "./banking";
import { BankProvider } from "./context";
import "./styles.css";

export default function App() {
  return (
    <BankProvider>
      <div className="App">
        <Banking />
      </div>
    </BankProvider>
  );
}
