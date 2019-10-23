import React from 'react';

import './custom-button.styles.scss';



const CusttomButton =({children , ...otherProps})=>(
  <button className='custom-button' {...otherProps}>
  {children}
  </button>  
)

export default CusttomButton;