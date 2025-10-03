const Heading = ({ greeting, title }) => {
  return (
    <div>
      <h1>{greeting}</h1>
      <p>{title}</p>
    </div>
  );
};

export default Heading;

const greet = (a, b) => {
  return a * b;
};

greet(2, 4);
