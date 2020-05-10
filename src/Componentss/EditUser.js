import React, { Component } from 'react';

class EditUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            // khởi tạo các biến để lưu giá trị đã sửa
            id: this.props.editUserObjectFun.id,
            name: this.props.editUserObjectFun.name,
            tel: this.props.editUserObjectFun.tel,
            permission: this.props.editUserObjectFun.permission
        }
    }
    // Đưa dữ liệu lên component search
    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permission = this.state.permission;

        this.props.getEditUserInfo(info);
        this.props.isShowFormEdit();
    }

    
    // Lấy dữ liệu được sửa đổi
    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });

    }

    render() {   
        return (
<div className="card text-left mt-3">
                    <div className="card border-danger mb-3">
                        <div className="card-header text-center">Sửa thông tin thành viên </div>
                        <div className="card-body text-danger">
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObjectFun.name} name='name' type="text" className="form-control" name="name" aria-describedby="helpId" placeholder="Nhập tên" />
                        </div>
                        <div className="form-group">
                            <input onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObjectFun.tel} name='tel' type="text" className="form-control" name="tel" aria-describedby="helpId" placeholder="Nhập số liên lạc" />
                        </div>
                        <div className="form-group">
                            <select onChange={(event) => this.isChange(event)} defaultValue={this.props.editUserObjectFun.permission} name='permission' className="custom-select" name="permission"> 
                            <option>Quan Hệ</option>
                            <option value={1}>Bố</option>
                                <option value={2}>Mẹ</option>
                                <option value={3}>Con Trai</option>
                                <option value={4}>Con Dâu</option>
                                <option value={5}>Cháu Trai</option>
                                <option value={6}>Con Gái</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <button type="button" className="btn btn-warning btn-block" onClick={() => this.saveButton()} >Lưu</button>
                        </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default EditUser;