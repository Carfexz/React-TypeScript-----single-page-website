import { useState } from "react";
import { IProduct } from "../models";

interface ProductProps {
  product: IProduct
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false)

  const btnBgClassName = details ? 'bg-blue-400' : "bg-yellow-400"

  const btnClasses = ['py-2 px-4 border', btnBgClassName]

  return (

    <div
      className="border py-4 px-4 rounded flex flex-col items-center mb-2"
    >
      <p>{product.name}</p>
      <p className="font-bold">{product.email}</p>
      <button
        className={btnClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      >
        {details ? 'Hide Details' : 'Show Details'}
      </button>

      {details && <div>
        <p className="my-10 text-center">{product.phone}</p>
        <p className="my-10 text-center">{product.website}</p>
      </div>}
    </div >
  )
}
