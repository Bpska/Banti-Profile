import "./styles/TechStackNew.css";

interface TechItem {
  name: string;
  icon: string;
  url: string;
}

const designingTools: TechItem[] = [
  { name: "Canva", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/canva/canva-original.svg", url: "https://canva.com" },
  { name: "Photoshop", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-original.svg", url: "https://adobe.com/products/photoshop" },
  { name: "Illustrator", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-plain.svg", url: "https://adobe.com/products/illustrator" },
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
  { name: "Adobe Express", icon: "https://img.icons8.com/color/48/adobe-express.png", url: "https://adobe.com/products/express" },
  { name: "CorelDRAW", icon: "https://img.icons8.com/color/48/coreldraw-2020.png", url: "https://coreldraw.com" },
  { name: "DaVinci Resolve", icon: "https://img.icons8.com/color/48/davinci-resolve.png", url: "https://blackmagicdesign.com/products/davinciresolve" },
  { name: "CapCut", icon: "https://img.icons8.com/color/48/capcut.png", url: "https://capcut.com" },
];

const uiUxTools: TechItem[] = [
  { name: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", url: "https://figma.com" },
  { name: "Adobe XD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/xd/xd-plain.svg", url: "https://adobe.com/products/xd" },
  { name: "Sketch", icon: "https://img.icons8.com/color/48/sketch.png", url: "https://sketch.com" },
  { name: "Framer", icon: "https://img.icons8.com/color/48/framer.png", url: "https://framer.com" },
];

const TechStackNew = () => {
  const renderRow = (items: TechItem[], rowClass: string) => (
    <div className={rowClass}>
      {items.map((tech, techIndex) => (
        <a
          key={techIndex}
          href={tech.url}
          target="_blank"
          rel="noopener noreferrer"
          className="techstack-item"
          title={tech.name}
          data-cursor="disable"
        >
          <img src={tech.icon} alt={tech.name} />
          <span>{tech.name}</span>
        </a>
      ))}
    </div>
  );

  return (
    <div className="techstack-new">
      {/* Video Background */}
      <div className="techstack-video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="techstack-video"
        >
          <source src="/video/video.webm" type="video/webm" />
        </video>
        {/* Dark Overlay */}
        <div className="techstack-overlay"></div>
      </div>

      {/* Content */}
      <div className="techstack-content">
        <h2>Tools I Use</h2>

        <div className="techstack-group">
          <h3 className="techstack-group-title">Designing Tools</h3>
          {renderRow(designingTools, "techstack-row techstack-row-designing")}
        </div>

        <div className="techstack-group">
          <h3 className="techstack-group-title">UI/UX &amp; Web Design Tools</h3>
          {renderRow(uiUxTools, "techstack-row techstack-row-uiux")}
        </div>
      </div>
    </div>
  );
};

export default TechStackNew;
