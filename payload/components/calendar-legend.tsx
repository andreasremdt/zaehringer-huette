export default function CalendarLegend() {
  return (
    <ul className="legend">
      <li>
        <span className="legend-box is-free" /> freie Tage
      </li>
      <li>
        <span className="legend-box is-confirmed" /> Bestätigte Buchung
      </li>
      <li>
        <span className="legend-box is-unconfirmed" /> Unbestätigte Buchung
      </li>
    </ul>
  );
}
