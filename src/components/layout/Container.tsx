import React from 'react'
import { ContainerProps } from '../../types/props'

const Container: React.FC<ContainerProps> = ({children}) => {
  return (
    <div className='container mx-auto px-1 sm:px-10 lg:px-32'>{children}</div>
  )
}

export default Container