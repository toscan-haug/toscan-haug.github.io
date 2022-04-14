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
        <YoutubePlayer url="https://www.youtube.com/embed/m9YlkZ4GfCE" />
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
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Perdu">
        <YoutubePlayer url="https://www.youtube.com/embed/ZbDB1EGcr8s" />
        <FlipFlop
          recto={<>Panning</>}
          verso={
            <>
              Collaboration avec <br />
              Production sur FL
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Mississipi">
        <YoutubePlayer url="https://www.youtube.com/embed/LRb7EPptC3Y" />
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
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Autre Chose">
        <YoutubePlayer url="https://www.youtube.com/embed/mHUGT3_ocKQ" />
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
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Pink Stars">
        <YoutubePlayer url="https://www.youtube.com/embed/4mBPRvEN6F8" />
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
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default MusicPage;
