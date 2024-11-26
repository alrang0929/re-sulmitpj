// theme 글로벌 적용
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
// Router 관련 설정
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import IntroPage from "./components/pages/IntroPage";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Router>
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/main" element={<MainPage />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
