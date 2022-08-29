export const FeatureAddition = (addData, objnum) => {
  return {
    type: "FEATURECHA_A_CONTENT",
    addData,
    objnum,
  };
};
export const FeatureDelete = (id, objnum) => {
  return {
    type: "FEATUREDEL_A_CONTENT",
    id,
    objnum,
  };
};
export const FeatureAdd = (name, id, objnum) => {
  console.log(333, name, id, objnum);
  return {
    type: "FEATUREADD_A_CONTENT",
    payload: name,
    id: id,
    objnum,
  };
};
export const ProjAdd = (newData) => {
  //  console.log(a);
  return {
    type: "NEW_A_CONTENT",
    payload: newData,
  };
};
export const ProjDelete = (del) => {
  console.log(del);
  return {
    type: "DEL_A_CONTENT",
    payload: del,
  };
};

export const Changename = (name, id) => {
  return {
    type: "CHA_A_CONTENT",
    payload: name,
    id: id,
  };
};

export const TodoAddition = (id, objnum, name, todoObj) => {
  return {
    type: "TODOLISTCHA_A_CONTENT",
    name,
    objnum,
    id,
    todoObj,
  };
};
export const TodoAdd = ( objnum, name, todoObj) => {
  return {
    type: "TODOADD_A_CONTENT",
    name,
    objnum,
    todoObj,
  };
};

export const TodoDel = (objnum, id, todoObj) => {
  return {
    type: "TODODEL_A_CONTENT",
    id,
    objnum,
    todoObj,
  };
};