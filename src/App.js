
import './App.css';
import Logo from './Logo';
import Nav from './Nav';
import Search from "./Search";
import styled from 'styled-components';

function App() {
  const Wrapper = styled.section` 
   width: 100%;
   max-width: 1280px
   margin: 0 auto;`

  return (
    <div className="App">
     <Wrapper> 
       <Nav />
      </Wrapper>
      <Logo />
      <Search />
    </div>
  );
}

export default App;
