export const Filter = ({ value, onChange }) => (
  <div>
    <h3>Find contacts by name</h3>
    <input type="text" value={value} onChange={onChange} />
  </div>
);
