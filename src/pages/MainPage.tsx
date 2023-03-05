import { Product } from "../components/product";
import { useProducts } from "../hooks/products";
import { Loader } from "../components/Loader";
import { ErrMessage } from "../components/ErrMessage";
import { Modal } from "../components/Modal";
import { CreateProduct } from "../components/CreateProduct";
import { useContext } from "react";
import { IProduct } from "../models";
import { ModalContext } from "../context/ModalContext";


export function MainPage() {

    const { loading, error, products, addProduct } = useProducts()
    const { modal, open, close } = useContext(ModalContext)

    const createHandler = (product: IProduct) => {
        close()
        addProduct(product)
    }

    return (
        <div className="container mx-auto max-w-2xl pt-5 ">
            {loading && <Loader />}
            {error && <ErrMessage error={error} />}
            {products.map((product, index) => <Product product={product} key={product.id} />)}

            {modal && <Modal title="Create a new search query" onClose={close}>
                <CreateProduct onCreate={createHandler} />
            </Modal>}

            <button
                className="fixed bottom-5 right-5 rounded-full bg-red-700 text-white text-2xl text-center px-10 py-6"
                onClick={() => open()}
            >+</button>
        </div >
    )
}