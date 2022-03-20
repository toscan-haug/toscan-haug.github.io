import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
import LoremIpsum from '../../components/LoremIpsum';

const DrawingPage = () => {
  return (
    <ScrolledPage className="drawing-page" title="Plein de dessins">
      {/* ************* premiere dessin ************* */}
      <Section title="Mon premier dessin">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>

      {/* ************* deuxieme dessin ************* */}
      <Section title="Mon deuxième dessin">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={true} />
      </Section>
    </ScrolledPage>
  );
};

export default DrawingPage;
