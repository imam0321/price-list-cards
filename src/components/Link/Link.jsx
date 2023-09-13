
const Link = ({route}) => {
  
  return (
    <div>
      <li className="mr-12 mb-2 font-semibold hover:bg-red-500">
        <a href={route.path}>{route.name}</a>
      </li>
    </div>
  );
};

export default Link;