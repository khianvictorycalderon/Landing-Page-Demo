import { useEffect } from "react"
import { NavBar } from "./Components/NavigationBar/NavBar";
import { Banner } from "./Components/Banner/Banner";
import { TextGrid } from "./Components/TextGrid/TextGrid";
import { TextSection } from "./Components/TextSection/TextSection";

// Colors
const colorLight = "rgb(235, 235, 235)";
const colorDark = "rgb(35, 35, 35)";
const colorDarker = "rgb(20, 20, 20)";

export default function App() {
  
  useEffect(() => {
    // alert("This is only a demo for a landing page and is not a real business.");
  },[]);
  
  const ButtonList = [
    {
      Label: "Blogs",
      OnClick: () => alert("Blogs Clicked!"),
    },
    {
      Label: "Products",
      OnClick: () => alert("Products Clicked!"),
    },
    {
      Label: "Services",
      OnClick: () => alert("Services Clicked!"),
    },
  ];   

  const TextGridData = [
    {
      Label: "Wash",
      OnClick: () => alert("You've clicked me")
    },
    {
      Label: "Dry",
      OnClick: () => alert("You've clicked me")
    },
    {
      Label: "Fold",
      OnClick: () => alert("You've clicked me")
    },
    {
      Label: "Iron",
      OnClick: () => alert("You've clicked me")
    },
  ];

  return (
    <>

      <NavBar 
        Buttons={ButtonList} 
        Style={{
          NavBarBackground: colorDarker,
          ButtonTextColor: colorLight
        }}
        Logo={{
          ImagePath: "images/Star.png",
        }}
        Type="solid"
      />

      <Banner
          Title="Clother"
          Description={
          <>
            <p>We wash, dry, fold, and iron your clothes.</p>
            <button onClick={() => alert("You clicked me")} className="btn btn-primary">Inquire Now!</button>
          </>
        }
        BackgroundImage="images/wardrobe.jpg"
      />

      <TextSection Title="What We Do" Content={
        <>
          <TextGrid
            Text={TextGridData}
            Style={{
              Background: colorLight,
              TextBackground: "rgba(0, 0, 0, 0)",
              TextColor: colorDark,
              TextBorderColor: colorDark,
              
            }}
          />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </>
      }
      Style={{
        Background: colorLight,
        TextColor: colorDark
      }}
      />

    </>
  )
}
