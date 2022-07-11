import React from "react";

import { Typography } from "@mui/material";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
function Attendance({lgShow,setLgShow}) {
  debugger
  console.log(lgShow);
  // const handleHide = () => {
  //   props.handleClose();
  // };
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const dataSource = [
    {
      key: "1",
      no: "1",
      employee_id: 123,
      employee_name: "Dimpy",
    },
    {
      key: "2",
      no: "2",
      employee_id: 456,
      employee_name: "Kiara",
    },
  ];
  const columns = [
    {
      title: "No",
      dataIndex: "no",
      key: "no",
    },
    {
      title: "Employee ID",
      dataIndex: "employee_id",
      key: "employee_id",
    },
    {
      title: "Employee Name",
      dataIndex: "employee_name",
      key: "employee_name",
    },
    // {
    //   title: "Attendance",
    //   dataIndex: "attendance",
    //   key: "attendance",
    //   render: () => {
    //     return (
    //       <div className="switchclr">
    //         <p>M</p>
    //         <Switch defaultChecked onChange={onChange} />
    //         <p>N</p>
    //         <Switch defaultChecked onChange={onChange} />
    //       </div>
    //     );
    //   },
    // },
  ];

  return (
    <div>
      {/* <Modal
      
        size="lg"
        show={lgShow}
        // onHide={handleHide}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton={()=>{setLgShow(false)}}>
          <Modal.Title className="heading" id="example-modal-sizes-title-lg">
            Attendance for (dd-MM-yyyy)
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Table dataSource={dataSource} columns={columns} pagination={false} />
        </Modal.Body>
        <Modal.Footer>
          <Button>Submit</Button>
        </Modal.Footer>
      </Modal> */}

<Modal
  open={lgShow}
  onClose={()=>{setLgShow(false)}}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
    <Typography id="modal-modal-title" variant="h6" component="h2">
      Text in a modal
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
    </Typography>
  </Box>
</Modal>
    </div>
  );
}

export default Attendance;


