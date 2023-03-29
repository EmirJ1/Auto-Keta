export default function HeaderSection() {
  return (
    <div
      className="relative top-0 flex items-center w-full h-full"
      style={{
        background: `linear-gradient(0deg, rgba(17, 17, 17, 0.75), rgba(17, 17, 17, 0.75)), url('./images/header-bg.jpg') no-repeat center center / cover`,
        height: '700px',
      }}
    >
      <div className="container">
        <div className="row items-center justify-center">
          <div className="lg:col-8">
            <h1 className="lg:text-5xl text-3xl font-bold text-white text-center">
              Vetura te importuara nga Zvicra
            </h1>
          </div>
        </div>
      </div>
    </div>
  )
}
