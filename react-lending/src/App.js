import ReactDOM from 'react-dom';
import React from 'react';
import './App.css';
import Layout from './hoc/Layout/Layout'
import Landing from './containers/Landing/Landing'

const App = () => {
  return (
    <Layout>
      <Landing/>
    </Layout>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
)

export default App;
