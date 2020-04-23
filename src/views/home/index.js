import React, {
  Component
} from "react";
 
class Home extends Component {
  constructor() {
    super();
  }
  componentWillMount() {
    document.title = "首页"  
  }
  componentDidMount() {
     
  }
  render() {
    return ( <div>this is home page</div>
    );
  }
}
export default Home;