const Card = ({ mensaje }) => {
  return <div>{mensaje && <p>{mensaje}</p>}</div>;
};

export default Card;
