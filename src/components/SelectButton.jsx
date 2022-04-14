const SelectButton = (isSelected, setIsSelected) => {
  return (
    <div>
      {isSelected ? (
        <button type="button" onClick={() => setIsSelected(false)}>
          Cancel your choice
        </button>
      ) : (
        <button type="button" onClick={() => setIsSelected(true)}>
          Select this Cat
        </button>
      )}
    </div>
  );
};

export default SelectButton;
