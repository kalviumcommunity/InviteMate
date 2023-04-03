import React, { useEffect, useState, useRef } from "react";
import { useLocation } from "react-router-dom";
// import headingData from "../CategoriesData";
import "../Combined.css";
import Navbar from "../Navbar";
import Btemp1 from "../categories/Btemp1/Btemp1";
import Wtemp1 from "../categories/wedding/Wtemp1/Wtemp1";
import WedAnniv1 from "../categories/WedAnniv1/WedAnniv";
import html2canvas from "html2canvas";
import { saveAs } from "file-saver";
import { useAuth0 } from "@auth0/auth0-react";
import domtoimage from 'dom-to-image';


// import btemp1 from "./Templates/btemp1SS.png";
// import wtemp1 from "./Templates/Wed1SS.png";
// import wedAnniv1 from "./Templates/wedAnnivSS.png";
import Back from "../Back";
import Loader from "../Loader";

function EditingPage() {
  const templates = [
    { id: 11, temp: <Btemp1 /> },
    { id: 12, temp: <WedAnniv1 /> },
    { id: 13, temp: <Wtemp1 /> },
    { id: 14, temp: <Btemp1 /> },
    { id: 15, temp: <Wtemp1 /> },
    { id: 21, temp: <WedAnniv1 /> },
    { id: 22, temp: <Btemp1 /> },
    { id: 23, temp: <Wtemp1 /> },
    { id: 24, temp: <WedAnniv1 /> },
    { id: 25, temp: <Btemp1 /> },
    { id: 31, temp: <Wtemp1 /> },
    { id: 32, temp: <Btemp1 /> },
    { id: 33, temp: <WedAnniv1 /> },
    { id: 34, temp: <Btemp1 /> },
    { id: 35, temp: <Wtemp1 /> },
    { id: 41, temp: <Btemp1 /> },
    { id: 42, temp: <WedAnniv1 /> },
    { id: 43, temp: <Wtemp1 /> },
    { id: 44, temp: <Btemp1 /> },
    { id: 45, temp: <WedAnniv1 /> },
    { id: 51, temp: <Wtemp1 /> },
    { id: 52, temp: <Btemp1 /> },
    { id: 53, temp: <WedAnniv1 /> },
    { id: 54, temp: <Wtemp1 /> },
    { id: 55, temp: <Btemp1 /> },

    { id: 111, temp: <Btemp1 /> },
    { id: 112, temp: <WedAnniv1 /> },
    { id: 113, temp: <Wtemp1 /> },

    { id: 121, temp: <Wtemp1 /> },
    { id: 122, temp: <WedAnniv1 /> },
    { id: 123, temp: <Btemp1 /> },

    { id: 131, temp: <Btemp1 /> },
    { id: 132, temp: <Wtemp1 /> },
    { id: 133, temp: <WedAnniv1 /> },

    { id: 141, temp: <WedAnniv1 /> },
    { id: 142, temp: <Wtemp1 /> },
    { id: 143, temp: <Btemp1 /> },

    { id: 151, temp: <WedAnniv1 /> },
    { id: 152, temp: <Btemp1 /> },
    { id: 153, temp: <Wtemp1 /> },

    { id: 211, temp: <Btemp1 /> },
    { id: 212, temp: <WedAnniv1 /> },
    { id: 213, temp: <Wtemp1 /> },

    { id: 221, temp: <Btemp1 /> },
    { id: 222, temp: <WedAnniv1 /> },
    { id: 223, temp: <Wtemp1 /> },

    { id: 231, temp: <Btemp1 /> },
    { id: 232, temp: <WedAnniv1 /> },
    { id: 233, temp: <Wtemp1 /> },

    { id: 241, temp: <Btemp1 /> },
    { id: 242, temp: <WedAnniv1 /> },
    { id: 243, temp: <Wtemp1 /> },

    { id: 251, temp: <Btemp1 /> },
    { id: 252, temp: <WedAnniv1 /> },
    { id: 253, temp: <Wtemp1 /> },

    { id: 311, temp: <Btemp1 /> },
    { id: 312, temp: <WedAnniv1 /> },
    { id: 313, temp: <Wtemp1 /> },

    { id: 321, temp: <Btemp1 /> },
    { id: 322, temp: <WedAnniv1 /> },
    { id: 323, temp: <Wtemp1 /> },

    { id: 331, temp: <Btemp1 /> },
    { id: 332, temp: <WedAnniv1 /> },
    { id: 333, temp: <Wtemp1 /> },

    { id: 341, temp: <Btemp1 /> },
    { id: 342, temp: <WedAnniv1 /> },
    { id: 343, temp: <Wtemp1 /> },

    { id: 351, temp: <Btemp1 /> },
    { id: 352, temp: <WedAnniv1 /> },
    { id: 353, temp: <Wtemp1 /> },

    { id: 411, temp: <Btemp1 /> },
    { id: 412, temp: <WedAnniv1 /> },
    { id: 413, temp: <Wtemp1 /> },

    { id: 421, temp: <Btemp1 /> },
    { id: 422, temp: <WedAnniv1 /> },
    { id: 423, temp: <Wtemp1 /> },

    { id: 431, temp: <Btemp1 /> },
    { id: 432, temp: <WedAnniv1 /> },
    { id: 433, temp: <Wtemp1 /> },

    { id: 441, temp: <Btemp1 /> },
    { id: 442, temp: <WedAnniv1 /> },
    { id: 443, temp: <Wtemp1 /> },

    { id: 451, temp: <Btemp1 /> },
    { id: 452, temp: <WedAnniv1 /> },
    { id: 453, temp: <Wtemp1 /> },

    { id: 511, temp: <Btemp1 /> },
    { id: 512, temp: <WedAnniv1 /> },
    { id: 513, temp: <Wtemp1 /> },

    { id: 521, temp: <Btemp1 /> },
    { id: 522, temp: <WedAnniv1 /> },
    { id: 523, temp: <Wtemp1 /> },

    { id: 531, temp: <Btemp1 /> },
    { id: 532, temp: <WedAnniv1 /> },
    { id: 533, temp: <Wtemp1 /> },

    { id: 541, temp: <Btemp1 /> },
    { id: 542, temp: <WedAnniv1 /> },
    { id: 543, temp: <Wtemp1 /> },

    { id: 551, temp: <Btemp1 /> },
    { id: 552, temp: <WedAnniv1 /> },
    { id: 553, temp: <Wtemp1 /> },
  ];

  const [idNum, setIdNum] = useState([]);
  const [load, setLoad] = useState(true);

  const { isAuthenticated, user } = useAuth0();

  const state = useLocation();

  const templateRef = useRef();

  useEffect(() => {
    setIdNum(state.state.id);
  }, [state.state.id]);

  const temp = templates.find((each) => each.id === idNum);
  const finalTemp = temp?.temp;
  // console.log(user.name, idNum, finalTemp?.type.name);

  const handleDownload = () => {
    setTimeout(() => {
      domtoimage
        .toJpeg(templateRef.current,{
          scroll: {
            enable: true,
            y:-window.scrollY,
            x: -window.scrollX
          }
        })
        .then((dataUrl) => {
          const link = document.createElement("a");
          link.download = `template.jpeg`;
          link.href = dataUrl.toString();
          link.click();
        })
        .catch((error) => console.log("Error creating image: ", error));
    }, 10);

    if (isAuthenticated) {
      fetch("http://localhost:4000/editing", {
        method: "POST",
        body: JSON.stringify({
          username: user.name,
          templateID: idNum,
          template: finalTemp?.type.name,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    }
  };
  

  // const handleDownload = () => {
  //   html2canvas(templateRef.current, {
  //     logging: true,
  //     scrollY: -window.scrollY,
  //   }).then((canvas) => {
  //     canvas.toBlob((blob) => {
  //       saveAs(blob, "template.png");
  //     });
  //   });

  //   if (isAuthenticated) {
  //     fetch("http://localhost:4000/editing", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         username: user.name,
  //         templateID: idNum,
  //         template: finalTemp?.type.name,
  //       }),
  //       headers: {
  //         "Content-type": "application/json; charset=UTF-8",
  //       },
  //     })
  //       .then((data) => data.json())
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  setTimeout(() => {
    setLoad(false);
  }, 1200);

  return (
    <>
      {load ? (
        <Loader />
      ) : (
        <div className="editingNavBar">
          <Navbar handleDownload={handleDownload} />
          <Back />
          {/* {temp?.temp} */}
          <div id="#editPageContainer" style={{display:"grid"}}>
            <div ref={templateRef} style={{
              width:"fit-content",
              height:"fit-content",
              position:"absolute",
              justifySelf:"center"
            }}>
            {finalTemp}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default EditingPage;
