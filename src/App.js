import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

const allCategories = [...new Set(items.map((item) => item.category))];
console.log(allCategories);

function App() {
  const [menuItems, setMenuItems] = useState(items);

  const filteredItems = (category) => {
    let newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <h2>Movie project setup</h2>;
      <div>
        <section className="menu section">
          <div className="title">
            <h4> Our Movies</h4>
            <div class="underline"></div>
          </div>
          <Categories
            filteredItems={filteredItems}
            menuItems={menuItems}
            allCategories={allCategories}
          />
          <Menu menuItems={menuItems} />
        </section>
      </div>
    </main>
  );
}

export default App;
