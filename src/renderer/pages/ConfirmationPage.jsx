import React, { useEffect, useState, useContext, useRef } from 'react';
import { GlobalContext } from 'context/globalContext';
import Wrapper from 'components/molecules/Wrapper/Wrapper';

import Header from 'components/organisms/Header/Header';
import Footer from 'components/organisms/Footer/Footer';

import Confirmation from 'components/organisms/Wrappers/Confirmation';

function ConfirmationPage() {
  const { state } = useContext(GlobalContext);
  const { bezels } = state;
  const [statePage, setStatePage] = useState({
    disabledNext: false,
    disabledBack: false,
    data: '',
    dom: undefined,
  });
  const { disabledNext, disabledBack, data, dom } = statePage;

  // Enabling button when changing the global state only if we have a device selected
  useEffect(() => {
    if (bezels !== '') {
      setStatePage({ ...statePage, disabledNext: false });
    }
  }, [state]);



  return (
    <div style={{ height: '100vh' }} >
      
      <Wrapper>
        <Header title="Here is what EmuDeck will do" />
        <Confirmation data={data} />
        <Footer
          next="end"
          nextText="Finish"
          disabledNext={disabledNext}
          disabledBack={disabledBack}
        />
      </Wrapper>
    </div>
  );
}

export default ConfirmationPage;
