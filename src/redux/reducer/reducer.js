const initialState = {
  data: [
    {
      id: 1,
      name: "project 1",
      feature: [
        {
          id: 1,
          name: "Feature 1",
          todo: [
            { id: 1, name: "todo list 1" },
            { id: 2, name: "todo list 2" },
          ],
        },
        {
          id: 2,
          name: "Feature 2",
          todo: [
            { id: 1, name: "second todo list 1" },
            { id: 2, name: "second todo list 2" },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "project 2",
      feature: [
        {
          id: 1,
          name: "Second Feature 1",
          todo: [
            { id: 1, name: " todo list 1" },
            { id: 2, name: " todo list 1" },
          ],
        },
        {
          id: 2,
          name: "Second Feature 2",
          todo: [
            { id: 1, name: "second todo list 1" },
            { id: 2, name: "second todo list 1" },
          ],
        },
      ],
    },
  ],
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case "NEW_A_CONTENT": {
      let count = state.data.length;
      count++;
      let newData = state.data.concat({ id: count, name: action.payload });

      return {
        data: newData,
      };
    }
    case "DEL_A_CONTENT": {
      let del = state.data.filter((item) => item.id != action.payload);
      console.log(del[0]);
      return {
        data: del,
      };
    }
    case "CHA_A_CONTENT": {
      const changed = state.data.map((item) => {
        if (item.id == action.id) {
          return { id: action.id, name: action.payload };
        } else {
          return item;
        }
      });
      return {
        ...state,
        data: changed,
      };
    }
    case "FEATUREADD_A_CONTENT": {
      const chg = state.data[action.objnum].feature.map((item) => {
        if (item.id == action.id) {
          return { id: action.id, name: action.payload };
        } else {
          return item;
        }
      });
      const dat = [...state.data];
      dat[action.objnum].feature = chg;
      console.log(state.data);
      return {
        data: dat,
      };
    }
    case "FEATUREDEL_A_CONTENT": {
      const chg = state.data[action.objnum].feature.filter((item) => {
        if (item.id != action.id) {
          return item;
        }
      });
      const dat = [...state.data];
      dat[action.objnum].feature = chg;
      return {
        data: dat,
      };
    }
    case "FEATURECHA_A_CONTENT": {
      // console.log(333,action.addData, action.objnum);
      const dat = [...state.data];
      let count = dat[action.objnum].feature.length;
      count++;
      dat[action.objnum].feature.push({ id: count, name: action.addData });
      console.log(dat[action.objnum].feature);
      const datt = [...state.data];
      datt[action.objnum].feature = dat[action.objnum].feature;
      console.log(state.data);

      return {
        data: datt,
      };
    }
    case "TODOLISTCHA_A_CONTENT": {
      // console.log(state.data[action.objnum].feature[action.todoObj].todo);
      const todo = state.data[action.objnum].feature[action.todoObj].todo.map(
        (item) => {
          if (item.id == action.id) {
            return { id: action.id, name: action.name };
          } else {
            return item;
          }
        }
      );
      console.log(todo);
      const dat = [...state.data];
      dat[action.objnum].feature[action.todoObj].todo = todo;
      console.log(dat);
      return {
        data: dat,
      };
    }

    case "TODOADD_A_CONTENT": {
      console.log(333, action.todoObj, action.objnum, action.name);

      const dat = [...state.data];
      let count = dat[action.objnum].feature[action.todoObj].todo.length;
      count++;
      dat[action.objnum].feature[action.todoObj].todo.push({
        id: count,
        name: action.name,
      });
      console.log(dat[action.objnum].feature);
      const datt = [...state.data];
      datt[action.objnum].feature = dat[action.objnum].feature;
      console.log(state.data);
      return {
        data: datt,
      };
    }
    case "TODODEL_A_CONTENT": {
      const chg = state.data[action.objnum].feature[action.todoObj].todo.filter(
        (item) => {
          if (item.id != action.id) {
            return item;
          }
        }
      );
      const dat = [...state.data];
      dat[action.objnum].feature[action.todoObj].todo = chg;
      return {
        data: dat,
      };
    }
    default:
      return state;
  }
}

export default rootReducer;
