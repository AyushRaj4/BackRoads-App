const PageLink = (props) => {
  return (
    <li>
      <a href={props.link} className={props.itemClass}>
        {props.name}
      </a>
    </li>
  );
};

export default PageLink;
