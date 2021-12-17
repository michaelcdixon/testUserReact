import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import createForm from "./components/createForm";
import list from "./components/list";
import updateUser from "./components/updateUser";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { apiResponse: "" };
    }

    callAPI() {
        fetch("http://localhost:9000/testAPI")
            .then(res => res.text())
            .then(res => this.setState({ apiResponse: res }))
            .catch(err => err);
    }

    componentDidMount() {
        this.callAPI();
    }

    render() {
        return (
            <div className="App">

                <Routes>

                    <Route exact path={"/users/createForm"} component={createForm} />
                    <Route exact path={"/users/list"} component={list} />
                    <Route exact path={"/users/updateUser"} component={updateUser} />

                </Routes>

            </div>
        );
    }
}

export default App;