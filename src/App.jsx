import Button from './component/Button';
import Heading from './component/Heading';

const App = () => {
  let name = 'Simon';
  let isLoggedIn = true;

  return (
    <>
      <Heading greeting="How far" title="My Guy" />

      <Button
        text="My Website"
        link={isLoggedIn ? 'https://devbammy.vercel.app' : '/login'}
        target={isRaining ? '_blank' : 'replace'}
      />
    </>
  );
};

export default App;
