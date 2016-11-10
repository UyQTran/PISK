import React, { Component } from 'react';
import CalendarIcon from 'material-ui/svg-icons/action/event';
import {cyan500} from 'material-ui/styles/colors';
import calendarfeed from '/data/calendarfeed.json';


export default class StatutesPage extends Component {

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={{display: 'flex', alignItems: 'space-between'}}>
        §1 - Formålsparagraf
  Foreningens navn er Programutvalet for Informatikk: språk og kommunikasjon (PI:SK).
  Foreningens formål er å ivareta interressene til studentene ved studieprogrammet Informatikk: språk og kommunikasjon (I:SK), samt bidra til et godt sosialt og faglig miljø blant studentene, og på programrommet til I:SK. Foreningen skal også arbeide for god kontakt mellom studentene og studieprogrammets ledelse.
  §2 - Generalforsamling
  Generalforsamlingen er foreningens høyeste myndighet og avholdes hvert semester, fortrinnsvis i februar og september.
  Styret innkaller til generalforsamling med 14 dagers varsel. Dagsorden offentliggjøres seinest en uke i forveien.
  På generalforsamlingen behandles styrets semesterberetning, regnskap for forrige periode og budsjett for neste periode, valg, samt eventuelle andre saker som er satt opp på dagsorden. Valg foregår i tråd med §7.
  Alle studenter som er registrert ved studieprogrammet Informatikk: språk og kommunikasjon (I:SK) som har betalt semesteravgift ved UiO kan bli medlemmer av PI:SK, har stemme- og forslagsrett og kan stille til valg.
  Avstemninger på generalforsamlingen skal være skriftlige dersom minst tre av de stemmeberettige krever det.
  Generalforsamlingen fatter vedtak, utenom vedtektsendringer, ved simpelt flertall.
  Ekstraordinær generalforsamling kan innkalles dersom minst 10 av medlemmene krever det, eller når styret finner det nødvendig.
  Forslag til saker må være styret i hende minst 2 dager før generalforsamlingen. Alle stemmeberettige kan foreslå saker til behandling. Generalforsamlingen kan behandle saker som kommer inn senere, men kan ikke fatte vedtak i disse.
  Generalforsamlingen kan foreta endringer i rekkefølgen på punktene i dagsordenen og utelukke punkter så lenge dette ikke strider mot §8.
  §3 - Styret
  Styret skal drive foreningens aktivitet og sikre gjennomføringen av foreningens formål.
  Leder (eller nestleder) innkaller til styremøte med en ukes varsel, forslag til agenda skal foreligge senest 48 timer før møtet.
  Styret er vedtaksdyktige om 1/2 av styremedlemmene er tilstede. Vedtak gjøres med simpelt flertall, ved stemmelikhet har leder dobbeltstemme.
  Styret skal ha mellom 3 og 10 styremedlemmer, som velges for ett år. Faste stillinger i styret er som følger; Leder, Nestleder og Økonomiansvarlig. Øvrige verv bestemmes av styret.
  Alle som oppfyller kravene i iht §2.4, har møterett på styremøter, men bare styremedlemmer har tale- og stemmerett. Styret kan innvilge talerett om ønskelig.
  Styremedlemmer som ikke møter og ikke melder forfall to møter på rad regnes som fratrådt.
  Styret kan ved behov velge nye styremedlemmer, med unntak av vervene Leder og Økonomiansvarlig.
  Styret velger selv foreningens representanter til utvalg og råd hvor foreningen har representasjon.
  §4 - Vedtekter
  Forslag til vedtektsendringer skal være styret i hende senest 7 dager før allmøte.
  Endring av vedtektene kan bare skje når 2/3 av de stemmeberettigede stemmer for.
  Styret skal offentliggjøre forslagene til vedtektsendringer senest 2 dager før generalforsamlingen.
  §5 - Økonomi
  Foreningens midler skal brukes i henhold til foreningens formål.
  Leder i samarbeid med økonomiansvarlig plikter å engasjere en uavhengig tredjepart til å revidere regnskap for hvert hele år. Revidert regnskap skal forelegges første mulige generalforsamling.
  §6 - Valg
  Styremedlemmer velges særskilt på generalforsamling, for 2 semester av gangen.
  Hver høst velges Leder.
  Hver vår velges Nestleder og Økonomiansvarlig.

      </div>);
  }
}
