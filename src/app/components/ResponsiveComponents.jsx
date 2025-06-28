"use client"

import React from 'react'
import useScreenSize from './hooks/useScreenSize'

const ResponsiveComponents = ({children}) => {
const size = useScreenSize()

  return (
    <>
      {children({size})}
    </>
  )
}

export default ResponsiveComponents