import React from "react";


function SideMenu(props) {

  let sendData= (val) => {
    props.receivedData(val)


  }


  return (
    <div>
      <nav id="sidebarMenu"
        className="collapse d-lg-block sidebar collapse bg-white">
        <div className="card" style={{ width: "18rem", cursor:"pointer" }}>

          <div>
            {props.data.map((val,idx) => {
              return(
                <div key={idx}>
                  <img src={val.img} className="card-img-top" alt="..." onClick={()=>{sendData(val)}} />
          <div className="card-body">
            <h5  className="card-title">{val.name}</h5>
          </div>
                </div>
              )
            })}
          </div>
        </div>
      </nav>
    </div>
  );
}

export default SideMenu;
