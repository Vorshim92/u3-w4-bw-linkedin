export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_ID = "FETCH_USER_ID";
export const FETCH_EXP_FAILURE = "FETCH_EXP_FAILURE";
export const FETCH_EXP_SUCCESS = "FETCH_EXP_SUCCESS";

const MeEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const ExpEndopoint = "https://striveschool-api.herokuapp.com/api/profile/660bd3f7a281d80019a3ec68/experiences";
const headers = {
  Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo",
};

const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

const fetchUserByIdSuccess = (data) => ({
  type: FETCH_USER_ID,
  payload: data,
});
const fetchExpSuccess = (data) => ({
  type: FETCH_EXP_SUCCESS,
  payload: data,
});

// ACTION_1
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch(MeEndpoint, {
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      console.log("dati ricevuti", data);
      dispatch(fetchUserSuccess(data));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchUserFailure());
  }
};

// ACTION_2 NON UTILIZZATA (ANCORA)
export const fetchUserByID = (userId) => async (dispatch) => {
  const ENDPOINT = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
  try {
    const response = await fetch(MeEndpoint, {
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      console.log("dati ricevuti", data);
      dispatch(fetchUserByIdSuccess(data));
      return data;
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};

// ACTION_3
export const ModUserExp = (dataForm) => async (dispatch) => {
  try {
    const response = await fetch(ExpEndopoint, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo`,
      },
    });
    if (response.ok) {
      console.log("Esperienza con successo");
      window.location.reload();
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_4
export const fetchUserExp = () => async (dispatch) => {
  try {
    const response = await fetch(MeEndpoint, {
      headers: headers,
    });
    if (response.ok) {
      const data = await response.json();
      console.log("dati ricevuti", data);
      dispatch(fetchExpSuccess(data));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
