export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_EXP_FAILURE = "FETCH_EXP_FAILURE";
export const FETCH_EXP_SUCCESS = "FETCH_EXP_SUCCESS";
const tokenSte = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBiZDNmN2EyODFkODAwMTlhM2VjNjgiLCJpYXQiOjE3MTIwNTExOTEsImV4cCI6MTcxMzI2MDc5MX0.gzdsFyJ3HO53BmeOvhHxOvkFmtHv5h-YAhze63vArYo";
const tokenMarco = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBjMjM5Y2EyODFkODAwMTlhM2VjZTAiLCJpYXQiOjE3MTIwNzE1ODEsImV4cCI6MTcxMzI4MTE4MX0.uHkSiXtnQG3NNv2MrezBb6Re8MLtSzeT_2-khWyvXXs";
const tokenIla = "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjBkMGMzZWY5NGY0YTAwMTkzNzkxNmIiLCJpYXQiOjE3MTIxMzExMzQsImV4cCI6MTcxMzM0MDczNH0.gzh-f7cukea3mTuqBW89cf9BZCuUnAG32j2Vu4R8-7A";
const MeEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const ExpEndopoint = "https://striveschool-api.herokuapp.com/api/profile/660bd3f7a281d80019a3ec68/experiences";

const fetchUserSuccess = (data) => ({
  type: FETCH_USER_SUCCESS,
  payload: data,
});

const fetchUserFailure = () => ({
  type: FETCH_USER_FAILURE,
});

const fetchExpSuccess = (data) => ({
  type: FETCH_EXP_SUCCESS,
  payload: data,
});

// ACTION_1
export const fetchUser = () => async (dispatch) => {
  try {
    const response = await fetch(MeEndpoint, {
      headers: {
        Authorization: tokenIla,
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

// ACTION_3
export const AddUserExpImage = (image, expId) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("experience", image); // Aggiungi l'immagine con la chiave "experience"

    const response = await fetch(`${ExpEndopoint}/${expId}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: tokenIla,
      },
    });
    if (response.ok) {
      console.log("Esperienza con successo");
      // window.location.reload();
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_5
export const AddUserExp = (dataForm, img) => async (dispatch) => {
  try {
    const response = await fetch(ExpEndopoint, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenIla,
      },
    });
    if (response.ok) {
      console.log("Esperienza con successo");
      const data = await response.json();
      dispatch(AddUserExpImage(img.image, data._id));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_6
export const fetchUserExp = () => async (dispatch) => {
  try {
    const response = await fetch(ExpEndopoint, {
      headers: {
        Authorization: tokenIla,
      },
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

// ACTION_MODIFICA_EXP
export const ModUserExp = (dataForm, expId, img) => async (dispatch) => {
  try {
    const response = await fetch(`${ExpEndopoint}/${expId}`, {
      method: "PUT",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: tokenIla,
      },
    });
    if (response.ok) {
      console.log("Esperienza modificata con successo");
      if (img) {
        const data = await response.json();
        dispatch(AddUserExpImage(img.image, data._id));
      }
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_DELETE_EXP
export const DelUserExp = (expId) => async (dispatch) => {
  try {
    const response = await fetch(`${ExpEndopoint}/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: tokenIla,
      },
    });
    if (response.ok) {
      console.log("Esperienza eliminata con successo");
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
