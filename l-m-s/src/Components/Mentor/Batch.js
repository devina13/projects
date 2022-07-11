import React, { useState } from 'react'
import { Button, Table, Popover} from "antd";
import { Input } from "antd";
import { Content } from 'antd/lib/layout/layout';
import { SearchOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import Attendance from './Attendance';


function Batch() {
    const [lgShow, setLgShow] = useState(false);


    const [dataSource, setDataSource] = useState([
        {
            no: "1",
            batchID:"#12345",
            batchName:"XYZ",
            technologies:"React",
            startDate:"",
            endDate:'',
            status:'',
            batchStrength:''
        }
    ])
    const columns=[
        {
        key:'1',
        title:'No.',
        dataIndex:'no',
    },
    {
        key:'2',
        title:'Batch ID',
        dataIndex:'batchID',
        

    },
    {
        key:'3',
        title:'Batch Name',
        dataIndex:'batchName',
        

    },
    {
        key:'4',
        title:'Technologies',
        dataIndex:'technologies'
    },
    {
        key:'5',
        title:'Start Date',
        dataIndex:'startDate'

    },
    {
        key:'6',
        title:'End Date',
        dataIndex:'endDate'   
    },
    {
        key:'7',
        title:'Status',
        dataIndex:'status'   
    },
    {
        key: "7",
        title: "Batch Strength",
        dataIndex: "batch_strength",
        align:"Center",
        render:()=>{
          return(
              <>
      <Popover content={content} placement="bottom" className="bg-white border-0">
               <i
                 style={{ crouser:"pointer", fontSize: "20px", color: "#C9A805" }}
                 className="fa-solid fa-triangle-exclamation"
               ></i>
           </Popover>
              <Button className='attendance-btn' onClick={() => setLgShow(true)}>Attendance</Button>
              <img style={{cursor:'pointer',marginLeft:"10px"}} onClick={navigateToMentorEmpList} src='./Assets/Xnix-Line-Right Arrow@2x.png' alt='no'/>
              </>
          )
        }
    }

    ]

    // navigate to nextpage
    let navigate=useNavigate()
    let navigateToMentorEmpList=()=>{
        navigate("/MentorEmployeeList")
    }

    const content = (
        <div>
          <table>
            <tr>
              <th>Initial Strength</th>
              <th id='po1' className="ps-5">100</th>
            </tr>
            <tr>
              <th>Dropout</th>
              <th id='po2' className="ps-5">10</th>
            </tr>
            <tr>
              <th>Terminated</th>
              <th id='po3' className="ps-5">10</th>
            </tr>
            <tr>
              <th>Absconding</th>
              <th id='po4' className="ps-5">10</th>
            </tr>
            <tr>
              <th>Present Strength</th>
              <th id='po5' className="ps-5">70</th>
            </tr>
          </table>
          </div>)


  return (
    <div>
        <Content className="site-layout-background"
        style={{padding: 24, margin: '80px' ,marginTop:'-230px', minHeight: 280, width:'90%' }}>
            <div className='table-header'>
            <div>
          <pre style={{ padding: "5px", color: "#FAA81D" }}>Batch List</pre>
        </div>
        <div className='search-mentor-mod'>
        <Input style={{marginLeft:'350px'}} size="small" placeholder="search" prefix={<SearchOutlined className="site-form-item-icon" />} />

        </div>
            </div>
            <Table columns={columns} dataSource={dataSource} rowSelection={true}></Table>

        </Content>
        {lgShow?<Attendance
              lgShow={lgShow}
              setLgShow={setLgShow}/>:""}
        
    </div>
  )
}

export default Batch