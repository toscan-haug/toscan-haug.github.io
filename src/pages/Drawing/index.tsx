import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
// import YoutubePlayer from '../../components/YoutubePlayer';
// import LoremIpsum from '../../components/LoremIpsum';

const DrawingPage = () => {
  return (
    <ScrolledPage className="drawing-page" title="Animations et dessins">
      {/* ************* premiere dessin ************* */}
      <Section title="Publication prochaine">
        {/* <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" /> */}
        <FlipFlop recto={<>En construction...</>} verso={<>En construction...</>} hover={false} />
        <FlipFlop recto={<>En construction...</>} verso={<>En construction...</>} hover={false} />
      </Section>

      {/* ************* deuxieme dessin ************* */}
      {/* <Section title="Mon deuxième dessin">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop recto={<LoremIpsum />} verso={<LoremIpsum />} hover={false} />
      </Section> */}
    </ScrolledPage>
  );
};

export default DrawingPage;
