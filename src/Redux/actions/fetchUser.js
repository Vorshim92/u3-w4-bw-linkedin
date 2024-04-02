export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_USER_ID = "FETCH_USER_ID";

const baseEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";

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

export const fetchUser = () => async (dispatch) => {
  try {
    let response = await fetch(baseEndpoint, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo",
      },
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

export const fetchUserByID = (userId) => async (dispatch) => {
  const ENDPOINT = `https://striveschool-api.herokuapp.com/api/profile/${userId}`;
  try {
    let response = await fetch(ENDPOINT, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo",
      },
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
