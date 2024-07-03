import { Link } from "react-router-dom";

export default function Dashboard(){
  return (
    <div className="dashboard-menu">
      <a href="#">Home</a>
      <Link to="/create">New post</Link>
      <a href="#">My Posts</a>
      <a href="#">Media</a>
      <a href="#">Pages</a>
      <a href="#">Comments</a>
      <a href="#">Colour</a>
      <a href="#">Users</a>
      <a href="#">Settings</a>
    </div>
  )
}
