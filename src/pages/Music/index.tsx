import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
import LoremIpsum from '../../components/LoremIpsum';

const MusicPage = () => {
  return (
    <ScrolledPage className="music-page" title="Plein de musique">
      {/* ************* premiere dessin ************* */}
      <Section title="Ma première musique">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>

      {/* ************* deuxieme dessin ************* */}
      <Section title="Ma deuxième musique">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>
    </ScrolledPage>
  );
};

export default MusicPage;
