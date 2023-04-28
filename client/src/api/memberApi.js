import axios from 'axios';

export const getMemberLists = async () => {
    return await axios.get('http://localhost:8080/api/member').then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const getMemberById = async (id) => {
    return await axios.get(`http://localhost:8080/api/member/${id}`).then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const postMember = async (props) => {
    return await axios.post(`http://localhost:8080/api/member`, props).then((res) => { console.log('Thêm thành công') }).catch((err) => alert('Đã xảy ra lỗi', err));;
}

export const searchMembers = async (props) => {
    return await axios.get(`http://localhost:8080/api/member/advanced`, props).then((res) => res.data).catch((err) => alert('Đã xảy ra lỗi', err));;
}

export const updateMember = async (id, props) => {
    return await axios.put(`http://localhost:8080/api/member/${id}`, props).then((res) => { console.log('Cập nhật thành công') }).catch((err) => alert('Đã xảy ra lỗi', err));;
};

export const deleteMember = async (id) => {
    return await axios.delete(`http://localhost:8080/api/member/${id}`).then((res) => { console.log('Xóa thành công') }).catch((err) => alert('Đã xảy ra lỗi', err));;
};
