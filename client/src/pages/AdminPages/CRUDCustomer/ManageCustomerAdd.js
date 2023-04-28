import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import DefaultLayout from '~/layout/AdminLayout';
import classNames from 'classnames/bind';
import styles from '../AdminPage.module.scss';
import MyButton from '~/components/Button';
import { Form } from 'react-bootstrap';
import { postMember } from '~/api/memberApi';

const cx = classNames.bind(styles);

function ManageCustomerAdd() {
    const [state, setState] = React.useState({
        userId: "",
        fullName: "",
        email: "",
        phoneNum: "",
        registerDate: "",
        address: "",
    })

    const handleSubmit = async () => {
        // store the states in the form data
        postMember(state)
        console.log(state);
    }
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    }

    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <h2>Thêm khách hàng mới</h2>
                <br />
                <Form style={{ margin: "2rem 15rem 2rem 15rem" }} onSubmit={handleSubmit}>
                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <input type="text" placeholder='Họ và tên' name="fullName" className="form-control" required defaultValue={state.fullName} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <input type="text" placeholder='Email' name="email" className="form-control" required defaultValue={state.email} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <input type="text" placeholder='Số điện thoại' name="phoneNum" className="form-control" required defaultValue={state.phoneNum} onChange={handleChange} />
                        </div>
                    </div>

                    <div className={cx('full-field')}>
                        <div className="form-group">
                            <input type="text" placeholder='Địa chỉ' name="address" className="form-control" required defaultValue={state.address} onChange={handleChange} />
                        </div>
                    </div>

                    <div class="row justify-content-center align-items-center g-2">
                        <div class="col d-flex justify-content-center">
                            <MyButton className="btn btn-primary btn-lg" style={{ background: '#0c3b7c' }} to="/member"> Huỷ </MyButton>
                        </div>
                        <div class="col d-flex justify-content-center">
                            <MyButton type="submit" className="btn btn-primary btn-lg"> Thêm </MyButton>
                        </div>
                    </div>
                </Form>
            </div >
        </DefaultLayout >
    )
}

export default ManageCustomerAdd;
