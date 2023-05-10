export const Tower = (props) => {
  const { handleTowerChange, tower } = props;
  return (
    <>
      <label htmlFor="tower" style={{ textAlign: "center" }}>
        Выберите башню:
      </label>
      <select
        className="st"
        id="tower"
        name="tower"
        onChange={handleTowerChange}
        value={tower}
        defaultValue="Башня"
      >
        <option value="">--Выберите башню--</option>
        <option value="A">Башня А</option>
        <option value="B">Башня Б</option>
      </select>
    </>
  );
};
