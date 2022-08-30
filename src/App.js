import { Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';

import { Home } from './views/Home';
import { Search } from './views/Search';
import { Auth } from './views/Auth';

const StyledHeader = styled.header`
  border-bottom: 1px solid;
`;

const StyledNavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  li:not(:last-child){
    margin-right: 20px;
  }
`;

const StyledMain = styled.header`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <>
      <StyledHeader>
        <StyledNavList>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/auth'>Authorization</Link>
          </li>
          <li>
            <Link to='/search'>Search</Link>
          </li>
        </StyledNavList>
      </StyledHeader>
      <StyledMain>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='auth' element={<Auth />}/>
          <Route path='search' element={<Search />}/>
        </Routes>
      </StyledMain>
    </>
  );
}

export default App;
