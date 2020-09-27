import React from "react";

import ShoppingListItem from "./ShoppingListItem";
import MiscShoppingListItem from "./MiscShoppingListItem";

function ShoppingList() {
  return (
    <div className="ShoppingList">
      <h2>ShoppingList</h2>
      <ShoppingListItem />
      <MiscShoppingListItem />
    </div>
  );
}

export default ShoppingList;
