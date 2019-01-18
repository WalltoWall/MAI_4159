import styled from 'react-emotion'
import t from 'theme'

export const Container = styled.div`
  width: 100%;
  
  margin: -${t.s(5)} 0;

  ${t.mq.s} {    
    margin: -${t.s(3.5)} 0;
  }

  ${t.mq.l} {    
    margin: -${t.s(6.2)} 0;
  }
  ${t.mq.x} {    
    margin: -${t.s(5.5)} 0;
  }
  ${t.mq.xx} {    
    margin: -${t.s(6)} 0;
  }
  ${t.mq.xxx} {    
    margin: -${t.s(5.8)} 0;
  }
`
