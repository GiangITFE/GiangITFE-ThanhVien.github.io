import React, { Component } from 'react';

class TableDataRow extends Component {
    phanQuyen = () => {
        if(this.props.permission === 1){
            return "Bố";
        } else if(this.props.permission === 2){
            return "Mẹ";
        } 
        else if(this.props.permission === 3){
            return "Con Trai";
        }
        else if(this.props.permission === 4){
            return "Con Dâu";
        } 
        else if(this.props.permission === 5){
            return "Cháu Trai";
        } 
        
        else{
            return "Cháu Gái";
        }
    }
    editUserFun = () => {
        this.props.getEditUserClick();
        this.props.isShowFormEdit();
    }
    deleteButonClick = (idUser) => {
        this.props.deleteButonClick(idUser);   
    }

    render() {
        return (
            <tr>
            <td >{this.props.stt+1}</td>
            <td> {this.props.name}</td>
            <td>{this.props.tel}</td>
            <td>
                {this.phanQuyen()}
            </td>
            <td>
              <div className="btn-group">
                <div className="btn btn-warning sua" onClick={() => this.editUserFun()}><i className="fa fa-edit"/>Edit</div>
                {/* <div className="btn btn-danger xoa" onClick={(idUser) => this.deleteButonClick(this.props.id)}><i className="fa fa-delete" />Delete</div> */}
              </div>
            </td>
          </tr>
        );
    }
}

export default TableDataRow;