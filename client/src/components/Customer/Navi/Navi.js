import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const cates = ['Hài hước', 'Kinh dị', 'Đời thường', 'Bí ẩn', 'Học đường', 'Khoa học', 'Trẻ em', 'Manga']

function Navi() {
  return (
    <div className="container py-2 border-bottom">
      <div className='d-flex -align-items-center'>
        <div class="dropdown">
          <button
            class="btn btn-warning "
            type="button"
            id="dropdownMenu2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <FontAwesomeIcon icon={faBars} className="mr-2" /> Danh mục
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
            {cates.map((cate, index) => (
              <li key={index} className=''>
                <button class="dropdown-item py-3" type="button">
                  {cate}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="d-flex justify-content-between">
          <button className='mx-3 py-2 px-3 btn btn-light'>
            <Link to="#">Hot Deal</Link>
          </button>
          <button className='mx-3 py-2 px-3 btn btn-light'>
            <Link to="#">Sách mới</Link>
          </button>
          <button className='mx-3 py-2 px-3 btn btn-light'>
            <Link to="#">Bán chạy</Link>
          </button>
        </div>
      </div>
    </div>

  );
}

export default Navi;
