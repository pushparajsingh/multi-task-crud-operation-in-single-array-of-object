import React, { useState } from "react";
import { Button, Table } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { FcPlus } from "react-icons/fc";
import { TodoAdd, TodoAddition, TodoDel } from "../redux/action/action";
import { useParams } from "react-router-dom";
const Todolistshow = () => {
  const data = useSelector((state) => state.rootReducer.data);
  const { index, i} = useParams();
  console.log(index,i)
  const [name, setname] = useState({
    projname: "",
    id: null,
    projAdd: "",
  });
  const objnum = index;
  const todoObj = i;
  const tododata = data[objnum].feature[todoObj].todo.map((value) => value);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <h1 style={{ color: "white" }}>Todolist</h1>
      <div className="box">
        <br />
        <h2>todolist</h2>
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
            onClick={() =>
              dispatch(TodoAddition(name.id, objnum, name.projname, todoObj))
            }
          >
            Save
          </Button>
          <br />
          <br />
          <hr />
          <div className="over">
            <Table>
              <tbody>
                {tododata?.map((value, order) => {
                  return (
                    <>
                      <tr key={order} className="prj">
                        <td align="left">
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
                            onClick={() =>
                              dispatch(TodoDel(objnum, value.id, todoObj))
                            }
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
            <FcPlus
              id="fix"
              onClick={() => {
                dispatch(TodoAdd(objnum, name.projAdd, todoObj));
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todolistshow;
