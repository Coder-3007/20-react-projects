import MenuList from "./menu-list";

export default function TreeView({ menus = {} }) {
  return (
    <>
      <h1 className="heading">Tree View / Recursive Navigation Menu App</h1>
      <div className="tree-view-container">
        <MenuList list={menus} />
      </div>
      <hr className="line-below" />
    </>
  );
}
