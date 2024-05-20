import './App.css';
import Card from './components/Card/Card.tsx';

const App = () => {

  return (
    <>
      <div className="playingCards faceImages">
        <Card rank={'K'} suit={'diams'}/>
        <Card rank={'9'} suit={'hearts'}/>
        <Card rank={'Q'} suit={'clubs'}/>
        <Card rank={'Q'} suit={'hearts'}/>
        <Card rank={'3'} suit={'hearts'}/>
      </div>
    </>
  );
};

export default App;
