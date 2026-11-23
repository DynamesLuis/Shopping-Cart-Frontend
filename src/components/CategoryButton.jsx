export default function CategoryButton({
  label,
  onSelectCategory,
  selectedCategory,
  category
}) {
  const isSelected = category === selectedCategory;

  return (
    <button
      onClick={() => onSelectCategory(category)}
      className={`${isSelected ? "bg-black text-white border-black" : ""} cursor-pointer w-28 border-solid border-2 border-slate-500 rounded-full p-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease`}
    >
      {label}
    </button>
  );
}
