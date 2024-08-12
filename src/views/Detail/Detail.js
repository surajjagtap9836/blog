import "./Detail.css"
import Blogs from "./../../data"
import { useParams } from "react-router-dom"
function Detail() {
    const {id} =useParams()

    const detailpage=Blogs.find((data)=>{
      if(data.id==id){
        return true
      }
      else{
        return false
      }

    })
      console.log(detailpage)
     return(
      <div>
        <h1>{detailpage.title}</h1>
        <p>
          {detailpage.Auther.name}|{detailpage.date}
        </p>
        <p>
          {detailpage.content}
        </p>
        <p>{detailpage.categories}</p>
      </div>
     )
  
}


export default Detail
