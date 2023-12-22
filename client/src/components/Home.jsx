import "./Home.css";
import Nav from "./Nav/Nav"
import Timeline from "./Timeline/Timeline"
import CreatePost from "./Timeline/Post/createPost"
function Home() {
  return (
    <div className="home">
      <div className="left_nav_wrapper">
        <Nav />
      </div>
      <div className="timeline_wrapper">
        <Timeline />
      </div>
      <div >
        <CreatePost classNam="createPost_wrapper" />
      </div>
    </div>
  );
}

export default Home;