import { useEffect } from "react"
import { NavBar } from "./Components/NavigationBar/NavBar";
import { Banner } from "./Components/Banner/Banner";
import { TextSection } from "./Components/TextSection/TextSection";
import Carousel, { CarouselFull } from "./Components/Carousel/Carousel";
import { Footer } from "./Components/Footer/Footer";
import Collapsible from "./Components/Collapsible/Collapsible";
import FlexText from "./Components/FlexText/FlexText";

// Colors
const colorLighter = "rgb(235, 235, 235)";
const colorLight = "rgb(227, 227, 227)";
const colorDark = "rgb(35, 35, 35)";
const colorDarker = "rgb(20, 20, 20)";

const LoremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

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

  const WhatWeDoData = [
    {
      Label: "Wash",
      Content: LoremIpsum
    },
    {
      Label: "Dry",
      Content: LoremIpsum
    },
    {
      Label: "Fold",
      Content: LoremIpsum
    },
    {
      Label: "Iron",
      Content: LoremIpsum
    },
  ];

  const CarouselData = [
    {
      Title: "Our Facilities",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ImgPath: "images/wash1.jpg",
      Alt: "Lorem Ipsum"
    },
    {
      Title: "Extended Branches",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ImgPath: "images/wash2.jpg",
      Alt: "Lorem Ipsum"
    },
    {
      Title: "Customer Support",
      Description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ImgPath: "images/wash3.jpg",
      Alt: "Lorem Ipsum"
    },
  ];

  const FooterSocialLinks = [
    {
      ImagePath: "images/github.png",
      Href: "https://github.com/khianvictorycalderon",
      Alt: "GitHub"
    },
    {
      ImagePath: "images/upwork.png",
      Href: "https://www.upwork.com/freelancers/~013a9c6d4543925f1e",
      Alt: "Upwork"
    },
    {
      ImagePath: "images/tiktok.png",
      Href: "https://www.tiktok.com/@khian.vc",
      Alt: "TikTok"
    },
  ];
  const FooterMiscLinks = [
    {
      Text: "Blogs",
      Href: "#"
    },
    {
      Text: "Features",
      Href: "#"
    },
    {
      Text: "Articles",
      Href: "#"
    },
    {
      Text: "News",
      Href: "#"
    },
    {
      Text: "Tutorials",
      Href: "#"
    },
    {
      Text: "Privacy Policy",
      Href: "#"
    },
    {
      Text: "Terms and Conditions",
      Href: "#"
    },
  ];
  const MiscInfo = (
    <>
      <p>All rights reserved 2025.</p>
    </>
  );

  const CarouselData2 = [
    {
      Title: "Fast Service",
      Description: LoremIpsum,
      ImgPath: "images/clothe1.jpg",
      Alt: "Lorem Ipsum"
    },
    {
      Title: "Cleaning Quality",
      Description: LoremIpsum,
      ImgPath: "images/clothe2.jpg",
      Alt: "Lorem Ipsum"
    },
    {
      Title: "Customer-Friendly",
      Description: LoremIpsum,
      ImgPath: "images/clothe3.jpg",
      Alt: "Lorem Ipsum"
    },
  ];

  return (
    <>

      <NavBar 
        Buttons={ButtonList} 
        Style={{
          NavBarBackground: colorDarker,
          ButtonTextColor: colorLighter
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
          {WhatWeDoData.map((item, index) => (
            <Collapsible 
              key={`${item.Label}${index}`}
              Title={item.Label}
              Style={{
                TextColor: colorDarker,
                BackgroundColor: colorLight,
                Rounded: true,
                FontTitleSize: "16pt"
              }}
              >
              {LoremIpsum}
            </Collapsible>
          ))}
          <p>
            {LoremIpsum}
          </p>
        </>
      }
      Style={{
        Background: colorLighter,
        TextColor: colorDark,
        HRColor: colorDark
      }}
      />

      <Carousel
        Images={CarouselData}
        Style={{
          HRColor: colorLighter,
          TextColor: colorDark,
          Background: colorLight
        }}
        ReversedOrder
      />

      <CarouselFull
          Images={CarouselData2}
      />

      <FlexText
        Title="Visions"
        TextData={[
          [<>{LoremIpsum}</>, <>{LoremIpsum}</>]
        ]}
        Style={{
          Background: colorLighter,
          TextColor: colorDarker
        }}
      />

      <FlexText
        Title="Mission"
        TextData={[
          [<>{LoremIpsum}</>, <>{LoremIpsum}</>]
        ]}
        Style={{
          Background: colorLight,
          TextColor: colorDarker
        }}
      />

      <Footer 
        Title={
          <h4>
              Website Created by <a href="">Khian</a>
          </h4>
        }
        Description={<p>Want to help me?{" "}
          <a 
            href="https://khianvictorycalderon.github.io/donation/donate.html"
            >
            Donate to Khian Victory D. Calderon
          </a>
        </p>
        }
        Logo="images/Khian_Icon_Logo.png"
        Style={{
          Background: colorDarker,
          TextColor: colorLighter
        }}
        Links={FooterSocialLinks}
        MiscLinks={FooterMiscLinks}
        MiscInfo={MiscInfo}
      />

    </>
  )
}
