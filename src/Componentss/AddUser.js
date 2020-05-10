import React, { Component } from 'react';

class AddUser extends Component {
    constructor(props) {
        super(props);
        this.state={
            id:'',
            name:'',
            tel:'',
            permission:'',
            trangthai:false
        }
    }
    thaydoitrangthai = () => {
        this.setState({
            trangthai: !this.state.trangthai
        });
    }
    
    chucnangthemdong = () =>{
        if(this.state.trangthai === true){
            return <div className="btn btn-outline-info btn-block" onClick={()=>{this.thaydoitrangthai()}}>Đóng</div>
        } else{
            return  <div className="btn btn-outline-info btn-block" onClick={()=>{this.thaydoitrangthai()}}>Thêm</div>
        }

    }
    hienThiForm = () =>{
        if(this.state.trangthai === true){
            return <div className="card text-left">
            <div className="card border-danger mb-3">
              <form method='post'>
              <div className="card-header text-center">Thêm mới thành viên</div>
              <div className="card-body text-danger">
                <div className="form-group">
                  <input className="form-control" name="name" onChange = {(event) => this.themmoidulieu(event)} aria-describedby="helpId" type="text" placeholder="Nhập tên" />
                </div>
                <div className="form-group">
                  <input className="form-control" name="tel" onChange = {(event) => this.themmoidulieu(event)} aria-describedby="helpId" type="text" placeholder="Nhập số liên lạc" />
                </div>
                <div className="form-group">
                  <select className="custom-select" onChange = {(event) => this.themmoidulieu(event)} name = "permission">
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
                  <button className="btn btn-primary btn-block" type="reset" onClick = {(name, tel, permission) => {this.props.add(
                    this.state.name, this.state.tel, this.state.permission
                  )}}>Thêm</button>
                </div>
              </div>
              </form>
            </div> 
          </div>
        }
    }
    themmoidulieu= (event) => {
      const name = event.target.name;
      const value = event.target.value;
      this.setState({
        [name]: value
      });
    }
    render() {

      
        return (
            <div className="col-3">
               {this.chucnangthemdong()}
               {this.hienThiForm()}
            </div>

        );
    }
}

export default AddUser;