import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
// import LoremIpsum from '../../components/LoremIpsum';

const MusicPage = () => {
  return (
    <ScrolledPage className="music-page" title="Musique">
      {/* ************************** */}
      <Section title="Chamonix">
        <YoutubePlayer url="https://www.youtube.com/embed/m9YlkZ4GfCE" />
        <FlipFlop
          recto={
            <>
              Composition pour Jeune Homme <br /><br />

              Univers de la neige et du cartoon. <br/><br/>

              Sons secs et rebondissants <br/>
              Illustrer les soubresauts.
            </>
          }
          verso={
            <>
              Production sur FL et Synthétiseur <br /><br />

              Basse en sound design <br/>

              Sample de grincements <br/>

              Rythmique expérimentale
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
              Composition pour Jeune Homme <br /><br />

              Entre hésitation et confusion. <br/><br/>

              Travail sur les voix <br />
              Spatialisation et entrelacement <br />
            </>
          }
          verso={
            <>
              Production sur FL <br /><br />

              Réverb "Raum" <br />
              Utilisation du bend pour dénaturer <br />
              Automation pour dynamiser le morceau <br />
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
              Collaboration instrumentale avec Hypnotic <br /><br />

              Fan de Tom Sawyer. <br/><br/>

              Inspirés par l'orchestration et les harmonisations de la série originale <br/>
              Modernisation de l'esprit New Orleans
            </>
          }
          verso={
            <>
              Production sur FL <br /><br />

              Basse électrique et autres instruments samplés <br />
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
              Composition pour Jeune Homme <br /><br />

              Inspiration Rap 90. <br/><br/>

              Production épurée pour mettre en valeur les différentes voix <br/>
              Pour finir sur plus de vacarme.
            </>
          }
          verso={
            <>
              Production sur FL <br /><br/>

              Humanisation du rythme <br/>
              Travail de la distorsion <br/>
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
              Instrumental pianos et cordes <br /><br />

              Musique d'épopée fantastique <br/><br/>

              Précision du placement des différents intruments<br/>
              Maîtrise de la tension générale du morceau
            </>
          }
          verso={
            <>
              Production sur FL <br /><br/>

              Effet vynil <br/>
              Réverb "Raum" <br/>
              Piano "Noire", "Emotive Strings" et "Symphony Essential Woodwind"
            </>
          }
          hover={false}
        />
      </Section>
    </ScrolledPage>
  );
};

export default MusicPage;
