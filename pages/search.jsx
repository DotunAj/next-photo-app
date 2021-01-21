import { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import SearchBanner from "../components/SearchBanner";
import Modal from "../components/Modal";
import axios from "../plugins/axios";

export default function Search() {
  const router = useRouter();
  const [loading, setloading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [photo, setPhoto] = useState({});
  const query = router.query.query;
  useEffect(() => {
    getPhotos();
  }, []);

  async function getPhotos() {
    const photosRes = await axios.get(`search/photos?query=${query}`);
    console.log(query);
    setPhotos(photosRes.data.results);
    setloading(false);
  }

  return (
    <>
      <Head>
        <title>Photo App</title>
      </Head>
      <SearchBanner
        search={query}
        showSearch={false}
        loading={loading}
        photos={photos}
      />

      {showModal && (
        <Modal photo={photo} closeModal={() => setShowModal(false)} />
      )}

      <div className='home'>
        <div className='container'>
          <div className='home__container'>
            {loading && (
              <div className='photo-grid'>
                {[1, 2, 3, 4, 5, 6].map((item) => (
                  <div
                    key={item}
                    className={
                      "photo-grid__item shine placeholder " +
                      `span-${Math.floor(Math.random() * 3) + 1}`
                    }
                  >
                    <div className='photo-grid__item-line' />
                    <div className='photo-grid__item-line short' />
                  </div>
                ))}
              </div>
            )}

            {!loading && (
              <div className='photo-grid'>
                {photos?.map((photo) => (
                  <div
                    key={photo.id}
                    className={
                      "photo-grid__item " +
                      `span-${Math.floor(Math.random() * 3) + 1}`
                    }
                    onClick={() => {
                      setPhoto(photo);
                      setShowModal(true);
                    }}
                  >
                    <img src={photo.urls.small} alt={photo.alt_description} />
                    <div className='details'>
                      <h5>{photo.user.name}</h5>
                      <p>{photo.user.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
