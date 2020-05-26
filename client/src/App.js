import React, { useState, useEffect, useReducer } from "react";
import "./App.css";
// import { connect } from "react-redux";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import DisplayAllPosts from "./pages/DisplayAllPosts/displayAllPosts";
import Nav from "./components/Nav";
import Axios from "axios";
import Header from "./components/Header/Header";
import CreatePost from "./pages/CreatePost/createPost";
import UserSettings from "./pages/UserSettings";

// REDUCER - React hooks useReducer
const postsReducer = (state, action) => {
  switch (action.type) {
    case "getNewData":
      return {
        ...state,
        postsFromMongo: action.postDocs,
      };
    default:
      break;
  }

  // if nothing goes down, use same old state
  return state;
};

const App = (props) => {
  const [postListState, setPostListState] = useState([]);

  const [postState, postDispatch] = useReducer(postsReducer, {
    defaultImgUrl: "https://source.unsplash.com/sfL_QOnmy00/250x300",
    postsFromMongo: [],
    messageForUser: "",
    placeHolderUser: {
      username: "beep2434",
      displayName: "beep",
      email: "beep@gmail.com",
      password: "",
      joinDate: "2020-05-26T03:23:49.058Z",
    },
  });

  const refreshData = () => {
    Axios.get("/api/all-posts")
      .then((docs) => {
        // setPostListState(docs.data);
        postDispatch({ type: "getNewData", postDocs: docs.data });
      })
      .catch((err) => {
        console.log(err);
      });
    return [];
  };

  // like componentWillMount or didmount
  useEffect(() => {
    refreshData();
  });

  return (
    <Router>
      <Nav />
      <Header title={"Seenit"} />
      <Switch>
        <Route exact path="/">
          <DisplayAllPosts 
          posts={postState.postsFromMongo}
          image={postState.defaultImgUrl}
          />
          {/* <div className="container-fluid"> */}
          {/* <PostContainer posts={listOfPlaceholderPosts} /> */}
          {/* <PostContainer posts={postListState} /> */}
          {/* <PostContainer posts={postState.postsFromMongo} /> */}
          {/* </div> */}
        </Route>

        <Route path="/create-post">
          <CreatePost />
        </Route>

        <Route exact path="/user-settings">
          <UserSettings user={postState.placeHolderUser} />
        </Route>
      </Switch>
    </Router>
  );
};

// REDUX
// =============================================================
// const mapStateToProps = (state) => {
//   return {
//     // ctr: state.counter,
//     reduxPosts: state.postList,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     // this dispatch call is going all the way back to that reducer in ./store/rootReducer.js
//     // onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
//     onRefreshData: () => dispatch({ type: "refreshData" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
