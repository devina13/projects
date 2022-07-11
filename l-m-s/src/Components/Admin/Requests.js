import { Button, Input, Table } from 'antd'
import { Content } from 'antd/lib/layout/layout'
import React from 'react'
import { SearchOutlined } from '@ant-design/icons';

function Requests() {
  const columns=[
    {
      key:'1',
      title:'No.',
      dataIndex:'no'
    },
    {
      key:'2',
      title:'Employee ID',
      dataIndex:'empid'
    },
    {
      key:'3',
      title:'Employee Name',
      dataIndex:'emp-name'
    },
    {
      key:'4',
      title:'YOP',
      dataIndex:'yop' 
    },
    {
      key:'5',
      title:'Percentage',
      dataIndex:'percentage'
    },
    {
      key:'6',
      title:'Experience',
      dataIndex:'experience'
    },
    {
      key:'7',
      title:'Contact No.',
      dataIndex:'contact'
    },
    {
      key:'5',
      title: "Actions",
      // render: (record) => {
      //   return (
      //     <>
      //      <i onClick={() => {
      //           onEditStudent(record);
      //         }} className="fa-solid fa-pencil"/>
      //       <i onClick={() => {
      //           onDeleteStudent(record);
      //         }}
      //         style={{marginLeft: 15 }} className="fa-solid fa-trash"></i>
      //     </>
      //   );
      // },
    }
  ]
  return (
    <div>
      <Content 
              className="site-layout-background"
              style={{padding: 24, margin: '80px' ,marginTop:'-230px', minHeight: 280, width:'90%' }}>
                    <div className='localsearch'>
                    <div style={{}}><pre style={{padding:"5px" , color:'#FAA81D'}}>Mentors List</pre></div>
                    <div style={{marginLeft:'450px', display:'flex'}}>
                    <div className='search'>
                    <Input size="medium" placeholder="Search" prefix={<SearchOutlined className="site-form-item-icon" />}/>
                    </div>
                    <div style={{marginLeft:'30px', textAlign:'center'}}> 
                    <Button type="button" className="btn btn-warning btn-sm" id='add-b' onClick={()=>{}}>+ New Batch</Button>
                    </div>
                    </div>
                    </div>
                <Table columns={columns} rowSelection={true}></Table>
                </Content>
    </div>
  )
}

export default Requests