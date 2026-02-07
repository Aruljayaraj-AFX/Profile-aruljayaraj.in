import { useEffect, useState } from "react";

export default function HomeNavbar({ pageRef, hoveredRow }) {
  const LINE_HEIGHT = 16;
  const [lines, setLines] = useState(0);

  useEffect(() => {
    if (!pageRef?.current) return;

    const update = () => {
      const height = pageRef.current.clientHeight;
      setLines(Math.floor(height / LINE_HEIGHT));
    };

    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [pageRef]);

  return (
    <div className="bg-[#282828]">
      <table
        className="h-full border-collapse font-mono text-[9px] text-gray-400"
        style={{ tableLayout: "fixed" }}
      >
        <tbody>
          {Array.from({ length: lines }).map((_, rowIndex) => (
            <tr
              key={rowIndex}
              style={{ height: LINE_HEIGHT }}
              className={hoveredRow === rowIndex ? "bg-[#323232]" : ""}
            >
              <td
  className="
    relative
    select-none
    text-right
    border-l border-t border-b
    border-[#BABABA]/40
    pr-2
    pl-3
  "
  style={{
    height: LINE_HEIGHT,
    whiteSpace: "nowrap"
  }}
>
  {rowIndex + 1}
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}