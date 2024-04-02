import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Home</h2>
        <h3 style={{textAlign:"center", fontWeight:"800", fontSize:"32px"}}>Элегантный Дом Мебели</h3>
        <div style={{height:"1px" , width:"900px", backgroundColor:"orange", marginBottom:"50px" ,display:"flex", alignItems:"center", justifyContent:"center", textAlign:"center"}}></div>
        <div  style={{display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center"}}>
          <img style={{ borderRadius:"15px"}} src="http://localhost:5173/public/XXXL.webp" alt="" height={500} width={900}/>
          <p style={{textAlign:"center"}}>"Добро пожаловать в мир изысканной мебели, где каждый предмет становится олицетворением вашего стиля и комфорта! Наша компания предлагает широкий ассортимент мебели для всех помещений вашего дома или офиса, созданный с любовью к деталям и вниманием к функциональности.

Наш ассортимент включает в себя современные и классические дизайны, которые позволяют воплотить в жизнь любые интерьерные идеи. Мы предлагаем мебель из высококачественных материалов, обеспечивая долговечность и надежность каждого изделия.

От уютных кроватей и элегантных обеденных столов до функциональных шкафов и стильных аксессуаров, мы имеем все необходимое для создания пространства, которое отражает ваш вкус и уют вашего дома.

Наши консультанты готовы помочь вам с выбором и советом, чтобы каждая покупка была приятным и удовлетворительным опытом. Присоединяйтесь к нам и сделайте ваш дом местом, где стиль встречается с комфортом!"</p>

<Link style={{border:"1px solid orange" , backgroundColor:"orange", borderRadius:"10px", padding:"10px"}} to="/contact">Заказать</Link>
        </div>
    </div>
  )
}

export default Home