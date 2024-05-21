import React, { createContext, useState } from 'react';

export const GlobalContext = createContext(null);

const GlobalContextProvider = ({ children }) => {
  const [VideosID, setVideosID] = useState([]);
  const[ButSelected,SetSelected]=useState('New')
  const[Selected,SetSelectedSide]=useState('home')
  const[UpFront,SetUpFront]=useState(false)
  const[Disclaimer,SetDisclaimer]=useState(false)

  return (
    <GlobalContext.Provider value={{ VideosID, setVideosID,ButSelected,
    SetSelected,Selected,SetSelectedSide,UpFront,SetUpFront,Disclaimer,SetDisclaimer}}>
      {children}
    </GlobalContext.Provider>
  );
};

export default React.memo(GlobalContextProvider);
