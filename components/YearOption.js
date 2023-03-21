export default function YearOption({ setYear }) {
  const years = []
  for (let i = 2004; i < 2023; i++) {
    years.push(i)
  }
  return (
    <div className="col-12">
      <label htmlFor="year">Year</label>
      <select
        name="year"
        onChange={(e) => setYear(e.target.value)}
        className="w-full border rounded-md p-1 border-black"
      >
        <option value={null}>Zgjidhe Vitin</option>
        {years.map((year) => (
          <>
            <option key={year} value={year}>
              {year}
            </option>
          </>
        ))}
      </select>
    </div>
  )
}
