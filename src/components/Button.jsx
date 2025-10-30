function Button(props) {
  return (
    <button
      {...props}
      className="bg-slate-400 text-white px-4 py-2 rounded-md font-medium"
    >
      {props.children}
    </button>
  );

  // className="bg-slate-400 text-white p-2 rounded-md"
}
export default Button;
