export default function ExtraCheckbox({ name, value, onChange }) {
  return (
    <div className="inline-flex items-center">
      <input type="checkbox" id={name} name={name} value={value} onChange={onChange} />
      <p className="ml-2" htmlFor={value}>
        {value}
      </p>
    </div>
  )
}
