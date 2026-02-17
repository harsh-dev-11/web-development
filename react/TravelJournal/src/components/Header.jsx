import globeIcon from "../assets/globe-icon.png";
export default function Header() {
  return (
    <header>
      {/* <a href="https://www.flaticon.com/free-icons/global" title="global icons">Global icons created by Freepik - Flaticon</a> */}
      <img src={globeIcon} alt="" />
      <h1>My travel journal</h1>
    </header>
  );
}
