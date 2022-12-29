export default function TextInput({ id, placeholder, value, setValue }) {
  return (
    <input
      id={id}
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className="font-lg font-normal bg-black bg-opacity-30 w-full px-4 py-2 rounded-md focus:outline-none placeholder:text-gray-200"
      placeholder={placeholder}
    />
  );
}
