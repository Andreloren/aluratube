import React, { useEffect, useState } from "react";
import { Header } from "../src/components/header/Header";
import Menu from "../src/components/menu/index";
import { videoService } from "../src/components/services/videoService";
import { Timeline } from "../src/components/timeline/Timeline.js";

function HomePage() {
  const service = videoService();
  const [valorDoFiltro, setValorDoFiltro] = useState("");
  const [playlists, setPlaylists] = useState({});

  useEffect(() => {
    service.getAllVideos().then((dados) => {
      // Forma imutavel
      const novasPlaylists = {};
      dados.data.forEach((video) => {
        if (!novasPlaylists[video.playlist])
          novasPlaylists[video.playlist] = [];
        novasPlaylists[video.playlist] = [
          video,
          ...novasPlaylists[video.playlist],
        ];
      });

      setPlaylists(novasPlaylists);
    });
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu
          valorDoFiltro={valorDoFiltro}
          setValorDoFiltro={setValorDoFiltro}
        />
        <Header />
        <Timeline searchValue={valorDoFiltro} playlists={playlists}>
          Conteúdo
        </Timeline>
      </div>
    </>
  );
}

export default HomePage;
