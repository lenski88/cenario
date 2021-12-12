import GlobalStyle from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { Container } from "./components/styled/Container.styled";
import Header from './components/Header';



const theme = {
  colors: {
    header: '#FFD1DD',
    body: '#fff',
    footer: '#35288B'
  },
  mobile: '798px'
}
function App() {
  return (
    <ThemeProvider theme={theme}>
    <>
    <GlobalStyle/>
      <Header/>
    </>
    </ThemeProvider>
  );
}

export default App;
