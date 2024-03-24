import { useState, Suspense } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { Iphone } from "./Iphone.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Canvas>
        <AmbientLight/>
        <OrbitControls/>
        <Suspense fallback={null}>
          <Iphone/>
        </Suspense>
      </Canvas>
    </>
  )
}

export default App
