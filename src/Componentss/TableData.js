import React, { Component } from 'react';
import TableDataRow from './TableDataRow';



class TableData extends Component {
  deleteButonClick = (idUser) => {
    this.props.deleteClick(idUser);
  }
    mappingDatauser= () => {
        return this.props.duLieuInRaForm.map((value, key) => {
            return <TableDataRow
              deleteButonClick = {(idUser) => this.deleteButonClick(idUser)}
              isShowFormEdit = {()=>this.props.isChangeEditUserStatus()}
              getEditUserClick = {(user) => this.props.getEditFun(value)}
              id={value.id}
              name={value.name}
              tel={value.tel}
              permission={value.permission} 
              stt={key}  key ={key}/>

        })
    }
    
    render() {
        return (
            <div className="col-9">
  <table className="table table-striped">
    <thead className="thead-inverse">
      <tr>
        <th>STT</th>
        <th>Tên</th>
        <th>SĐT</th>
        <th>Quan Hệ</th>
        <th>Thao Tác</th>
      </tr>
    </thead>
    <tbody>
            {this.mappingDatauser()}
    </tbody>
  </table>
</div>

        );
    }
}

export default TableData;