import React from 'react';

class Search extends React.Component<{
  onSearch: (searchTerm: string) => void;
}> {
  state = {
    searchTerm: localStorage.getItem('searchTerm') || '',
  };

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchTerm: event.target.value });
  };

  handleSearch = () => {
    const trimmedTerm = this.state.searchTerm.trim();

    if (trimmedTerm.length === 0) {
      this.props.onSearch('');
    } else {
      localStorage.setItem('searchTerm', trimmedTerm);
      this.props.onSearch(trimmedTerm);
    }
  };

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="Enter your search term..."
        />
        <button onClick={this.handleSearch}>Search</button>
      </div>
    );
  }
}

export default Search;
