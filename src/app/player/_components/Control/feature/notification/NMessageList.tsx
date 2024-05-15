'use client'

import React,{ useRef } from "react"
import NMessage from './NMessage'
import { NMessageProps,Positions } from "./type";
import './style/NMessageList.css'

const NMessageList = ({ data, position }:{ 
	data: NMessageProps[],
	position: Positions
}) => {
  
  return (
    data.length > 0 && (
      <div
        className={`notif-list notif-list--${position}`}
        aria-live="assertive"
      >
        {data.map((m:NMessageProps,i:number) => (
          <NMessage
            key={i}
						id={m.id}
            label={m.label}
            type={m.type}
						size={m.size}
          />
        ))}
      </div>
    )
  );
};

export default NMessageList;
