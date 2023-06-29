import React, { Component } from "react";
import searchPictures from "api";


class App extends Component {
  state = {
   
  };
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
