import './App.css';
// import FormReactHook from './components/FormReactHook';
import FormReactHookResolver from './components/FormReactHookResolver';

function App() {
  return (
    <section style={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}>
      <h1>Tutorial React-hook form </h1>
      {/* <FormReactHook></FormReactHook> */}
      <FormReactHookResolver></FormReactHookResolver>
    </section>
  );
}

export default App;
