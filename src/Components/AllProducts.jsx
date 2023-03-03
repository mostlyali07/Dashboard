import { useState } from 'react';
import { UploadOutlined } from "@ant-design/icons"
import { Button, Modal, Input, InputNumber, Upload } from 'antd';

const AllProducts = () => {
    const [open, setOpen] = useState(false);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');

    const [imageError, setImageError] = useState('');

    const [successMsg, setSuccessMsg] = useState('');
    const [uploadError, setUploadError] = useState('');
    const { TextArea } = Input;

    const types = ["image/jpg", "image/jpeg", "image/png", "image/PNG"]
    const handleProductImg = (e) => {
        let selectedFile = e.target.files[0];
        if (selectedFile) {
            if (selectedFile && types.includes(selectedFile.types)) {
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
    const handleAddProducts = (e) => {
        e.preventDefault();
        console.log(title, description, price);
        console.log(image);
    }
    return (
        <>
            <div className="container">
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
                        // okText="Submit"
                        >
                            <form onSubmit={handleAddProducts}>
                                {successMsg && <><br /><div className="error-msg">{successMsg}</div><br /></>}
                                <br />
                                <label htmlFor="text"><b>Product Title :</b></label><br />
                                <Input
                                    size="large"
                                    placeholder="Enter Product Title"
                                    style={{
                                        width: 300,
                                    }}
                                    rules={[{ required: true }]}
                                    onChange={(e) => setTitle(e.target.value)} value={title}
                                />
                                <br />
                                <br />
                                <label htmlFor="text"><b>Product Description :</b></label><br />
                                <TextArea
                                    rows={3}
                                    size="large"
                                    placeholder="Enter Product Description"
                                    style={{ width: 300 }}
                                    rules={[{ required: true }]}
                                    onChange={(e) => setDescription(e.target.value)} value={description}
                                />
                                <br />
                                <br />
                                <label htmlFor="price"><b>Product Price :</b></label><br />
                                <InputNumber
                                    size="large"
                                    placeholder="Enter Product Price"
                                    style={{ width: 300 }}
                                    rules={[{ required: true }]}
                                    onChange={(e) => setPrice(e.target.value)} value={price}
                                />
                                <br />
                                <br />
                                <label htmlFor="image"><b>Product Image :</b></label><br />
                                {/* <Upload name="logo" action="/" listType="picture" onChange={handleProductImg}>
                                    <Button icon={<UploadOutlined />}>Click to upload product image</Button>
                                </Upload> */}
                                <input className="form-control" type="file" id="formFile" onChange={handleProductImg} />
                                <br />
                                <br />
                                {imageError && <><br /><div className="error-msg">{imageError}</div><br /></>}
                                {uploadError && <><br /><div className="error-msg">{uploadError}</div><br /></>}
                                <button type='submit'>Submit</button>
                            </form>
                        </Modal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProducts