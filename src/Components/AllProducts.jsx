import { useState, useEffect } from 'react';
import "./../App.css";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
// import { UploadOutlined } from "@ant-design/icons"
import { db } from '../firebase';
// import { ref } from "firebase/storage";
import { Button, Modal } from 'antd';
import { Header } from "./Header";

const AllProducts = () => {
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState(null);

    const [imageError, setImageError] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');

    const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"]
    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.type)) {
                setImage(selectedFile)
                setImageError("")
            }
            else {
                setImage(null)
                setImageError("Please Select a valid image file type (png or jpg)")
            }
        }
        else {
            console.log("Please Select Your File");
        }
    }

    const storage = getStorage();
    const handleAddProducts = async (e) => {
        e.preventDefault();
        const productImagesRef = ref(storage, `product-images/${image?.name}`);
        const uploadTask = uploadBytesResumable(productImagesRef, image);
        uploadTask.on("state_changed", snapshot => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            console.log(progress);
        }, error => setUploadError(error.message), async () => {
            try {
                const url = await getDownloadURL(productImagesRef);
                const docRef = await addDoc(collection(db, "Products"), {
                    title,
                    description,
                    price: Number(price),
                    url
                });
                console.log("Document written with ID: ", docRef.id);
                setSuccessMsg("Product Add Successfully")
                setTitle("");
                setDescription("");
                setPrice("");
                document.getElementById("formFile").value = "";
                setImageError("");
                setUploadError("");
                setTimeout(() => {
                    setSuccessMsg("");
                }, 3000)
            } catch (error) {
                console.error("Error adding document: ", error);
                setUploadError(error.message)
            }
        })
    }
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getProducts = async () => {
            const productsCollection = collection(db, "Products");
            const productsSnapshot = await getDocs(productsCollection);
            const productsList = productsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setProducts(productsList);
        };
        getProducts();
    }, []);


    return (
        <>
            <Header />
            <br />
            <div className="container text-center">
                <div className="row">
                    <div className="col-md-12">
                        <Button type="primary" onClick={() => setOpen(true)}>
                            Add Product
                        </Button>
                        <Modal
                            title="Add Product Details"
                            open={open}
                            onOk={() => setOpen(true)}
                            onCancel={() => setOpen(false)}
                            width={600}
                        >
                            <form onSubmit={handleAddProducts}>
                                {successMsg && <><br /><div className="error-msg">{successMsg}</div><br /></>}
                                <br />
                                <label htmlFor="text"><b>Product Title :</b></label><br />
                                <input
                                    required
                                    type="text"
                                    className='form-control'
                                    placeholder="Enter Product Title"
                                    onChange={(e) => setTitle(e.target.value)} value={title}
                                />
                                <br />
                                <br />
                                <label htmlFor="text"><b>Product Description :</b></label><br />
                                <textarea
                                    className='form-control'
                                    rows={3}
                                    placeholder="Enter Product Description"
                                    required
                                    onChange={(e) => setDescription(e.target.value)} value={description}
                                />
                                <br />
                                <br />
                                <label htmlFor="price"><b>Product Price :</b></label><br />
                                <input
                                    className='form-control'
                                    required
                                    placeholder="Enter Product Price"
                                    type="number"
                                    onChange={(e) => setPrice(e.target.value)} value={price}
                                />
                                <br />
                                <br />
                                <label htmlFor="image"><b>Product Image :</b></label><br />
                                <input className="form-control" type="file" id="formFile" onChange={handleProductImg} />

                                {imageError && <><br /><div className="alert-danger p-2">{imageError}</div></>}
                                {uploadError && <><br /><div className="alert-danger">{uploadError}</div></>}
                                <br />
                                <button className='btn btn-primary' type='submit'>Submit</button>
                            </form>
                        </Modal>
                        <div className="productCard">
                            {products.map(product => (
                                <div className="productItem" key={product.id}>
                                    <img src={product.url} alt="product" />
                                    <div className="productDetails">
                                        <h3>{product.title}</h3>
                                        <p>{product.description}</p>
                                        <p>${product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProducts