import './App.css';
import { ConnectButton } from 'thirdweb/react';
import { client } from './client';
import { CreatePropertyForm } from './components/createpropertyform';

function App() {
  return (
    <>
      <ConnectButton 
        client={client}
      />
      <CreatePropertyForm />
    </>
  )
}

export default App
