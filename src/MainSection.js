import classes from "./MainSection.module.css";
import TextInfo from "./TextInfo";
import VideoPlayer from "./VideoPlayer";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
const MainSection = () => {
  const [ref0, inView0, entry0] = useInView({ threshold: 0.5 });
  const [ref1, inView1, entry1] = useInView({ threshold: 0.5 });
  const [ref2, inView2, entry2] = useInView({ threshold: 0.5 });
  useEffect(() => {}, [inView0, entry0, inView1, inView2, entry1, entry2]);

  const [items, setItems] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/ee762599-31ae-4a3d-a6c7-d596525945e1")
      .then((response) => {
        if (!response.ok) {
          alert("Something Went Wrong");
        }
        return response.json();
      })
      .then((data) => {
        setItems(data.texts);
      });
  }, []);

  return (
    <>
      <div className={classes.container}>
        {items.length > 0 && (
          <div className={classes.text}>
            <TextInfo
              ref={ref0}
              heading={items[0].heading}
              subheading={items[0].subHeading}
              description={items[0].description}
            />
            <TextInfo
              ref={ref1}
              heading={items[1].heading}
              subheading={items[1].subHeading}
              description={items[1].description}
            />
            <TextInfo
              ref={ref2}
              heading={items[2].heading}
              subheading={items[2].subHeading}
              description={items[2].description}
            />
          </div>
        )}
        <VideoPlayer view0={inView0} view1={inView1} view2={inView2} />
      </div>
    </>
  );
};

export default MainSection;
