import { useState } from "react";
import PropTypes from "prop-types";

const Filter = ({ handleFilter }) => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (e) => {
    setSelectedOption(e.target.value);
    handleFilter(e.target.value);
  };

  return (
    <div className="flex items-center justify-start pt-4 pl-4">
      <select
        value={selectedOption}
        onChange={handleChange}
        className="border rounded-md py-4 px-1"
      >
        <option value="">Search for </option>
        <option value="shop">Shop</option>
        <option value="business">Business</option>
      </select>
    </div>
  );
};

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
