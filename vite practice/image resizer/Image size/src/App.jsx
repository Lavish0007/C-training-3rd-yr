import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {

  return (
    <>
      <div>
        <Card prods={{image: "https://i.guim.co.uk/img/media/67f80e2818d12c025886f4b6f9a90d83eef1940b/0_79_3312_1987/master/3312.jpg?width=1200&height=900&quality=85&auto=format&fit=crop&s=fc5aee2b7b023d61dab2c757b55db9bb", name: "Takla tulla", age:38}}/>
      </div>
    </>
  )
}

export default App
