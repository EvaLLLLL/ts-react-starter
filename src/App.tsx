import logo from './logo.svg'
import './App.scss'
import styled from 'styled-components'

function App() {
  return (
    <Container>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </Container>
  )
}

export default App

const Container = styled.div`
  color: red;
`
