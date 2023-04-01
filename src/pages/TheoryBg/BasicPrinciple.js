import React from 'react'
import styles from '../../styles/TheoryBg/BasicPrinciple.module.css'

const BasicPrinciple = () => {
  return (
<>
<div className={styles.title}><p>Basic Principles of Flight</p></div>
    <div className={styles.textbox}>
        <div className={styles.describtion}> 
        <p>To understand how an aircraft stays in the air, it's important to know the basic principles of flight. These principles are lift, drag, thrust, and weight. 
            Lift is the force that keeps an aircraft in the air, and it's generated by the wings as they move through the air. 
            Drag is the force that opposes the motion of the aircraft, and it's caused by the friction of the air against the aircraft's surface. Thrust is the force that moves the aircraft forward, and it's generated by the aircraft's engines or propellers. Weight is the force that pulls the aircraft down towards the ground, and it's determined by the mass of the aircraft and the force of gravity.</p>
        <p>By balancing these forces, an aircraft can achieve and maintain level flight. The design of the wings, engines, and other components of the aircraft is critical to achieving the right balance of lift, drag, thrust, and weight for the aircraft's mission.</p>
        </div>
    </div>
</>

  )
}

export default BasicPrinciple