export const changeSideBarLeft = () => {
    return {
            type: "HIDDEN_LEFT"
    };
};

export const changeSideBarRight = () => {
    return {
            type: "HIDDEN_RIGHT"
    };
};

export const changeLogin = () => {
    return {
            type: "IS_LOGIN"
    };
};

export const changeDataRight = (newData) => {
    return {
            type: "DATA_RIGHT",
            payload: newData
    };
};

export const changeDataLeft = (newData) => {
    return {
            type: "DATA_LEFT",
            payload: newData
    };
};

export const changeView = (newData) => {
    return {
            type: "CHANGE_VIEW_SCALE",
            payload: newData
    };
};

export const changeLabel = () => {
    return {
            type: "CHANGE_LABEL"
    };
};

export const changeUser = (newData) => {
    return {
            type: "CHANGE_USER",
            payload: newData
    };
};
export const changeMaximum = (newData) => {
    return {
            type: "CHANGE_MAXIMUM",
            payload: newData
    };
};
