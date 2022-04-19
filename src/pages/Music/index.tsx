import ScrolledPage from '../../components/ScrolledPage';
import Section from '../../components/Section';
import FlipFlop from '../../components/FlipFlop';
import YoutubePlayer from '../../components/YoutubePlayer';
// import LoremIpsum from '../../components/LoremIpsum';

const MusicPage = () => {
  return (
    <ScrolledPage className="music-page" title="Musiques">
      {/* ************************** */}
      <Section title="Chamonix">
        <YoutubePlayer url="https://www.youtube.com/embed/m9YlkZ4GfCE" />
        <FlipFlop
          recto={
            <>
              <h3>Fiche artistique</h3>
              Composition pour Jeune Homme <br />
              <br />
              Univers de la neige et du cartoon <br />
              <br />
              Sons secs et rebondissants, <br />
              pour illustrer les soubresauts.
            </>
          }
          verso={
            <>
              <h3>Fiche technique</h3>
              Production sur FL Studio et Synthétiseur <br />
              <br />
              Basse en sound design <br />
              Sample de grincements <br />
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
              <h3>Fiche artistique</h3>
              Composition pour Jeune Homme <br />
              <br />
              Entre hésitation et confusion <br />
              <br />
              Travail sur les voix <br />
              Spatialisation et entrelacement
            </>
          }
          verso={
            <>
              <h3>Fiche technique</h3>
              Production sur FL Studio <br />
              <br />
              Réverb "Raum" <br />
              Utilisation du bend pour déstabiliser <br />
              Automations pour dynamiser le morceau
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
              <h3>Fiche artistique</h3>
              Collaboration instrumentale avec Hypnotic <br />
              <br />
              Hommage d'un fan à Tom Sawyer <br />
              <br />
              Inspirés par l'orchestration et les harmonisations de la série
              originale <br />
              Modernisation du style
            </>
          }
          verso={
            <>
              <h3>Fiche technique</h3>
              Production sur FL Studio <br />
              <br />
              Basse électrique et autres instruments d'orchestre samplés
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
              <h3>Fiche artistique</h3>
              Composition pour Jeune Homme <br />
              <br />
              Inspiration Rap 90 <br />
              <br />
              Production épurée pour mettre en valeur les différentes voix,
              <br />
              pour finir sur plus de vacarme
            </>
          }
          verso={
            <>
              <h3>Fiche technique</h3>
              Production sur FL Studio <br />
              <br />
              Humanisation du rythme <br />
              Travail de la distorsion
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
              <h3>Fiche artistique</h3>
              Instrumental pianos et cordes <br />
              <br />
              Musique d'épopée fantastique <br />
              <br />
              Placement précis des intruments
              <br />
              Maîtrise de la tension générale du morceau
            </>
          }
          verso={
            <>
              <h3>Fiche technique</h3>
              Production sur FL Studio <br />
              <br />
              Effet vinyl <br />
              Réverb "Raum" <br />
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
