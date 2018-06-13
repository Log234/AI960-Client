import * as React from "react";
import "spectre.css/";
import "./Header.css";

export class Header extends React.Component<{}, {}> {
    public render() {
        return (
            <header className="App-header">
                <h1 className="d-inline pr-1">AI960</h1>
                <p className="d-inline">v0.0.1</p>
            </header>
        );
    }
}
