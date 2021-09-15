const Link = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
  };
  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
