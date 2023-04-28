import classNames from 'classnames/bind';

import styles from './AdminPage.module.scss';
import DefaultLayout from '~/layout/AdminLayout/index.js';
import SlideShow from '~/components/SlideShow/SlideShow.js';
import Slide from '~/components/Slide/Slide.js';
import Features from '~/components/admin/Features/Features';

const cx = classNames.bind(styles);
const adminFeatures = [
    {
        name: 'Quản lý sách',
        description: 'Thêm, sửa, xóa, cập nhật thông tin sách trên trang web',
        goto: '/manage-book',
    },
    {
        name: 'Quản lý đơn hàng',
        description: 'Xem danh sách đơn hàng, xác nhận đơn hàng,cập nhật trạng thái đơn hàng',
        goto: '/manage-order',
    },
    {
        name: 'Quản lý thành viên',
        description: 'Xem danh sách khách hàng thành viên và thông tin của họ',
        goto: '/member',
    },
    {
        name: 'Trang giao diện khách hàng',
        description: 'Truy cập trang giao diện khách hàng với tư cách là admin',
        goto: '/',
    },
];
function Home() {
    return (
        <DefaultLayout>
            {/* Slide show banner */}
            <SlideShow
                slides={[
                    <Slide image={require('~/assets/images/bg1.jpg')} className={cx('report')}>
                        <h2 className={cx('report-heading')}>Trong tháng 10 vừa qua</h2>
                        <div className={cx('report-info')}>
                            <h3>
                                Đã có tổng cộng <span className={cx('num-order')}>100 </span> đơn hàng, tổng doanh thu
                                là <span className={cx('total-turnover')}>53,905,000 ₫</span>
                            </h3>
                        </div>
                    </Slide>,

                    <Slide image={require('~/assets/images/bg1.jpg')}>
                        <h2 className='p-4 pt-5'
                            style={{ color: '#89375F' }}>
                            Có thêm 11 khách hàng thành viên mới
                        </h2>
                    </Slide>,
                    <Slide image={require('~/assets/images/bg1.jpg')}>
                        <div className='p-4 pt-5'
                            style={{ color: '#D14D72' }}>
                            <h1>
                                Khuyến mãi 20%
                            </h1>
                            <h3>
                                cho đơn hàng trên 200,00Đ
                            </h3>
                        </div>

                    </Slide>,
                    <Slide image={require('~/assets/images/bg1.jpg')}>
                        <div className='p-4 pt-5'
                            style={{ color: '#89375F' }}>
                            <h1>
                                Tặng kèm
                            </h1>
                            <h2>
                                voucher + bookmark + sổ tay
                            </h2>
                            <h3>
                                cho đơn hàng trên 500,000Đ
                            </h3>
                        </div>
                    </Slide>,
                ]}
            />

            {/* list Feature */}
            <Features features={adminFeatures} />
        </DefaultLayout>
    );
}

export default Home;
