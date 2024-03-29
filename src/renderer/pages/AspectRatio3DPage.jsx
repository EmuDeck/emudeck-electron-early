import React, { useState, useContext, useRef, useEffect } from 'react';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

import AspectRatio3D from 'components/organisms/Wrappers/AspectRatio3D';

function AspectRatio3DPage() {
  const { state, setState } = useContext(GlobalContext);
  const { ar } = state;
  const [statePage] = useState({
    disabledNext: false,
    disabledBack: false,
    data: '',
    dom: undefined,
  });
  const { disabledNext, disabledBack, data, dom } = statePage;
  const arSet = (arStatus) => {
    setState({
      ...state,
      ar: {
        ...ar,
        classic3d: arStatus,
      },
    });
  };



  return (
    <div style={{ height: '100vh' }} >
      
      <Wrapper>
        <Header title="Configure Aspect Ratio for Classic 3D Games" />
        <AspectRatio3D data={data} onClick={arSet} />
        <Footer
          next="aspect-ratio-dolphin"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </Wrapper>
    </div>
  );
}

export default AspectRatio3DPage;
