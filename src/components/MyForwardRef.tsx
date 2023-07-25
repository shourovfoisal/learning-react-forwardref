import React from 'react'

type Props = {}

const MyForwardRef = React.forwardRef((props: Props, ref: any) => {
    return (
      <div>
          <input type="text" ref={ref} />
      </div>
    )
  });

export default MyForwardRef