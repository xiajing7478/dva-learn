import React from 'react';
import PropTypes from 'prop-types';
import { Table, Popconfirm, Button, Modal } from 'antd';

const List = ({ onDelete, lists }) => {
  console.log('2', lists)
  // this.state = { visible: false }
  // function showModal() {
  //   this.setState(
  //     {visible: true}
  //   )
  // }
  // function handleCancel(e) {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }
  // function handleOk(e) {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // }
  const columns = [
    {
      title: 'Id',
      dataIndex: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
    }, {
      title: 'Actions',
      render: (text, record) => {
        return (
          <div>
            <Popconfirm title="Delete?" onConfirm={() => onDelete(record.id)}>
              <Button>Delete</Button>
            </Popconfirm>
            {/*<Button type="primary" onClick={() => showModal()}>修改</Button>*/}
            {/*<Modal title="Basic Modal" onOk={() => handleOk}*/}
                   {/*onCancel={() => handleCancel}*/}
                   {/*visible={this.state.visible}*/}
            {/*/>*/}
          </div>
        );
      },
    }];
  return (
    <Table
      dataSource={lists}
      columns={columns}
      pagination = {{ pageSize: 6}}
    />
  );
};

List.propTypes = {
  onDelete: PropTypes.func.isRequired,
  lists: PropTypes.array.isRequired,
};
export default List
