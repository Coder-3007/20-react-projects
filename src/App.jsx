// import Accordian from "./Components/Accordian";
// // import Tabs from "./Components/Custom-Tabs/Tabs";
// import ImageSlider from "./Components/ImageSlider";
// import LightDarkMode from "./Components/Light-dark-mode";
// import LoadMoreDataButton from "./Components/Load-More-DataButton";
// import QrCodeGenerator from "./Components/Qr Code Generator";
// import RandomColors from "./Components/Random-Colors";
// import ScrollIndicator from "./Components/Scroll-indicator";
// import StarRating from "./Components/StarRating";
// import TreeView from "./Components/Tree-View";
// import menus from "./Components/Tree-View/data";

import "./App.css";
import ScrollToTopAndBottom from "./Components/Scroll-to-top-bottom";
import ScrollToSection from "./Components/Scroll-to-top-bottom/scroll-to-section";
import UseFetchHookTest from "./Components/use-fetch/test";
import UseOnclickOutsideTest from "./Components/use-outside-click/test";
import UseWindowResizeTest from "./Components/use-window-resize/test";

// import SearchAutocomplete from "./Components/Search-autocomplete with api";
// import FeatureFlag from "./Components/Feature-Flag";
// import FeaturFlagGlobalState from "./Components/Feature-Flag/context";
// import TicTakToe from "./Components/TIkTacToe";

// import PopUp from "./Components/ModelPopUP/PopUp";
// import GithubProfileFinder from "./Components/Github-Profile-Finder";
// import PopUpTest from "./Components/ModelPopUP/PopUp-test";

function App() {
  return (
    <div className="App">
      {/* Accordain Component App  */}
      {/* <Accordian /> */}

      {/* Random-Colors App */}
      {/* <RandomColors /> */}

      {/* StarRating App */}
      {/* <StarRating /> */}

      {/* Image Slider */}
      {/* <ImageSlider
        url={"https://picsum.photos/v2/list"}
        page={"1"}
        limit={"10"}
      /> */}

      {/* Load More Data Button App */}
      {/* <LoadMoreDataButton /> */}

      {/* Tree View / Recursive Navigation Menu App */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr Code Generator App */}
      {/* <QrCodeGenerator /> */}

      {/* Light Dark Mode App */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator App */}
      {/* <ScrollIndicator url={"http://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs App */}
      {/* <Tabs /> */}

      {/* Load More Data App */}
      {/* <PopUpTest /> */}

      {/* Github Profile Finder App */}
      {/* <GithubProfileFinder /> */}

      {/* Api Implementation App */}
      {/* <SearchAutocomplete />
       */}

      {/* Tic Tak Toe App */}
      {/* <TicTakToe /> */}

      {/*  FeatureFlag App*/}
      {/* <FeaturFlagGlobalState>
        <FeatureFlag />
      </FeaturFlagGlobalState> */}

      {/* Use Fetch Hook app  */}

      {/* <UseFetchHookTest /> */}

      {/* Use Onclink  */}

      {/* <UseOnclickOutsideTest /> */}

      {/* use window resize app  */}

      {/* <UseWindowResizeTest /> */}

      {/* scrol to top & bottom app  */}
      <ScrollToSection />

      <ScrollToTopAndBottom />
    </div>
  );
}

export default App;
