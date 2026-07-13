import { useEffect, useState } from 'react'
import { BallTriangle } from 'react-loader-spinner'

const CircleLoading = () => {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false)
    }, 5000);

    return () => clearTimeout(timer)
  }, [])

  if (!visible) return null

  return (
    <div className="flex min-h-screen items-center justify-center">
      <BallTriangle
        height={80}
        width={80}
        radius={5}
        color="currentColor"
        wrapperClass="text-primary"
        ariaLabel="ball-triangle-loading"
        visible={true}
      />
    </div>
  )
}

export default CircleLoading
