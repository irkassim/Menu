import React from 'react';

const Categories = ({ filteredItems, allCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((category) => {
        return (
          <div>
            <span>
              <button
                className="filter-btn"
                onClick={() => {
                  filteredItems(category);
                }}
              >
                {category}
              </button>
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
