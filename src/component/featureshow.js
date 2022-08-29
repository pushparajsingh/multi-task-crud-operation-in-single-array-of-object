import React, { useState } from "react";
import { Button, Table } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import {
  FeatureAdd,
  FeatureDelete,
  FeatureAddition,
} from "../redux/action/action";
import { useNavigate, useParams } from "react-router-dom";
const FeatureShow = () => {
  const data = useSelector((state) => state.rootReducer.data);
  const dispatch = useDispatch();
  var {index} = useParams()
   const [name, setname] = useState({
     projname: "",
     id: null,
     projAdd: "",
   });
   const Navigate = useNavigate(); 
   var objnum = index;
  const feature = data[objnum].feature.map((value) => value);
  return (
    <div>
      <br />
      <h1 style={{ color: "white" }}>Feature</h1>
      <div className="box">
        <br />
        <h2>Feature</h2>
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
          <Button
            variant="contained"
            color="warning"
            onClick={() => dispatch(FeatureAdd(name.projname, name.id, objnum))}
          >
            Save
          </Button>
          <br />
          <br />
          <hr />
          <div className="over">
            <Table>
              <tbody>
                {feature?.map((value, i) => {
                  return (
                    <>
                      <tr key = {i} className="prj">
                        <td align="left" onClick={()=>{Navigate(`/todolist/${index}/${i}`)}}>
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
                            onClick={() => dispatch(FeatureDelete(value.id,objnum))}
                          />
                        </td>
                      </tr>
                      <br />
                    </>
                  );
                })}
              </tbody>
            </Table>
            <input
              type="text"
              id="position"
              placeholder="Add A Project Name"
              onChange={(e) => {
                setname({ ...name, projAdd: e.target.value });
              }}
            />
            <FcPlus id="fix" onClick={()=>{dispatch(FeatureAddition(name.projAdd,objnum));}}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureShow;
