import 'bootstrap/dist/css/bootstrap.min.css';
import DefaultLayout from '~/layout/AdminLayout';
import classNames from 'classnames/bind';
import styles from '../AdminPage.module.scss';
import MyButton from '~/components/Button';
import React from 'react';
import { postBook } from '~/api/bookApi';
const cx = classNames.bind(styles);

function ManageBookAdd() {
    const [state, setState] = React.useState({
        title: "",
        author: "",
        bookId: "",
        publisher: "",
        pubYear: "",
        description: "",
        categoryId: "",
        price: "",
        amountInStorage: "",
        urlBook: ""
    })
    const handleSubmit = async () => {
        // store the states in the form data
        postBook(state)
        console.log(state);
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    const [image, setImage] = React.useState(null)

    const onImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
            state.urlBook = event.target.files[0].webkitRelativePath;
        }
    }

    return (<DefaultLayout>
        <div className={cx('manage-book-wrapper')}>
            <div className={cx('header')}>
                <div>
                    <MyButton
                        className={cx('unchosen')}
                        to="/manage-book"
                    >
                        Hiển thị
                    </MyButton>
                    <MyButton
                        className={cx('chosen')}
                        to="/manage-book/add"
                    >
                        Thêm sách
                    </MyButton>
                </div>

            </div>
            <div className={cx('add-view')}>
                <form onSubmit={handleSubmit}>

                    <div className={cx('add-image')}>
                        <div class="row justify-content-center align-items-center g-2">
                            <div class="d-flex justify-content-center">
                                <input type="file" name="urlBook" onChange={onImageChange} class="choose-file" />
                            </div>
                            <div class="d-flex justify-content-center">
                                <img src={image} alt="preview image" style={{ height: '130px' }} />
                            </div>
                        </div>
                    </div>


                    <div className={cx('field')}>
                        <div className="form-group">
                            <label>Tên sách:  </label>
                            <input type="text" name="title" className="form-control" defaultValue={state.title} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('field')}>
                        <div className="form-group">
                            <label>Tác giả: </label>
                            <input type="text" name="author" className="form-control" defaultValue={state.author} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <label>Nhà xuất bản: </label>
                            <input type="text" name="publisher" className="form-control" defaultValue={state.publisher} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <label>Năm xuất bản: </label>
                            <input type="text" name="pubYear" className="form-control" defaultValue={state.pubYear} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('synopsis-field')}>
                        <div className="form-group">
                            <label>Sơ lược: </label>
                            <textarea type="text" name="description" className="form-control" rows="5" defaultValue={state.description} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <label>Giá tiền: </label>
                            <input type="text" name="price" className="form-control" defaultValue={state.price} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <label>Số lượng tồn kho: </label>
                            <input type="text" name="amountInStorage" className="form-control" defaultValue={state.amountInStorage} onChange={handleChange} />
                        </div>
                    </div>
                    <div className={cx('button-field')}>

                        <input type="submit" value="Thêm sách" className="btn btn-primary btn-lg" />

                    </div>
                </form>
            </div>
        </div>
    </DefaultLayout>
    )


}

export default ManageBookAdd;
