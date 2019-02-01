const createAction = type => payload => ({ type, payload });
const addMessageServe = async item => {
  let AllMessageData = await getLocalItem(`messageLocalData`);
  if (!AllMessageData) AllMessageData = [];
  AllMessageData.unshift(item);
  setLocalItem(`messageLocalData`, AllMessageData);
  return AllMessageData;
};
export const delay = time => new Promise(resolve => setTimeout(resolve, time));

async function getLocalItem(key, defaultValue = null) {
  const value = localStorage.getItem(key);
  return value !== null ? JSON.parse(value) : defaultValue;
}
function setLocalItem(key, value) {
  return localStorage.setItem(key, JSON.stringify(value));
}

export default {
  namespace: 'app',
  state: {
    setLocalItem: setLocalItem,
    createAction: createAction,
    List: []
  },
  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  },
  effects: {
    *addMessage({ payload }, { call, put, select }) {
      const data = yield call(addMessageServe, payload.key);
      if (data) {
        yield put(createAction('updateState')({ List: data }));
      }
    }
  }
};
