import Image from "next/image";
import ProductEdit from "./ProductEdit";
import Router from 'next/router'

export default function AdminCarItem({car})
{
    async function handleDelete(id) {
    try {
      await axios.delete('https://auto.keta.mk/api/cars/' + id)
    } catch (err) {
      // eslint-disable-next-line no-console
      console.log(err)
    }
    Router.reload()
  }
    return(
        <div className="flex flex-row my-10 border-b border-black pb-8">
        <div className="flex flex-col">
            <Image src={car.images[0].url} width={300} height={250} alt="foto"/>
        </div>
        <div className="flex flex-col">
            <h3>{car.mark}  {car.model}  {car.year}  {car.motor}</h3>
            {/* <ProductEdit /> */}
            <button className="ml-2 bg-red-300"  onClick={() => handleDelete(car._id)}>
                Delete
            </button>
        </div>
        </div>
    )
}