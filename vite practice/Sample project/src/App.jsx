import './App.css'
import Card from './components/card.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div className="cards-grid">
                <Card
                  image="https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?semt=ais_hybrid&w=740&q=80"
                  name="Agrim"
                  studentClass="3rd Year"
                  roll="A23"
                  details={["Loves coding", "Enjoys hiking", "Avid reader"]}
                />

                <Card
                  image="https://t3.ftcdn.net/jpg/01/86/34/08/360_F_186340800_qlgVLkKLVy19r6SEL7RnniP1Yz6dmq8T.jpg"
                  name="Chaplin bhai"
                  studentClass="2nd Year"
                  roll="B12"
                  details={["Robotics club", "Piano", "Math enthusiast"]}
                />

                <Card
                  image="https://www.shutterstock.com/image-photo/closeup-portrait-young-single-man-260nw-179189363.jpg"
                  name="Jaddu"
                  studentClass="1st Year"
                  roll="C05"
                  details={["Soccer team", "Photography", "Volunteer"]}
                />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App