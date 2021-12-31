import Gallery from "./components/Gallery";
import Header from "./components/Header";
import axios from "axios";
import { useEffect, useState } from "react";
import Button from "./components/Button";
import { useSearchParams } from "react-router-dom";

function App() {
  // const [searchParams, setSearchParams] = useSearchParams();
  const [photo, setPhoto] = useState([]);
  const [searchPhoto, setSearchPhoto] = useState("");
  const [more, setMore] = useState(6);
  // useEffect(() => {
  //   setSearchParams({
  //     image_type: "photo",
  //     pretty: true,
  //     q: searchPhoto,
  //   });
  // }, []);

  const fetchData = () => {
    axios
      .get(
        `https://pixabay.com/api/?key=24590267-68fb1fe9f2e796db1e98e578a&q=${searchPhoto}&image_type=photo&pretty=true`
      )
      .then((res) => {
        setPhoto(res.data.hits);
      });
  };
  const searchPhotoHanler = (details) => {
    console.log(details);
    setSearchPhoto(details);
  };
  useEffect(() => {
    fetchData();
    setMore(6);
  }, [searchPhoto]);

  const moreItems = (number) => {
    setMore(more + number);
  };
  return (
    <div className="">
      <Header photoHandler={searchPhotoHanler} />
      <div className="container flex flex-wrap my-4">
        {photo &&
          photo
            .slice(0, more)
            .map((item) => <Gallery key={item.id} img={item} />)}
      </div>
      <Button numberItems={moreItems} photo={photo} photoMore={more} />
    </div>
  );
}

export default App;
