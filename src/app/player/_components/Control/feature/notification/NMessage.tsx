import React from "react"
import { NMessageProps } from './type'
import SuccessIcon from './Success'
import FailureIcon from './Failure'
import './style/NMessage.css'
import { Row } from "src/app/component/layout"

const NMessage = <T extends NMessageProps>(props:T) => {
	const { label, type, size }= props
	const iconMap = {
    success: <SuccessIcon {...size} />,
    fail: <FailureIcon {...size} />,
  };
	
	return (
		<div className={`nmessage nmessage--${type}`} role="alert">
      <Row rowWidth={100}>
        <>
          {iconMap[type] && <div>{iconMap[type]}</div>}
          <p>{`${label}`}</p>     
        </>
      </Row>
    </div>
	)
};

export default NMessage;
