import { useState } from 'react';
import { UploadOutlined } from "@ant-design/icons"
import { Button, Modal, Input, InputNumber, Upload } from 'antd';

const AllProducts = () => {
    const [open, setOpen] = useState(false);
    const { TextArea } = Input;
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
                            okText="Submit"
                        >
                            <br />
                            <label htmlFor="text"><b>Product Title :</b></label><br />
                            <Input
                                size="large"
                                placeholder="Enter Product Title"
                                style={{
                                    width: 300,
                                }}
                            // value={text}
                            />
                            <br />
                            <br />
                            <label htmlFor="text"><b>Product Description :</b></label><br />
                            <TextArea rows={3} size="large" placeholder="Enter Product Description" style={{ width: 300 }} />
                            <br />
                            <br />
                            <label htmlFor="price"><b>Product Price :</b></label><br />
                            <InputNumber size="large" placeholder="Enter Product Price" style={{ width: 300 }} />
                            <br />
                            <br />
                            <label htmlFor="image"><b>Product Image :</b></label><br />
                            <Upload name="logo" action="/" listType="picture">
                                <Button icon={<UploadOutlined />}>Click to upload product image</Button>
                            </Upload>
                        </Modal>
                    </div>
                </div>
            </div>

        </>
    )
}

export default AllProducts