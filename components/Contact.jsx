import { Link } from "react-router-dom"

function Contact() {
  return (
    <div>
        <h2 style={{textAlign:"center"}}>contact</h2>
        <div style={{display:"flex", alignItems:"center", justifyContent:"center", flexDirection:"column"}}>
          <address>Адрес: ул. Приморская, дом 25, г. Приморск</address>
          <br />
          <a href="tel:+7(XXX)XXX-XX-XX">Телефон: +7 (XXX) XXX-XX-XX</a>
          <a href="e-mail:info@elegantny-dom-mebeli.ru">Электронная почта: info@elegantny-dom-mebeli.ru</a>
          <p>График работы:
Понедельник - Пятница: 9:00 - 20:00
Суббота: 10:00 - 18:00
Воскресенье: Выходной</p>
<p>Вы также можете связаться с нами через социальные сети:</p>
<a href="@elegantny_dom_mebeli">Instagram: @elegantny_dom_mebeli</a>
<a href="/elegantnydommebeli">Facebook: /elegantnydommebeli</a>
        </div>
        
    </div>
  )
}

export default Contact