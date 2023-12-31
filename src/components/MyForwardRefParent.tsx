import React from 'react'
import MyForwardRef from './MyForwardRef'

type Props = {}

const MyForwardRefParent = (props: Props) => {

    const inputRef = React.createRef<HTMLInputElement>();

    const handleClick = () => {
        inputRef.current?.focus();
    }

  return (
    <div>
        <MyForwardRef ref={inputRef} />
        <button onClick={handleClick}>Focus Input</button>
    </div>
  )
}

export default MyForwardRefParent