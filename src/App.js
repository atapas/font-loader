import FontLink from './FontLink';
import FontLoader from './FontLoader';
import FontFace from './FontFace';

import './App.css';

function App() {
  return (
    <>
      <h1>Applying Fonts Demo</h1>
      <div className="App">
        <FontLink />
        <FontLoader />
        <FontFace />
      </div>
    </>
  );
}

export default App;
