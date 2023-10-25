import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../../utils/Loader';

const Computers = ({ isMobile }) => {

  const computer = useGLTF('./desktop_pc/scene.gltf');

  return (
    <mesh>
      <hemisphereLight
        intensity={0.05}
        groundColor='black'
      />
      <spotLight 
        position={[ -20, 50, 10 ]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={256}
      />
      <pointLight intensity={1} />
      <primitive
        object={computer.scene}
        scale={ isMobile ? 0.7 : 0.75 }
        position={ isMobile ? [ 0, -3, -2.2 ] : [ 0, -3.25, -1.5 ]}
        rotation={[ -0.01, -0.2, -0.1 ]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    // Crear un objeto mediaQuery que representa una consulta de medios para pantallas con un ancho máximo de 500 píxeles.
    const mediaQuery = window.matchMedia('(max-width: 500px)');

    // Establecer el estado isMobile en función de si la consulta de medios coincide actualmente.
    setIsMobile(mediaQuery.matches);

    // Definir una función llamada handleMediaQueryChange que se ejecutará cuando cambie la consulta de medios.
    const handleMediaQueryChange = e => {
      setIsMobile(e.matches); // Actualizar isMobile en función del nuevo valor de la consulta de medios.
    }

    // Agregar un evento 'change' al objeto mediaQuery que ejecutará la función handleMediaQueryChange cuando cambie la ventana del navegador.
    mediaQuery.addEventListener('change', handleMediaQueryChange);

    // Esta es la función de limpieza que se ejecutará cuando el componente se desmonte o cuando cambien los valores en el arreglo de dependencias.
    // En este caso, se eliminará el evento 'change' que habíamos agregado anteriormente.
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }

  }, []) // El arreglo de dependencias está vacío, lo que significa que este efecto solo se ejecutará una vez cuando el componente se monte.
  

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25, }}
      gl={{ preserveDrawingBuffer: true }}
    >
    
      <Suspense fallback={ <CanvasLoader /> } >
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers isMobile={isMobile} />
      </Suspense>
      
      <Preload all />
    </Canvas>
  )
}

export default ComputersCanvas;