import { Link } from "react-router-dom"
import "./Blogcard.css"
function Blogcard({id,title, content ,Auther, categories ,date}) {
  return (
    <Link to={`/blog/${id}`}  className="links">
    <div className="blog-card">
      
      <h1 className="title">{title}</h1>
      <p className="content">{content.substring(0,100)}...Read more</p>
      <p>
        <div className="auther">
          <img src={Auther.photo} className="img"/>
          <span className="name">{Auther.name}</span>
          <span className="date">{date}</span>
        </div>
        <p className="span">{categories}</p>
        
      </p>
    </div>
    </Link>
  )
}

export default Blogcard
