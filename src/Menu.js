import React from 'react';

const Menu = ({ menuItems }) => {
  return (
    <div className="section-center">
      {menuItems.map((menuItem) => {
        const { id, img, title, desc, price } = menuItem;
        return (
          <article className="menu-item" key={id}>
            <img src={img} alt={title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <p className="price">{price}</p>
              </header>

              <p className="item-text">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Menu;
