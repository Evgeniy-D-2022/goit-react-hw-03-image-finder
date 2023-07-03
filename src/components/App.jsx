import React, { Component } from "react";
import getPictures from "api";
import Searchbar from './Searchbar/Searchbar';



class App extends Component {
  state = {
    searchQuery: '',
    pictures: [],
    page: 1,
    status: 'idle',
    totalHits: 0,   
  };
  

  handleSubmit = async searchQuery => {
    if(searchQuery === '') {
      alert('Please enter text');
      return;

    } else {
      try {
        this.setState({status: 'pending'})
        const { totalHits, hits } = await getPictures(searchQuery, this.state.page);
        if (hits.length < 1) {
          this.setState({status: 'idle'});
          alert('Undifined, Try again');
          this.setState({status: 'rejected'})
          
        } else {
          this.setState({
            pictures: hits, searchQuery,
            totalHits: totalHits,
            status: 'resolved',
          })
          
        }
      } catch (error) {
        this.setState({status: 'rejected'});        
      }
    }
  }

  onBtnClick = async() => {
    this.setState({status: 'pending'})
    try {
      const { hits } = await getPictures(this.state.searchQuery, (this.state.page +=1));
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...hits]
      }))
      
    } catch (error) {
      
    }

  }

  render() {
    return (
      <>
      <Searchbar
      onSubmit={this.handleSubmit}
      />
      </>
    )
  }
}

  // async componentDidMount() {
  //   this.setState({ isLoading: true });

  //   try {
  //     const response = await axios.get("/search?query=react");
  //     this.setState({ articles: response.data.hits });
  //   } catch (error) {
  //     this.setState({ error });
  //   } finally {
  //     this.setState({ isLoading: false });
  //   }
  // }
  // render() {
  //   const { articles, isLoading, error } = this.state;

  //   return (
  //     <div>
  //       {error && <p>Whoops, something went wrong: {error.message}</p>}
  //       {isLoading && <p>Loading...</p>}
  //       {articles.length > 0 && <ArticleList articles={articles} />}
  //     </div>
  //   );
  // }
  




export default App;
