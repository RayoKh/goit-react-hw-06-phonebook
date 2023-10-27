import { useDispatch, useSelector } from 'react-redux';
import { getFiltersValue } from 'redux/filterSlice';
import { getFilters } from 'redux/selector';

export const Filter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilters);

  return (
    <div>
      <h3>Find contacts by name</h3>
      <input
        name="filter"
        type="text"
        value={filterValue}
        onChange={e => dispatch(getFiltersValue(e.target.value))}
      />
    </div>
  );
};
