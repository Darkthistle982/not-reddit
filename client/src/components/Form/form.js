import React, { Component } from "react";
import "./form.css";
// import API from "../../utils/API.";
import apiCalls from "../../utils/seenit-apis";
import Editor1 from "../formeditor/Formeditor.js";
import FormVisualizer from "../Formvisualizer/FormVisualizer";
const API = apiCalls;

class Form extends Component {
  // Setting the component's initial state
  state = {
    title: "",
    body: "",
    imageUrl: "",
    postedBy: "placeholder",
    slidemenu: false,
  };

  handleInputChange = (event) => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value,
    });
  };

  handleChange = (event) => {
    this.setState({ onCommunity: event.target.value });
  };

  handleslideclick = (event) => {
    if (!this.state.slidemenu) {
      this.setState({ slidemenu: true });
    }
  };
  handleslideclickoff = (event) => {
    if (this.state.slidemenu) {
      this.setState({ slidemenu: false });
    }
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    let postObjectInfo = {
      title: this.state.title,
      body: this.state.body,
      imageUrl: this.state.imageUrl,
      onCommunity: this.state.onCommunity,
      postedBy: this.state.postedBy,
    };
    console.log(postObjectInfo);
    // Alert the user their first and last name, clear `this.state.firstName` and `this.state.lastName`, clearing the inputs
    API.saveinfo(postObjectInfo)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err));
    this.setState({
      postinfo: {
        title: "",
        body: "",
        imageUrl: "",
        onCommunity: "",
        postedBy: "placeholder",
      },
    });
  };

  handleEditorChange = (e) => {
    this.setState({ body: e.target.getContent() });
    console.log(this.state.body);
    // console.log("Content was updated:", e.target.getContent());
  };

  render() {
    let boxClass = ["toggle-form"];
    if (this.state.slidemenu) {
      boxClass.push("active");
    }
    // Notice how each input has a `value`, `name`, and `onChange` prop

    return (
      <div className="card">
        <button onClick={() => this.handleslideclick()} className="btn btn-light cta-open">
          Create a New post
        </button>
        <section className={boxClass.join(" ")}>
          <div className="formwrap px-4">
            <div className="card" id="formcss">
              <div className="card" id="formcss">
                <button className="btn btn-dark" onClick={() => this.handleslideclickoff()}>
                  Close Window
                </button>
                <form className="form">
                  <label>Title:</label>
                  <div>
                    <input
                      value={this.state.title}
                      name="title"
                      onChange={this.handleInputChange}
                      type="text"
                      placeholder="title"
                    />
                  </div>
                  <Editor1 handleEditorChange={this.handleEditorChange} />
                  <div>
                    <label>Image URL:</label>
                    <div>
                      <input
                        value={this.state.imageUrl}
                        name="imageUrl"
                        onChange={this.handleInputChange}
                        type="text"
                        placeholder="imageUrl"
                      />
                    </div>
                  </div>
                  <label>Pick a Community:</label>
                  <div>
                    <select
                      value={this.state.onCommunity}
                      onChange={this.handleChange}
                    >
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </div>
                  <button className="btn btn-dark m-2" onClick={this.handleFormSubmit}>Post</button>
                </form>
              </div>
            </div>
            <FormVisualizer data={this.state} />
          </div>
        </section>
      </div>
    );
  }
}

export default Form;
