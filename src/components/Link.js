const Link = ({ href, children }) => {
  const onClick = (event) => {
    event.preventDefault();
    window.history.pushState({}, "", href);
    const navEvent = new PopStateEvent("popstatae");
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href}>
      {children}
    </a>
  );
};

export default Link;
