import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
import LoremIpsum from '../../components/LoremIpsum';

const VideoPage = () => {
  return (
    <ScrolledPage className="video-page" title="Plein de vidéos">
      {/* ************* premiere video ************* */}
      <Section title="Ma première vidéo">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>

      {/* ************* deuxieme video ************* */}
      <Section title="Ma deuxième vidéo">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>

      {/* ************* troisieme video ************* */}
      <Section title="Ma troisième vidéo">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>
    </ScrolledPage>
  );
};

export default VideoPage;
