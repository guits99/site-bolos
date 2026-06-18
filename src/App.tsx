import "@/App.css";
import { Header } from "@/components/Header";
import { Home } from "@/pages/Home";
import PageWrapper from "@/components/PageWrapper";

function App() {
  return (
    <PageWrapper>
      <Header title="Loli Bolos" />
      <Home />
    </PageWrapper>
  );
}

export default App;
