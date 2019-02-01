import React, { Component } from 'react';
import { connect } from 'dva';

@connect(({ app }) => ({ ...app }))
class AppPage extends Component {
  UNSAFE_componentWillMount() {
    const { setLocalItem, createAction } = this.props;
    setLocalItem(`messageLocalData`, '');
    for (let key = 0; key < 100; key++) {
      this.props.dispatch(createAction('app/addMessage')({ key }));
    }
  }
  render() {
    const { List } = this.props;
    return (
      <div>
        Welcome
        {List.map(item => (
          <p key={item}>{item}</p>
        ))}
      </div>
    );
  }
}

export default AppPage;
