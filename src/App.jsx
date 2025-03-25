import ServiceCard from "./components/ServiceCard"

function App() {

  const data1 = {
    title: "Web Developement",
    description: "It is a webste where you can find the best webs and can  build any kind of sites"
  }
  const data2 = { 
    title: "Shoes Jordar",
    description: "It is a webste where you can find the best shoes it the world"
  }

  return(
    <>
      <ServiceCard data={data1} />
      <ServiceCard data={data2} />
    </>
  )
}

export default App
