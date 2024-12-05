import React from 'react'

const PopupContent = ({copied}) => {
  return (
    <div>
        {copied && (
            <div >
                Copied to CLipboard
            </div>
        )}
    </div>
  )
}

export default PopupContent;