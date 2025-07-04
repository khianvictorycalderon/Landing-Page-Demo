import { useEffect } from "react"
import { NavBar } from "./Components/NavigationBar/NavBar";
import { Banner } from "./Components/Banner/Banner";

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

  return (
    <>

      <NavBar 
        Buttons={ButtonList} 
        Style={{
          NavBarBackground: "rgb(20, 20, 20)",
          ButtonTextColor: "rgb(221, 221, 221)"
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
    </>
  )
}
