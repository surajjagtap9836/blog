import "./Home.css"
import Blogs from "../../data"
import Blogcard from "../../components/Blogcard/Blogcard"

function Home() {

  return (
   <>
   <div className="container">
{
 Blogs.map((data,i)=>{
  const {
   id,
    title,
    content,
    Auther,
    categories,
    date
  }=data

 return(
  <div >
    <Blogcard key={i} id={id} title={title} content={content} Auther={Auther} categories={categories} date={date}  />
   
    
    
  </div>
 )
})

}
</div> 
</>
  )
}

export default Home
