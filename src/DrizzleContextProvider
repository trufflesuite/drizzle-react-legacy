// 1. Import drizzle, drizzle-react, and your contract artifacts.
import React, { Component } from "react";
import { Drizzle, generateStore } from "drizzle";
import { DrizzleContext } from "drizzle-react";
import PropTypes from "prop-types";

class DrizzleContextProvider extends Component {
  state = {
    drizzle: null
  };
  componentDidMount() {
    const { store, options } = this.props;
    this.setState({
      drizzle: new Drizzle(options, store ? store : generateStore(options))
    });
  }
  render() {
    const { children } = this.props;
    return (
      this.state.drizzle && (
        // 3. Pass the drizzle instance into the provider and wrap it
        //    around your app.
        <DrizzleContext.Provider drizzle={this.state.drizzle}>
          {children}
        </DrizzleContext.Provider>
      )
    );
  }
}

DrizzleContextProvider.propTypes = {
  store: PropTypes.object,
  children: PropTypes.object,
  options: PropTypes.object.isRequired
};

export { DrizzleContextProvider };
