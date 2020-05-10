import React, { Component } from 'react';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import DataUser from './Data.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: DataUser,
      searchText:'',
      editUserStatus: false,
      editUserObject:{}

    }
  }
 
  getTextSearch = (dl) =>{
    this.setState({
      searchText:dl
    });
  }
  getNewUserData = (name, tel, permission) => {
    console.log('Thêm thành viên thành công');
    var item = {}
    item.id= '';
    item.name = name;
    item.tel = tel;
    item.permission = permission;
    var items = this.state.data;
    // du lieu vua them se cho vao dl cua component bo
    items.push(item);
    this.setState({
      data: items
    });
    // console.log(this.state.data); 
  }
  getEditUser = (user) => {
    // console.log('Lấy dữ liệu thành công');
    this.setState({
      editUserObject: user
    });
    //console.log(user);

  }
  isChangeEditUserStatus = () => {
    this.setState({
      editUserStatus : !this.state.editUserStatus
    });
  }
  getEditUserInfoApp = (info) => {
    this.state.data.forEach((value,key)=>{
      if(value.id === info.id){
        value.name = info.name;
        value.tel = info.tel;
        value.permission = info.permission;

      }
    })
  }
  deleteClick = (idUser) => {
    // Tao 1 data moi roi loc nhung id k thoa man thanh 1 data moi
    var tempData = this.state.data.filter( item => item.id !== idUser);
    this.setState({
      data:tempData
    })
    
  }

  render() {
    var ketqua=[];
    this.state.data.forEach((item)=>{
      if(item.name.indexOf(this.state.searchText) !== -1){
        ketqua.push(item);
      }
    })
    // console.log(ketqua);
    return (
      <div>
      <Header/>
      <div className="formSeach">
        <div className="container">
          <div className="row">
            <Search
            getEditUserInfoApp = {(info) => {this.getEditUserInfoApp(info)}}
            editUserObject = {this.state.editUserObject}
             isChangeEditUserStatus = {() => this.isChangeEditUserStatus()}
            editUserStatus = {this.state.editUserStatus}
             checkConnectProps = {(dl) => {this.getTextSearch(dl)}} />
            <div className="col-12">
              <hr />
            </div>
            <TableData 
            deleteClick = {(idUser) => {this.deleteClick(idUser)}}
            isChangeEditUserStatus = {() => this.isChangeEditUserStatus()}
            getEditFun = {(user) => this.getEditUser(user)} 
            duLieuInRaForm = {ketqua}/>
            <AddUser add = {(name, tel, permission) => {this.getNewUserData(name, tel, permission)}}/>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default App;