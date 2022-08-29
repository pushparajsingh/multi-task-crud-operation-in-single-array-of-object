import React, { useState } from "react";
import { Button, Table } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import { Changename,ProjDelete,ProjAdd } from "../redux/action/action";
import { useNavigate } from "react-router-dom";
const Projectshow = () => {
  const data = useSelector((state) => state.rootReducer.data);
  const dispatch = useDispatch();
  const Router = useNavigate();
  const [name, setname] = useState({
    projname: "",
    id: null,
    projAdd:""
  });

  const save = () => {
    // console.log(name);
    dispatch(Changename(name.projname, name.id));
  };

  return (
    <div>
      <br />
      <h1 style={{ color: "white" }}>Projects</h1>
      <div className="box">
        <br />
        <h2>Projects</h2>
        <br />
        <div className="box2">
          <input
            type={"text"}
            placeholder="Enter Project Name"
            className="bold"
            value={name.projname}
            onChange={(e) => setname({ ...name, projname: e.target.value })} //must write ...name
          />
          &nbsp;&nbsp;
          <Button variant="contained" color="warning" onClick={() => save()}>
            Save
          </Button>
          <br />
          <br />
          <hr />
          <div className="over">
            <Table>
              <tbody>
              
                {data?.map((value, index) => {
                  return (
                    <>
                      <tr key={index} className="prj">
                        <td align="left" onClick={() => Router(`/feature/${index}`)}>
                          &nbsp;&nbsp;
                          {value.id})&nbsp;
                          {value.name}
                        </td>
                        <td>
                          <AiFillEdit
                            onClick={() => {
                              setname({ projname: value.name, id: value.id });
                            }}
                          />
                          &nbsp;&nbsp;&nbsp;
                          <AiFillDelete
                            style={{ color: "red" }}
                            onClick={() => dispatch(ProjDelete(value.id))}
                          />
                        </td>
                      </tr>
                      <br />
                    </>
                  );
                })}
              </tbody>
            </Table>
            <input type="text" id="position" placeholder="Add A Project Name" onChange={(e)=>{setname({...name,projAdd:e.target.value})}}/>
            <FcPlus id="fix" onClick={()=>dispatch(ProjAdd(name.projAdd))}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projectshow;
