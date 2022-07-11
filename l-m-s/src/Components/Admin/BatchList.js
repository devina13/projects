import React, { useState } from "react";
import { DatePicker, Button, Modal, Select, Table } from "antd";
import { Header } from "antd/lib/layout/layout";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";
// import { Button } from '@mui/material';
import { Content } from 'antd/lib/layout/layout';


// const { Content } = Layout;

function BatchList() {
  const [isEditing, setIsEditing] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [dataSource, setDataSource] = useState([
      {
          batch_name: "",
          mentor_name:"",
          technologies:"",
          startdate:"",
          enddate:""

      }
  ])
  const columns=[
      {
      key:'1',
      title:'No.',
      dataIndex:'no'
  },
  {
      key:'2',
      title:'Batch ID',
      dataIndex:'batchID'
  },
  {
      key:'3',
      title:'Batch Name',
      dataIndex:'batchName'
  },
  {
      key:'4',
      title:'Mentor Name',
      dataIndex:'mentorName'
  },
  {
      key:'5',
      title:'Technologies',
      dataIndex:'technologies'
  },
  {
      key:'6',
      title:'Start Date',
      dataIndex:'startDate'
  },
  {
      key:'7',
      title:'End Date',
      dataIndex:'endDate'
  },
  {
      key:'8',
      title:'Status',
      dataIndex:'status'
  },
  {
      key: "9",
      title: "Actions",
      render: (record) => {
        return (
          <>
           <i onClick={() => {
                onEditStudent(record);
              }} className="fa-solid fa-pencil"/>
            <i onClick={() => {
                onDeleteStudent(record);
              }}
              style={{marginLeft: 15 }} className="fa-solid fa-trash"></i>
          </>
        );
      },
  },    
]


const onAddStudent = () => {
  const randomNumber = parseInt(Math.random() * 1000);
  const newStudent = {
    no:``,
    id: randomNumber,
    batch_id: "Name " + randomNumber,
    batch_name: randomNumber + "@gmail.com",
    address: "Address " + randomNumber,
  };
  setDataSource((pre) => {
    return [...pre, newStudent];
  });
};
const onDeleteStudent = (record) => {
  Modal.confirm({
    title: "Are you sure, you want to delete this batch record?",
    okText: "Yes",
    okType: "danger",
    onOk: () => {
      setDataSource((pre) => {
        return pre.filter((student) => student.id !== record.id);
      });
    },
  });
};
const onEditStudent = (record) => {
  setIsEditing(true);
  setEditingStudent({ ...record });
};
const resetEditing = () => {
  setIsEditing(false);
  setEditingStudent(null);
};

// ADDING
const [modal1Visible, setModal1Visible] = useState(false);
// dropDown
const mentors=["Satyam","xyz","abc"]
const techno=["HTML","CSS","Java Script","React JS","JAVA+Spring Boot","Node & Express JS"]
// DATE
const [startDate, setstartDate] = useState(null)
const [endDate, setendDate] = useState(null)
return (
  <div>
      <Content 
            className="site-layout-background"
            style={{padding: 24, margin: '80px' ,marginTop:'-230px', minHeight: 280, width:'90%' }}>
                  <div className='localsearch'>
                  <div style={{}}><pre style={{padding:"5px" , color:'#FAA81D'}}>Batch List</pre></div>
                  <div style={{marginLeft:'450px', display:'flex'}}>
                  <div className='search'>
                  <Input size="medium" placeholder="Search" prefix={<SearchOutlined className="site-form-item-icon" />}/>
                  </div>
                  <div style={{marginLeft:'30px', textAlign:'center'}}> 
                  <Button type="button" className="btn btn-warning btn-sm" id='add-b' onClick={()=>{setModal1Visible(true)}}>+ New Batch</Button>
                  </div>
                  </div>
                  </div>
              <Table columns={columns} dataSource={dataSource} rowSelection={true}></Table>
              </Content>
              <Modal
        title="Edit Student"
        visible={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((student) => {
              if (student.id === editingStudent.id) {
                return editingStudent;
              } else {
                return student;
              }
            });
          });
          resetEditing();
        }}
      >
       <p style={{color:"#707070",margin:"5px"}}>Batch Name</p>
        <Input
          value={editingStudent?.name}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, name: e.target.value };
            });
          }}
        />
         <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
        <Input
          value={editingStudent?.email}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, email: e.target.value };
            });
          }}
        />
         <p style={{color:"#707070",margin:"5px"}}>Technologies</p>
        <Input
          value={editingStudent?.address}
          onChange={(e) => {
            setEditingStudent((pre) => {
              return { ...pre, address: e.target.value };
            });
          }}
        />
          <br/>
     <br/>
     <p style={{color:"#707070",margin:"5px"}}>Start Date</p>
        <DatePicker style={{width:"100%"}}
        selected={startDate}
        onChange={date=> setstartDate(date)}
        dateFormat=''
        showYearDropdown/>
    
     <br/>
     <br/>
     <p style={{color:"#707070",margin:"5px"}}>End Date</p>
        <DatePicker style={{width:"100%"}}
        selected={endDate}
        onChange={date=> setendDate(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        showYearDropdown/>
      </Modal>
          

          {/* To Add */}
          <Modal 
          title="Add new batch" visible={modal1Visible}
      onOk={() => setModal1Visible(false)}
      onCancel={() => setModal1Visible(false)}
    >
      <p style={{color:"#707070",margin:"5px"}}>Batch Name</p>
     <Input size="large" placeholder=""/>
     <p style={{color:"#707070",margin:"5px"}}>Mentor Name</p>
      <Select style={{width:"100%"}} placeholder="">{mentors.map((ment,idx)=>{
        return <Select.Option key={idx} value={ment}>{ment}</Select.Option>
      })}</Select>
     <p style={{color:"#707070",margin:"5px"}}>Technologies</p>
      <Select mode='multiple' style={{width:"100%",}} placeholder="">{techno.map((techno,idx)=>{
        return <Select.Option key={idx} value={techno}><button className='drop'>{techno}</button></Select.Option>
      })}</Select>
     
     <br/>
     <br/>
     <p style={{color:"#707070",margin:"5px"}}>Start Date</p>
        <DatePicker style={{width:"100%"}}
        selected={startDate}
        onChange={date=> setstartDate(date)}
        dateFormat=''
        showYearDropdown/>
    
     <br/>
     <br/>
     <p style={{color:"#707070",margin:"5px"}}>End Date</p>
        <DatePicker style={{width:"100%"}}
        selected={endDate}
        onChange={date=> setendDate(date)}
        dateFormat='dd/MM/yyyy'
        minDate={new Date()}
        showYearDropdown/>
    </Modal>
  </div>
)
}

export default BatchList
