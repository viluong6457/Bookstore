import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import DefaultLayout from '~/layout/AdminLayout';
import classNames from 'classnames/bind';
import styles from './AdminPage.module.scss';
import MyButton from '~/components/Button';
import { Table } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown';
import { getMemberLists, deleteMember } from '~/api/memberApi';
import { useEffect, useReducer, useState } from 'react';
import DropdownToggle from 'react-bootstrap/esm/DropdownToggle';
import DropdownMenu from 'react-bootstrap/esm/DropdownMenu';
import DropdownItem from 'react-bootstrap/esm/DropdownItem'
import reducer from './PageReducer/orderReducer';
import { setPage, gotoFirstPage, gotoLastPage, setNumberLine } from './PageReducer/action';

const cx = classNames.bind(styles);

function ManageCustomerView() {
    const [userLists, setMemberLists] = useState([]);
    const [records, setRecords] = useState([]);

    let sum = userLists.length;

    const initState = {
        currentPage: 1,
        numberLine: 10,
        listOrder: userLists,
    };

    const [state, dispatch] = useReducer(reducer, initState);

    const loadData = async () => {
        return await getMemberLists().then((res) => setMemberLists(res));
    };
    useEffect(() => {
        loadData();
    }, []);

    useEffect(() => {
        console.log(state);
        let from = (state.currentPage - 1) * state.numberLine;
        let to = state.currentPage * state.numberLine;
        if (to > userLists.length) {
            to = userLists.length;
        }
        setRecords(userLists.slice(from, to));
    }, [state, userLists]);

    console.log(records);
    let pages = userLists.length; // = orderList.length ;

    const [query, setQuery] = useState('');

    return (
        <DefaultLayout>
            <div className={cx('member-wrapper')}>
                <h1 className={cx('heading')} > Danh sách khách hàng</h1>
                <br></br>

                <div class="row justify-content-center align-items-center g-2 m-3">
                    <div class="col-md-4 d-flex justify-content-center">
                        <span className={cx('total')}>{sum} khách hàng</span>
                    </div>
                    <div class="col-sm-8 d-flex justify-content-center">

                        <MyButton className={cx('btn btn-primary ms-auto')} to="./add">
                            Thêm khách hàng
                        </MyButton>
                    </div>
                </div>

                <div >
                    <Table bordered hover className={cx('tableview')}>
                        <thead>
                            <tr>
                                <th className="text-center">Họ và tên</th>
                                <th className="text-center">Ngày đăng ký</th>
                                <th className="text-center">Địa chỉ</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Số điện thoại</th>
                                <th className="text-center"></th>
                            </tr>
                        </thead>
                        {records
                            .filter((post) => {
                                if (query === '') {
                                    return post;
                                } else if (
                                    post.title.toLowerCase().includes(query.toLowerCase()) ||
                                    post.author.toLowerCase().includes(query.toLowerCase())
                                ) {
                                    return post;
                                }
                            })
                            .map((item, index) => (
                                <tbody key={index}>
                                    <tr>
                                        <td className="text-center">{item.fullName}</td>
                                        <td className="text-center">{item.registerDate}</td>
                                        <td className="text-center">{item.address}</td>
                                        <td className="text-center">{item.email}</td>
                                        <td className="text-center">{item.phoneNum}</td>
                                        <td className="text-center">
                                            <MyButton
                                                class="btn btn-outline-danger"
                                                onClick={() => {
                                                    deleteMember(item.userId);
                                                    window.location.reload(false);
                                                }}
                                            >
                                                <FontAwesomeIcon icon={faTrash} />
                                            </MyButton>
                                        </td>
                                    </tr>
                                </tbody>
                            ))}
                    </Table>

                </div>

                <div className={cx('bottom-pagination')}>
                    <Dropdown className={cx('dropdown-custom')}>
                        <DropdownToggle className={cx('title')}>
                            <span>{state.numberLine}</span> dòng
                        </DropdownToggle>
                        <DropdownMenu className={cx('menu')}>
                            {[10, 20, 30, 50].map((item, index) => (
                                <DropdownItem
                                    key={index}
                                    className={cx('menu-item')}
                                    active={state.numberLine === item}
                                    onClick={() => dispatch(setNumberLine(item))}
                                >
                                    <span>{item}</span> dòng
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <MyButton
                        className={cx('pagination-btn')}
                        disabled={state.currentPage === 1}
                        onClick={() => dispatch(gotoFirstPage())}
                    >
                        Trang đầu
                    </MyButton>{' '}
                    <Dropdown className={cx('dropdown-custom')}>
                        <DropdownToggle className={cx('title')}>{state.currentPage}</DropdownToggle>
                        <DropdownMenu className={cx('menu')}>
                            {Array.from(Array(Math.floor(pages / state.numberLine) + 1).keys()).map((i) => (
                                <DropdownItem
                                    key={i}
                                    className={cx('menu-item')}
                                    active={state.currentPage === i + 1}
                                    onClick={() => dispatch(setPage(i + 1))}
                                >
                                    {i + 1}
                                </DropdownItem>
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                    <MyButton
                        className={cx('pagination-btn')}
                        disabled={state.currentPage === pages}
                        onClick={() => dispatch(gotoLastPage(Math.floor(pages / state.numberLine) + 1))}
                    >
                        Trang cuối
                    </MyButton>{' '}
                </div>

            </div >
        </DefaultLayout >
    )
}

export default ManageCustomerView;
