const Link = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
  };

  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
