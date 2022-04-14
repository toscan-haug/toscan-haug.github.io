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
              (0m 46s) <br />
              Collaboration avec <br />
            </>
          }
          verso={
            <>
              Production sur FL <br />
            </>
          }
          hover={false}
        />
      </Section>

      {/* ************************** */}
      <Section title="Perdu">
        <YoutubePlayer url="https://www.youtube.com/embed/ZbDB1EGcr8s" />
        <FlipFlop
          recto={
            <>
              (1m 46s) <br />
              Collaboration avec <br />
            </>
          }
          verso={
            <>
              Production sur FL <br />
              Travail sur panning, voix <br />
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
              (1m 45s) <br />
              Collaboration avec <br />
              Instrumental: Basse électrique, clarinette <br />
            </>
          }
          verso={
            <>
              Production sur FL <br />
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
              (1m 43s) <br />
              Collaboration avec <br />
              Travail sur Lead et Choeurs <br />
            </>
          }
          verso={
            <>
              Production sur FL <br />
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
              (1m 45s) <br />
              Collaboration avec <br />
              Piano et Cordes <br />
            </>
          }
          verso={
            <>
              Production sur FL <br />
            </>
          }
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default MusicPage;
