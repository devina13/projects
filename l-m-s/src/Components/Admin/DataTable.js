// import React from "react";
// import { Divider, Radio, Table, Space } from 'antd';
// import { useState } from 'react';
// import { EditFilled, DeleteFilled } from '@ant-design/icons';

// const DataTable = () => {
//   console.log("datatable");

//   const [selectionType, setSelectionType] = useState('checkbox');

//   const rowSelection = {
//     onChange: (selectedRowKeys, selectedRows) => {
//       console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
//     },
//     getCheckboxProps: (record) => ({
//       disabled: record.name === 'Disabled User',
//       // Column configuration not to be checked
//       name: record.name,
//     }),
//   };
//   const dataSource = [
//     {
//       key: "1",
//       name: "Mike",
//       age: 32,
//       address: "10 Downing Street",
//     },
//     {
//       key: "2",
//       name: "John",
//       age: 42,
//       address: "10 Downing Street",
//     },
//   ];

//   const columns = [
//     {
//       title: "No",
//       dataIndex: "Number",
//       key: "number",
//     },
//     {
//       title: "Batch ID",
//       dataIndex: "id",
//       key: "id",
//     },
//     {
//       title: "Batch Name",
//       dataIndex: "batchName",
//       key: "name",
//     },
//     {
//       title: "Mentor Name",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Technologies",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Start Date",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "End Date",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Status",
//       dataIndex: "address",
//       key: "address",
//     },
//     {
//       title: "Action",
//       dataIndex: "address",
//       key: "address",
//       render: (_, record) => (
//         <Space size="small">
//           {/* <a>Invite {record.name}</a> */}
//           <EditFilled />
//           <DeleteFilled />
//         </Space>
//       ),
//     }
//   ];
//   return (
//     <div>
//       <Radio.Group
//         onChange={({ target: { value } }) => {
//           setSelectionType(value);
//         }}
//         value={selectionType}
//       >
//       </Radio.Group>

//       <Divider />

//       <Table
//         rowSelection={{
//           type: selectionType,
//           ...rowSelection,
//         }}
//         columns={columns}
//         dataSource={dataSource}
//         pagination={ false }
//       />
//     </div>
//   );
// };

// export default DataTable;
