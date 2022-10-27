import { useEffect, useState } from 'react'

export const Tooltip = (props) => {
  let finalInlineStyles = {}

  const [isActive, setIsActive] = useState()

  const { children, title } = props

  // position
  // const { position } = props
  // size
  const { width } = props

  if (width) {
    finalInlineStyles = {
      ...finalInlineStyles,
      maxWidth: `${width}px`,
    }
  }

  // types of call
  //  - recives a boolean to show the tooltip
  const { condition } = props
  //  - when hovers the element shows up
  const { hover } = props
  //  - wen clicks the element shows up
  const { click } = props

  useEffect(() => {
    if (condition) {
      setIsActive(true)
    } else {
      setIsActive(false)
    }
  }, [condition])

  const handleHover = (e) => {
    switch (e.type) {
      case 'mouseenter':
        setTimeout(() => {
          setIsActive(true)
        }, 500)
        break
      case 'mouseleave':
        setIsActive(false)
        break
    }
  }
  const handleClick = (e) => {
    if (!isActive) {
      setIsActive(true)
    }
    setTimeout(() => {
      setIsActive(false)
    }, 3000)
  }

  const finalClasses = `
  tooltip
  ${isActive ? 'active' : ''}
  `

  // Hover render
  if (hover) {
    return (
      <div className={finalClasses}>
        <span className='tooltip-span' style={finalInlineStyles}>
          {title}
        </span>
        <div onMouseEnter={handleHover} onMouseLeave={handleHover}>
          {children}
        </div>
      </div>
    )
  }

  // Click render
  if (click) {
    return (
      <div className={finalClasses}>
        <span className='tooltip-span' style={finalInlineStyles}>
          {title}
        </span>
        <div onClick={handleClick}>{children}</div>
      </div>
    )
  }

  // Condition render
  return (
    <div className={finalClasses}>
      <span className='tooltip-span' style={finalInlineStyles}>
        {title}
      </span>
      <div>{children}</div>
    </div>
  )
}
