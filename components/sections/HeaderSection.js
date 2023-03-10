import { useState } from 'react'

export default function HeaderSection() {
  const [mark, setMark] = useState('mark')

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 my-5">
          <div className="flex flex-row">
            <div className="flex flex-col">
              <select name="mark" onChange={(e) => setMark(e.target.value)}>
                <option value="audi" onChange={(e) => setMark(e.target.value)}>
                  Audi
                </option>
                <option value="bmw" onChange={(e) => setMark(e.target.value)}>
                  BMW
                </option>
                <option value="mercedes" onChange={(e) => setMark(e.target.value)}>
                  Mercedes
                </option>
              </select>
            </div>
            <div className="flex flex-col">
              <select name="model" onChange={(e) => setModel(e.target.value)}>
                <option value="audi" onChange={(e) => setModel(e.target.value)}>
                  Audi
                </option>
                <option value="bmw" onChange={(e) => setModel(e.target.value)}>
                  BMW
                </option>
                <option value="mercedes" onChange={(e) => setMark(e.target.value)}>
                  Mercedes
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
