function NavBar() {
    return (

    <nav>
     <img src="https://seeklogo.com/images/A/airbnb-logo-1D03C48906-seeklogo.com.png"  className="nav--logo"/> 
     <h3 className="nav--heading" > airbnb </h3>

    </nav>
    
 )  
}

function Hero(){
    return (

      <section className="hero">
         <img src="https://clonebnb-experience.vercel.app/images/photo-grid.png" className="hero--photo" />
         <h1 className="hero--header" >Online Experiences</h1>
         <p className="hero--text">Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.</p>
         
      </section>
    )
}

function Card (props){
  let badgeText
  if (props.openspot===0)  {
    badgeText="SOLD OUT"
  } else if(props.location==="Online") {
    badgeText= "ONLINE"
  }

      return (
        <div className="card">
            <div className="card--badge">{badgeText}</div>
            <img src= {props.img} className="card--image" />
            <div className="card--stats">
              <img src="https://clonebnb-experience.vercel.app/images/star.png" className="card--star" />
              <span className="gray">{props.rating}</span>
              <span className="gray">({props.reviewCount}) . </span>
              <span>{props.location}</span>
            </div>
            <p>{props.title}</p>
            <p><span className="bold"> From ${props.price}</span> / person</p>
        </div>
        )
} 

function Airbnbprops () {
  return (
    <div class
    className= "airbnb.card">
       <Card
         img= "https://clonebnb-experience.vercel.app/images/katie-zaferes.png"
         rating="5.0"
         reviewCount={30}
         location="USA"
         title="Life Lessons with Katie Zaferes"
         price={136}
       />

       <Card
         img= "https://clonebnb-experience.vercel.app/images/wedding-photography.png"
         rating={5}
         reviewCount= {30}
         location="Online"
         title="Learn wedding photgraphy cover"
         price={125}
       />
       <Card
         img= "https://clonebnb-experience.vercel.app/images/mountain-bike.png"
         rating="4.8"
         reviewCount= {2}
         location="Norway"
         title="Group mountain biking"
         price={50}
       />

       <Card
         img= "https://clonebnb-experience.vercel.app/images/toronto-building.png"
         rating={5}
         reviewCount= {8}
         location="Toronto"
         title="Toronto Life"
         price={60}
       />

      <Card
         img= "https://clonebnb-experience.vercel.app/images/niagara.png"
         rating={5}
         reviewCount= {30}
         location="Niagara"
         title="Niagara Falls"
         price={125}
       />
    </div>
  )
}
ReactDOM.render (
      <div>
         <NavBar />
         <Hero />
         <Airbnbprops />
         </div>,
         document.getElementById("root"))
   
