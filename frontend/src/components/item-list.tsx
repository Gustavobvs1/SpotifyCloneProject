import { Link, useLocation } from "react-router-dom";
import { ItemObjProps, SingleItem } from "./single-item";

interface ItemListProps {
  title: string;
  items: number;
  itemsArray: ItemObjProps[];
  path: string;
  idPath: string;
}

export function ItemList({
  title,
  items,
  itemsArray,
  path,
  idPath,
}: ItemListProps) {
  const isHome = useLocation().pathname === "/";

  const finalItems = isHome ? items : Infinity;

  return (
    <div className="item-list">
      <div className="item-list-header">
        <h2>{title} populares</h2>
        {isHome && <Link to={path}>Mostrar tudo</Link>}
      </div>

      <div className="item-list-container">
        {itemsArray
          .filter((_, index) => index < finalItems)
          .map((currObj, index) => (
            <SingleItem
              key={`${title} - ${index}`}
              {...currObj}
              idPath={idPath}
            />
          ))}
      </div>
    </div>
  );
}
