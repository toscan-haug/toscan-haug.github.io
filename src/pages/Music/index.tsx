import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
// import LoremIpsum from '../../components/LoremIpsum';

const MusicPage = () => {
  return (
    <ScrolledPage className="music-page" title="Sound design">
      {/* ************************** */}
      <Section title="Chamonix">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop
          recto={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={true}
        />
      </Section>

      {/* ************************** */}
      <Section title="Perdu">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop
          recto={<>Panning</>}
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={true}
        />
      </Section>

      {/* ************************** */}
      <Section title="Mississipi">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop
          recto={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={true}
        />
      </Section>

      {/* ************************** */}
      <Section title="Autre Chose">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop
          recto={
            <>
              Collaboration avec <br />
              Production sur FL <br />
              Equilibre voix
            </>
          }
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={true}
        />
      </Section>

      {/* ************************** */}
      <Section title="Pink Stars">
        <YoutubePlayer url="https://www.youtube.com/embed/zXHcmpBGoEg" />
        <FlipFlop
          recto={
            <>
              Collaboration avec <br />
              Production sur FL <br />
              Piano et Cordes
            </>
          }
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={true}
        />
      </Section>
    </ScrolledPage>
  );
};

export default MusicPage;
