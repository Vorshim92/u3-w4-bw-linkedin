export const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
export const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";
export const FETCH_EXP_FAILURE = "FETCH_EXP_FAILURE";
export const FETCH_EXP_SUCCESS = "FETCH_EXP_SUCCESS";
export const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
export const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";
export const SET_SEARCH_QUERY = "SET_SEARCH_QUERY";
export const FETCH_POST_SUCCESS = "FETCH_POST_SUCCESS";
export const FETCH_POST_FAILURE = "FETCH_POST_FAILURE";
export const SET_TOKEN_OK = "FETCH_LOGIN_OK";
export const SET_TOKEN_FAIL = "FETCH_LOGIN_FAIL";
const MeEndpoint = "https://striveschool-api.herokuapp.com/api/profile/me";
const UsersEndopoint = "https://striveschool-api.herokuapp.com/api/profile";
const PostEndopoint = "https://striveschool-api.herokuapp.com/api/posts/";
const PostImageEndpoint = "https://striveschool-api.herokuapp.com/api/posts/";

export const setTokenOk = (token) => ({
  type: SET_TOKEN_OK,
  payload: token,
});
export const setTokenFail = () => ({
  type: SET_TOKEN_FAIL,
});
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
const fetchUsersSuccess = (data) => ({
  type: FETCH_USERS_SUCCESS,
  payload: data,
});
const fetchUsersFailure = () => ({
  type: FETCH_USER_FAILURE,
});
const fetchPostSuccess = (data) => ({
  type: FETCH_POST_SUCCESS,
  payload: data,
});
const fetchPostFailure = () => ({
  type: FETCH_POST_FAILURE,
});

export const setSearchQuery = (query) => {
  return {
    type: SET_SEARCH_QUERY,
    payload: query,
  };
};

// ACTION_1
export const fetchUser = () => async (dispatch, getState) => {
  const state = getState();

  const token = state.login.loginData;

  try {
    const response = await fetch(MeEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
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
export const AddUserExpImage = (image, expId) => async (dispatch, getState) => {
  const state = getState();

  const token = state.login.loginData;
  const userId = state.user.userData._id;
  try {
    const formData = new FormData();
    formData.append("experience", image);

    const response = await fetch(`${UsersEndopoint}/${userId}/experiences/${expId}/picture`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: `Bearer ${token}`,
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
export const AddUserExp = (dataForm, img) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  const userId = state.user.userData._id;
  try {
    const response = await fetch(`${UsersEndopoint}/${userId}/experiences/`, {
      method: "POST",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      console.log("Esperienza con successo");
      const data = await response.json();
      await dispatch(AddUserExpImage(img.image, data._id)).then(() => {});
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_6
export const fetchUserExp = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  const userId = state.user.userData._id;
  try {
    const response = await fetch(`${UsersEndopoint}/${userId}/experiences/`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("exp ricevute", data);
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
export const ModUserExp = (dataForm, expId, img) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  const userId = state.user.userData._id;
  try {
    const response = await fetch(`${UsersEndopoint}/${userId}/experiences/${expId}`, {
      method: "PUT",
      body: JSON.stringify(dataForm),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      console.log("Esperienza modificata con successo");
      if (img) {
        const data = await response.json();
        await dispatch(AddUserExpImage(img.image, data._id)).then(() => {});
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
export const DelUserExp = (expId) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  const userId = state.user.userData._id;
  try {
    const response = await fetch(`${UsersEndopoint}/${userId}/experiences/${expId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
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
export const ChangeImageUser =
  ({ image }) =>
  async (dispatch, getState) => {
    const state = getState();
    const token = state.login.loginData;
    try {
      const formData = new FormData();
      console.log(image);
      formData.append("profile", image); // Aggiungi l'immagine con la chiave "experience"

      const response = await fetch(`https://striveschool-api.herokuapp.com/api/profile/660bd3f7a281d80019a3ec68/picture`, {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        console.log("Immagine Profilo modificata con successo");
        // dispatch(fetchUser());
      } else {
        throw new Error("errore recupero dati");
      }
    } catch (error) {
      console.log(error);
      // dispatch(fetchUserFailure());
    }
  };

// ACTION_FETCH USERS
export const fetchUsers = () => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  try {
    const response = await fetch(UsersEndopoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("dati ricevuti", data);
      dispatch(fetchUsersSuccess(data));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchUsersFailure());
  }
};
// ACTION_GET_POSTS
export const fetchPost = () => async (dispatch, getState) => {
  const state = getState();

  const token = state.login.loginData;

  try {
    const response = await fetch(PostEndopoint, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      const data = await response.json();
      console.log("dati ricevuti", data);
      dispatch(fetchPostSuccess(data));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    dispatch(fetchPostFailure());
  }
};

// ACTION_POST_POST
export const addPost = (data) => async (dispatch, getState) => {
  const state = getState();

  const token = state.login.loginData;

  try {
    const response = await fetch(PostEndopoint, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      console.log("Post Aggiunto con successo");
      const post = await response.json();
      await dispatch(addPostImage(img.image, post._id));
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};

// ACTION_POST_IMAGE_POST
export const addPostImage = (img, postID) => async (dispatch) => {
  try {
    const formData = new FormData();
    formData.append("post", img); // Aggiungi l'immagine con la chiave "experience"

    const response = await fetch(`${PostImageEndpoint}${postID}`, {
      method: "POST",
      body: formData,
      headers: {
        Authorization: tokenSte,
      },
    });
    if (response.ok) {
      console.log("post image con successo");
      // dispatch(fetchPost());
    } else {
      throw new Error("errore post image");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};

// ACTION_PUT_POST
export const modPost = (data, postId) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  try {
    const response = await fetch(`${PostEndopoint}/${postId}`, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      if (img) {
        await dispatch(addPostImage(img.image, postId));
      }
      console.log("Esperienza con successo");
      // dispatch(fetchPost());
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_DELETE_POST
export const deletePost = (postId) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  try {
    const response = await fetch(`${PostEndopoint}/${postId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      console.log("Esperienza con successo");
      // dispatch(fetchPost());
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
    // dispatch(fetchUserFailure());
  }
};
// ACTION_MOD_USER
export const modUser = (data) => async (dispatch, getState) => {
  const state = getState();
  const token = state.login.loginData;
  try {
    const response = await fetch(UsersEndopoint, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.ok) {
      console.log("dati ricevuti", data);
    } else {
      throw new Error("errore recupero dati");
    }
  } catch (error) {
    console.log(error);
  }
};

export const validateToken = (token) => async (dispatch) => {
  try {
    const response = await fetch(MeEndpoint, {
      headers: {
        Authorization: `Bearer ${token}`,
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
