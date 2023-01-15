
import { AppProviders } from "./providers/app-providers";
import { MuiMode } from "./components/mui/MuiMode";
// import { Application } from './components/application/application';
// import { Counter } from './components/counter/counter';
// import { Skills } from './components/skills/skills';

function App() {
  return (
    <AppProviders>
    <div className="App">
      <MuiMode/>
      {/* <Application/>
      <Skills skills={['HTML', 'CSS']}/> */}
      {/* <Counter/> */}
    </div>
    </AppProviders>
  );
}

export default App;
