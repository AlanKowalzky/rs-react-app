import React from 'react';

interface Pokemon {
  name: string;
  sprites: {
    front_default: string;
  };
}

interface State {
  items: Pokemon[];
  isLoading: boolean;
  error: Error | null;
}

class Results extends React.Component<{ searchTerm: string }, State> {
  state: State = {
    items: [],
    isLoading: false,
    error: null,
  };

  componentDidUpdate(prevProps: { searchTerm: string }) {
    if (prevProps.searchTerm !== this.props.searchTerm) {
      this.fetchResults();
    }
  }

  fetchResults = async () => {
    this.setState({ isLoading: true, error: null });

    const searchTerm = this.props.searchTerm.trim().toLowerCase();
    const url = searchTerm
      ? `https://pokeapi.co/api/v2/pokemon/${searchTerm}`
      : `https://pokeapi.co/api/v2/pokemon?limit=10&offset=0`; // Domyślna strona

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Błąd API: ${response.status}`);
      }
      const data = await response.json();
      const items = searchTerm ? [data] : data.results;
      this.setState({ items, isLoading: false });
    } catch (error) {
      this.setState({ error: error as Error, isLoading: false });
    }
  };

  render() {
    const { items, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Ładowanie...</div>;
    }

    if (error) {
      return <div>Błąd: {error.message}</div>;
    }

    return (
      <div>
        {items.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            {item.sprites && (
              <img src={item.sprites.front_default} alt={item.name} />
            )}
          </div>
        ))}
      </div>
    );
  }
}

export default Results;
