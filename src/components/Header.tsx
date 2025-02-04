import React from 'react';
import Search from './Search';

class Header extends React.Component<{
  onSearch: (searchTerm: string) => void;
}> {
  render() {
    return (
      <header>
        <h1>Search engine</h1>
        <Search onSearch={this.props.onSearch} />
      </header>
    );
  }
}

export default Header;
