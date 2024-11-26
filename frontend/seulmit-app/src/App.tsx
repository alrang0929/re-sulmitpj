import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import IntroPage from "./components/pages/IntroPage";
import MainPage from "./components/pages/MainPage";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<IntroPage />} />
          <Route path="/main" element={<MainPage />} />
        </Routes>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
