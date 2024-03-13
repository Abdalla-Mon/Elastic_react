import "./App.css";
import ElasticSearch from "./components/ElasticSearch/ElasticSearch.jsx";
import { ElasticSearchProvider } from "./contexts/ElasticSearchProvider.jsx";

function App() {
  return (
    <ElasticSearchProvider>
      <ElasticSearch />
    </ElasticSearchProvider>
  );
}

export default App;
