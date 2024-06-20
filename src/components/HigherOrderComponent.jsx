import React, { Component } from 'react';

class HigherOrderComponent extends Component {
  constructor() {
    super();
    this.state = {
      userData: [
        { id: '1', name: 'Joe', user_type: 'Developer', age: 31, years: 11 },
        { id: '2', name: 'Hill', user_type: 'Designer', age: 26, years: 4 },
        { id: '3', name: 'John', user_type: 'Teacher', age: 24, years: 2 },
        { id: '4', name: 'Sam', user_type: 'Entrepreneur', age: 58, years: 25 },
        { id: '5', name: 'Jack', user_type: 'Designer', age: 43, years: 18 }
      ]
    };
  }

  renderItems = () => {
    const data = this.state.userData;
    return data.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderDevelopers = () => {
    const data = this.state.userData;
    const developers = data.filter(item => item.user_type === 'Developer');
    return developers.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderNamesStartingWithJ = () => {
    const data = this.state.userData;
    const namesWithJ = data.filter(item => item.name.startsWith('J'));
    return namesWithJ.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderUsersByAge = () => {
    const data = this.state.userData;
    const filteredByAge = data.filter(item => item.age > 28 && item.age <= 50);
    return filteredByAge.map((item) => (
      <React.Fragment key={item.id}>
        <li className="list-elements">
          <span>Id: {item.id}</span>
          <span>Name: {item.name}</span>
          <span>User Type: {item.user_type}</span>
        </li>
      </React.Fragment>
    ));
  };

  renderTotalExperience = () => {
    const data = this.state.userData;
    const totalExperience = data
      .filter(item => item.user_type === 'Designer')
      .reduce((total, current) => total + current.years, 0);
    return <div>Total Experience of Designers: {totalExperience} years</div>;
  };

  render() {
    return (
      <React.Fragment>
        <h1>Display all items</h1>
        <div className="display-box">
          <ul>{this.renderItems()}</ul>
        </div>

        <h1>Display Developers</h1>
        <div className="display-box">
          <ul>{this.renderDevelopers()}</ul>
        </div>

        <h1>Names Starting with J</h1>
        <div className="display-box">
          <ul>{this.renderNamesStartingWithJ()}</ul>
        </div>

        <h1>Users by Age</h1>
        <div className="display-box">
          <ul>{this.renderUsersByAge()}</ul>
        </div>

        <h1>Total Experience</h1>
        <div className="display-box">
          {this.renderTotalExperience()}
        </div>
      </React.Fragment>
    );
  }
}

export default HigherOrderComponent;
