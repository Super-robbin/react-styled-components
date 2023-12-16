const Input = ({ label, invalid, ...props }) => {
  // We use the conditional rendering below, withough repeating the class name twice, we just add the colour at the end.

  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";

  let inputClasses = "w-full px-3 py-2 leading-tight border rounded shadow";

  if (invalid) {
    labelClasses += " text-red-400";
    inputClasses += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelClasses += " text-stone-300";
    inputClasses += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelClasses}>{label}</label>
      <input className={inputClasses} {...props} />
    </p>
  );
};

export default Input;
