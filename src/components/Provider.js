import React, { createContext, Component } from 'react';

export const Context = createContext();

export class Provider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 'settings'
    };
  };

  setPage = page => this.setState({ page });

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  };
};