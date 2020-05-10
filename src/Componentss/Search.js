import React, { Component } from 'react';
import EditUser from './EditUser';

class Search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Tao 1 bien trung gian de luu cac gia tri da nhap
            tempValue:'',
            userObj: {}
        }
    }
    isChange = (event) =>{
        // console.log(event.target.value);
        this.setState({
            tempValue: event.target.value
        });
        this.props.checkConnectProps(this.state.tempValue);
    }
    getEditUserInfo = (info) => {
        this.setState({
            userObj: info
        });
        this.props.getEditUserInfoApp(info);           
    }
    isShowEditUser = () => {
        if(this.props.editUserStatus === true){
            return <EditUser
            getEditUserInfo = {(info) => this.getEditUserInfo(info)}
            editUserObjectFun = {this.props.editUserObject}
            isShowFormEdit = {this.props.isChangeEditUserStatus}
            />
        }
    }
    render() {
        return (
        <div>
            <div className="col-12">
                <div className="row">
                    {this.isShowEditUser()}
                </div>
            <div className="form-group">
            <div className="btn-group">
                <input type="text" className="form-control" onChange = {(event) =>{this.isChange(event)}}  placeholder="Nhập tên cần tìm ..." style={{width: '600px'}} />
                <div className="btn btn-info" onClick = {(dl)=>this.props.checkConnectProps(this.state.tempValue)}>Tìm</div>
            </div>
            </div>
            </div>
            
        </div>
        );
    }
}

export default Search;