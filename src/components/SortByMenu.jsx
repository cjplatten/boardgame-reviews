import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";

const SortByMenu = ({ sortBy, setSortBy }) => {
  return (
    <div>
      <DropdownButton
        id="dropdown-basic-button"
        title="Sort By"
        variant="secondary"
        className="sort-by-dropdown"
      >
        <Dropdown.Item
          as="button"
          onClick={() => {
            setSortBy("created_at");
          }}
          key="created_at"
        >
          Created At
        </Dropdown.Item>
        <Dropdown.Item
          as="button"
          onClick={() => {
            setSortBy("votes");
          }}
          key="votes"
        >
          Votes
        </Dropdown.Item>
      </DropdownButton>
      {sortBy && <p className="sorted-by">Sorted by: {sortBy.replace(/_/g, " ")}</p>}
    </div>
  );
};

export default SortByMenu;
