import React from 'react'
import axios from 'axios'
import { Table, Icon, Divider } from 'antd'
import { withRouter } from 'dva/router'
@withRouter
class Test extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      form:{
        editor: null, // 发布时候搜索
        source: null, // 来源
        editSts: null, // 状态
        author: null, // 作者,
        p: 1, // page
        createStartTime: null, // 开始时间
        createEndTime: null, // 结束时间
        sts: 0, // 状态  0：草稿 1 ：已发布 2：资讯库
        colName: null, // 栏目名称
        colId: null, // 栏目id
        tagName: null, // 标签名称
        tagId: null // 标签id
      },
      data:[]
    }
  }
  componentDidMount() {
    axios.post('https://testback.gjmetal.com/api/rest/backend/queryTagAndCate',{}).then(res => {
      // console.log(res)
    })

    axios.post('https://testback.gjmetal.com/api/rest/backend/queryNews', this.state.form).then(res=>{
      // console.log(res.data.dataList)
      this.setState({
        data: res.data.dataList
      })
    })
  }
  handleDelete(newId) {
    let result  = this.state.data.filter(v => v.newId !== newId)
    this.setState({
      data: result
    })
  }
  render() {
    const columuns = [
      {
        title: '文章编号',
        dataIndex: 'newId',
        key: 'newId'
      },
      {
        title: '标题',
        dataIndex: 'title',
        key: 'title',
        render: text => (
          <a href="/list">{text}</a>
        )
      },
      {
        title: '栏目',
        dataIndex: 'col',
        key: 'col'
      },
      {
        title: '标签',
        dataIndex: 'tags',
        key: 'tags'
      },
      {
        title: '获取时间',
        dataIndex: 'gainTime',
        key: 'gainTime'
      },
      {
        title: '作者',
        dataIndex: 'author',
        key: 'author'
      },
      {
        title: '来源',
        dataIndex: 'source',
        key: 'source'
      },
      {
        title: '正文字数',
        dataIndex: 'contentCnt',
        key: 'contentCnt'
      },
      {
        title: '操作',
        dataIndex: 'action',
        key: 'action',
        render: (text, record) => (
          <span>
              <a href="javascript:;">Action</a>
              <Divider type="vertical" />
              <a href="javascript:;" onClick={() => this.handleDelete(record.newId)}>Delete</a>
              <Divider type="vertical" />
              <a href="javascript:;" className="ant-dropdown-link">
                More actions <Icon type="down" />
              </a>
          </span>
        )
      }
    ]
    const rowSelection =  {
      onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
      },
      getCheckboxProps: record => ({
        // disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.title,
      }),
    }
    // const data =
    return (
      <div>
        <h2>this is test page</h2>
        <Table rowKey="newId" bordered={true} rowSelection={rowSelection} dataSource={this.state.data} columns={columuns}/>
      </div>
    )
  }
}

export default Test
