import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Wrapper from 'components/molecules/Wrapper/Wrapper';
import Header from 'components/organisms/Header/Header';
import { basicHotkeys, basicHotkeysWin } from 'components/utils/images/hotkeys';
import Main from 'components/organisms/Main/Main';
import { BtnSimple } from 'getbasecore/Atoms';
import { GlobalContext } from 'context/globalContext';

function Hotkeys() {
  const { state, setState } = useContext(GlobalContext);
  const { system, second } = state;
  const navigate = useNavigate();
  useEffect(() => {
    if (second) {
      navigate('/finish');
    }
  }, [second]);

  return (
    <Wrapper aside={second === true}>
      <Header title="Emulation Hotkeys" />
      <p className="lead">
        Most of the emulators share a series of hotkeys to make them easier to
        use.
      </p>
      <Main>
        <div className="container--grid">
          <div data-col-sm="9">
            {system === 'win32' && <img src={basicHotkeysWin} alt="Hotkeys" />}
            {system !== 'win32' && <img src={basicHotkeys} alt="Hotkeys" />}
          </div>
        </div>
      </Main>
      <footer className="footer">
        <BtnSimple
          css="btn-simple--1"
          type="button"
          aria="Go Next"
          onClick={() => {
            setState({ ...state, second: true });
          }}
        >
          Finish
        </BtnSimple>
      </footer>
    </Wrapper>
  );
}

export default Hotkeys;
