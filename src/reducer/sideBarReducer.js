import cloneDeep from 'lodash/cloneDeep';

let dataGraphIntianal = {

    viewScale: 600,
    labels: Array(600).fill().map((_, idx) => 0 + idx),
    datasets: [
      {
        label: "Maximum",
        backgroundColor: "rgb(255, 0, 0)",
        borderColor: "rgb(255, 0, 0)",
        visible: true,
        data: Array(600).fill(100),
      },
      {
        label: "Left",
        backgroundColor: "rgb(60, 179, 113)",
        borderColor: "rgb(60, 179, 113)",
        hidden: false,
        data:Array(600).fill(0)
      },
      {
        label: "Right",
        backgroundColor: "rgb(0, 0, 255)",
        borderColor: "rgb(0, 0, 255)",
        hidden: false,
        data: Array(600).fill(0)
      },
      {
        label: "Minimum",
        backgroundColor: "rgb(255, 165, 0)",
        borderColor: "rgb(255, 165, 0)",
        visible: true,
        data: Array(600).fill(30)
      },
    ],
};

const dataGraph = (state = dataGraphIntianal, action) =>{
    switch (action.type) {
        case "HIDDEN_LEFT":{
          let copyState = cloneDeep(state);
          copyState.datasets[1].hidden = !copyState.datasets[1].hidden;
          return copyState;
        }
        case "HIDDEN_RIGHT":{
          let copyState = cloneDeep(state);
          copyState.datasets[2].hidden = !copyState.datasets[2].hidden;
          return copyState;
        }
        case "DATA_LEFT":{
          let copyState = cloneDeep(state);
          copyState.datasets[1].data.unshift(action.payload);
          copyState.datasets[1].data.pop();
          return copyState;
        }
        case "DATA_RIGHT":{
          let copyState = cloneDeep(state);
          copyState.datasets[2].data.unshift(action.payload);
          copyState.datasets[2].data.pop();
          return copyState;
        }
        case "CHANGE_VIEW_SCALE":{
          let copyState = cloneDeep(state);
          copyState.viewScale = action.payload;
          return copyState;
        }
        default:
            return state;
    }
}

export default dataGraph;


// (arr = []).length = len; arr.fill(0);
// Array(end - start + 1).fill().map((_, idx) => start + idx)