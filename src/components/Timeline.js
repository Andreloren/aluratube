import { StyledTimeline } from "./StyledTimeline";

export function Timeline({ searchValue, ...props }) {
  const playListNames = Object.keys(props.playlists);
  return (
    <StyledTimeline>
      {playListNames.map((nameList) => {
        const videos = props.playlists[nameList];

        return (
          <section key={nameList}>
            <h2>{nameList}</h2>
            <div>
              {videos
                .filter((video) => {
                  const titleNormalized = video.title.toLowerCase();
                  const searchValueNormalized = searchValue.toLowerCase();
                  return titleNormalized.includes(searchValueNormalized);
                })
                .map((video) => {
                  return (
                    <a key={video.url} href={video.url}>
                      <img src={video.thumb} />
                      <span>{video.title}</span>
                    </a>
                  );
                })}
            </div>
          </section>
        );
      })}
    </StyledTimeline>
  );
}
