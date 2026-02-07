import { useRef, useState, useEffect } from "react";

export default function MainLayout() {
  const LINE_HEIGHT = 15;
  const ROWS = 235;
  const [globalCol, setGlobalCol] = useState(7);
  const [fontSize, setFontSize] = useState(120);
  const [rowscount,setRowscount] = useState(10);
  const [dashrows,setDashrows]=useState([1,5,9,10]);
  const [rowset,setRowset]=useState(3);
  const [mergeSpan,setMergeSpan]=useState([
    { startRow: 2, span: 3, text: "FastAPI &" },
    { startRow: 6, span: 3, text: "AI engineer " }
  ]);
  const [rowscounta,setRowscounta] = useState(16);
  const [mergeSpana,setMergeSpana]=useState([{ startRow: 2, span: 14, text: "Arul" }]);

useEffect(() => {
  if (!pageRef.current) return;

  const observer = new ResizeObserver(([entry]) => {
    const w = entry.contentRect.width;

    if (w >= 769) setGlobalCol(7);
    else setGlobalCol(6);

    if (w >= 1150) setColSpan(2);
    else if(w>=426) setColSpan(3);
    else setColSpan(4);

    if (w >= 426) setRowscount(10);
    else setRowscount(8);

    if (w >= 426) setDashrows([1,5,9,10]);
    else setDashrows([1,4,7,8]);

    if (w >= 426)
      setMergeSpan([
        { startRow: 2, span: 3, text: "FastAPI &" },
        { startRow: 6, span: 3, text: "AI engineer " }
      ]);
    else
      setMergeSpan([
        { startRow: 2, span: 2, text: "FastAPI &" },
        { startRow: 5, span: 2, text: "AI engineer " }
      ]);

    if (w >= 426) setRowset(3);
    else setRowset(2);

    const nextFontSize = Math.max(
      60,                  
      Math.min(w * 0.22, 320) 
    );
    setFontSize(nextFontSize);
  });

  observer.observe(pageRef.current);
  return () => observer.disconnect();
}, []);

const COLUMNS = globalCol;

const [colSpanS, setColSpan] = useState(2);

const A_start_col = Math.max(1, COLUMNS - 3);
const J_start_col = Math.max(1, COLUMNS - 5);

  const mergedCells = {
  "1-1": { rowSpan: rowscount, colSpan: colSpanS },
  [`14-${A_start_col}`]: { rowSpan: 19, colSpan: Math.min(COLUMNS-1, 3) },
  [`32-${J_start_col}`]: { rowSpan: 22, colSpan: Math.min(COLUMNS-1, 5) }
};

  const SYMBOLS = ["+", "=", "-", "*", "/"];
  const [hoveredRow, setHoveredRow] = useState(null);
  const SYMBOL_FONT_SIZE = 12;

  const pageRef = useRef(null);
  const FIRST_COLUMN_WIDTH = 28;

  const [cellSymbols, setCellSymbols] = useState({});

  const repeatToFill = (symbol, width) => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    ctx.font = `${SYMBOL_FONT_SIZE}px monospace`;

    let charWidth = ctx.measureText(symbol).width;
    if (symbol === "-") charWidth *= 0.8;

    const count = Math.ceil((width + 12) / charWidth);
    return symbol.repeat(count);
  };

  const isCellCovered = (row, col) => {
    for (const key in mergedCells) {
      const [r, c] = key.split("-").map(Number);
      const { rowSpan, colSpan } = mergedCells[key];

      if (
        row >= r &&
        row < r + rowSpan &&
        col >= c &&
        col < c + colSpan &&
        !(row === r && col === c)
      ) {
        return true;
      }
    }
    return false;
  };


 function InnerTable_Arul() {
  const Rows = rowscounta;
  const Cols = 10;
  const First_Col_Width = 10;
  const ROW_HEIGHT = 16; 

  const Dash_Rows = [1];
  const Merges = mergeSpana

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${Rows}, ${ROW_HEIGHT}px)`, 
        gridTemplateColumns: `${First_Col_Width}px repeat(${Cols - 1}, 1fr)`,
        width: "100%",
        height: Rows * ROW_HEIGHT,
        border:"1px solid #444"
      }}
    >
      {Dash_Rows.map((row) => (
        <div
          key={`dash-${row}`}
          style={{
            gridRow: `${row} / ${row + 1}`,
            gridColumn: "2 / -1",
            fontSize: "10px",
            lineHeight: `${ROW_HEIGHT}px`,
            fontFamily: "monospace",
            color: "#aaa",
            whiteSpace: "nowrap",
            overflow: "hidden"
          }}
        >
          {"-".repeat(400)}
        </div>
      ))}

      {Merges.map(({ startRow, span, text }, idx) => (
        <div
          key={idx}
          style={{
            gridRow: `${startRow} / ${startRow + span}`,
            gridColumn: "2 / -1",
            fontSize: `${fontSize}px`,
            lineHeight: `${ROW_HEIGHT}px`,
            paddingTop: "40px",
            fontWeight: 750,
            letterSpacing: -5,
            color: "#aaa",
            fontFamily: "Rubik, sans-serif",
             display: "flex",
      alignItems: "center",   
      justifyContent: "flex-end", 
      paddingRight: "6px"
          }}
        >
          {text}
        </div>
      ))}

      {Array.from({ length: Rows * Cols }).map((_, i) => {
        const row = Math.floor(i / Cols) + 1;
        const col = (i % Cols) + 1;

        if (
          (Dash_Rows.includes(row) && col >= 2) ||
          (row >= 2 && col >= 2)
        )
          return null;

        return (
          <div
            key={i}
            style={{
              fontSize: "9px",
              lineHeight: `${ROW_HEIGHT}px`,
              color: "#828282",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {col === 1 ? "/" : ""}
          </div>
        );
      })}
    </div>
  );
}

function InnerTable_Jayaraj() {
  const ROWS = 21;
  const COLS = 10;
  const FIRST_COL_WIDTH = 10;
  const DASH_ROWS = [1,17];

  const MERGES = [
    { startRow: 2, span: 15 ,text: "Jayaraj "}  
  ];
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gridTemplateColumns: `${FIRST_COL_WIDTH}px repeat(${COLS - 1}, 1fr)`,
        width: "100%",
        height: "100%"
      }}
    >
      {DASH_ROWS.map((row) => (
        <div
          key={`dash-${row}`}
          style={{
            gridRow: `${row} / ${row + 1}`,
            gridColumn: "2 / -1",
            minWidth: 0,
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: "10px",
            lineHeight: "16px",
            color: "#aaa",
            fontFamily: "monospace" 
          }}
        >
          {"-".repeat(400)}
        </div>
      ))}
{MERGES.map(({ startRow, span ,text }, idx) => (
  <div
    key={`merge-${idx}`}
    style={{
      gridRow: `${startRow} / ${startRow + span}`,
      gridColumn: "2 / -1",
      minWidth: 0,
      whiteSpace: "nowrap",
      fontSize: `${fontSize}px`,
      paddingTop: "35px",
      lineHeight: "15px",
      justifyContent:"end",
      fontWeight: 750,
      letterSpacing: -5,
      alignItems:"center",
      color: "#aaa",
      fontFamily: "Rubik, sans-serif",
      display: "flex"
    }}
  >
    {text}
  </div>
))}
      {Array.from({ length: ROWS * COLS }).map((_, i) => {
        const row = Math.floor(i / COLS) + 1;
        const col = (i % COLS) + 1;
        if (
          (DASH_ROWS.includes(row) && col >= 2) ||
          (row >= 2 && row <= 16 && col >= 2)
        )
          return null;
        return (
          <div
            key={i}
            style={{
              minWidth: 0,
              overflow: "hidden",
              borderRight: col !== COLS ? "" : "none",
              borderBottom: row !== ROWS ? "" : "none",
              fontSize: "9px",
              lineHeight: "16px",
              color: "#828282",
              display: "flex"
            }}
          >
            {col === 1 ? "/" : ""}
          </div>
        );
      })}
    </div>
  );
}
function InnerTable() {
  const ROWS = rowscount;
  console.log("InnerTable rowscount:", rowscount);
  const COLS = 10;
  const FIRST_COL_WIDTH = 10;
  const ROW_HEIGHT = 15; 

  const DASH_ROWS = dashrows;

  const MERGES = mergeSpan;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, ${ROW_HEIGHT}px)`, 
        gridTemplateColumns: `${FIRST_COL_WIDTH}px repeat(${COLS - 1}, 1fr)`,
        width: "100%",
        height: ROWS * ROW_HEIGHT, 
        marginLeft: "8px"
      }}
    >
      {DASH_ROWS.map((row) => (
        <div
          key={`dash-${row}`}
          style={{
            gridRow: `${row} / ${row + 1}`,
            gridColumn: "2 / -1",
            whiteSpace: "nowrap",
            overflow: "hidden",
            fontSize: "10px",
            lineHeight: `${ROW_HEIGHT}px`,
            fontFamily: "monospace",
            color: "#aaa"
          }}
        >
          {"-".repeat(400)}
        </div>
      ))}

      {MERGES.map(({ startRow, span, text }, idx) => (
        <div
          key={`merge-${idx}`}
          style={{
            gridRow: `${startRow} / ${startRow + span}`,
            gridColumn: "2 / -1",
            fontSize: "max(40px, min(4cqw, 6vw))",
            lineHeight: `${ROW_HEIGHT}px`,
            fontWeight: 750,
            paddingTop:"max(20px, min(1cqw, 4vw))",
            letterSpacing: -2,
            color: "#aaa",
            fontFamily: "Rubik, sans-serif",
            display: "flex",
            alignItems: "center",
            paddingLeft: "6px"
          }}
        >
          {text}
        </div>
      ))}

      {Array.from({ length: ROWS * COLS }).map((_, i) => {
        const row = Math.floor(i / COLS) + 1;
        const col = (i % COLS) + 1;

        if (
          (DASH_ROWS.includes(row) && col >= 2) ||
          (row >= 2 && row <= 2+(rowset-1) && col >= 2) ||
          (row >= rowscount-(rowset+2) && row <= rowscount-2 && col >= 2)
        )
          return null;

        return (
          <div
            key={i}
            style={{
              fontSize: "10px",
              lineHeight: `${ROW_HEIGHT}px`,
              color: "#828282",
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {col === 1 ? "//" : ""}
          </div>
        );
      })}
    </div>
  );
}
  useEffect(() => {
    const result = {};
    for (let row = 0; row < ROWS; row++) {
      result[row] = {};
      for (let col = 1; col < COLUMNS; col++) {
        if (Math.random() < 0.3) {
          result[row][col] =
            SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
        }
      }
    }
    setCellSymbols(result);
  }, []);


  return (
    <div className="h-full w-full bg-[#282828] overflow-hidden">
      <div
        ref={pageRef}
        className="h-full overflow-y-auto bg-[#282828] hide-scrollbar"
      >
        <table
          className="w-full border-collapse font-mono text-[9px] text-[#828282]"
          style={{ tableLayout: "fixed" }}
        >
          <tbody>
            {Array.from({ length: ROWS }).map((_, rowIndex) => (
              <tr key={rowIndex} style={{ height: LINE_HEIGHT }} 
              onMouseEnter={() => setHoveredRow(rowIndex)}
              onMouseLeave={() => setHoveredRow(null)}>
                {Array.from({ length: COLUMNS }).map((_, colIndex) => {
                  if (isCellCovered(rowIndex, colIndex)) return null;

                  const mergeKey = `${rowIndex}-${colIndex}`;
                  const merge = mergedCells[mergeKey];
                  const showPrefix = !merge;

                  const rowSpan = merge?.rowSpan || 1;
                  const colSpan = merge?.colSpan || 1;

                  const normalColWidth =
                    (pageRef.current?.clientWidth - FIRST_COLUMN_WIDTH) /
                    (COLUMNS - 1);

                  if (colIndex === 0) {
                    const isHovered = hoveredRow === rowIndex;
                    return (
                      <td
                        key={colIndex}
                        rowSpan={rowSpan}
                        colSpan={colSpan}
                        
                        style={{
                          width: FIRST_COLUMN_WIDTH,
                          height: LINE_HEIGHT * rowSpan,
                          color: isHovered ? "#ff4d4d" : "#828282",
        background: isHovered ? "#1f1f1f" : "transparent",
        transition: "all 0.1s ease"
                        }}
                        className="border-r border-[#BABABA]/40 pr-1 text-right text-[10px]"
                      >
                        {rowIndex + 1}
                      </td>
                    );
                  }

                  return (
                    <td
                      key={colIndex}
                      rowSpan={rowSpan}
                      colSpan={colSpan}
                      style={{
                        height: LINE_HEIGHT * rowSpan,
                        background: "#282828"
                      }}
                      className={`relative select-none overflow-hidden  
                        ${ showPrefix ? colIndex === 1 ? "pl-5 before:content-['//'] before:absolute before:left-2 before:top-1/2 before:-translate-y-1/2" : "pl-1 before:content-['/'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2" :"" }` }
                    >
                      {merge && mergeKey === "1-1" && <InnerTable />}
                      {merge && mergeKey === `14-${A_start_col}` && <InnerTable_Arul />}
                       {merge && mergeKey === `32-${J_start_col}` && <InnerTable_Jayaraj />}
                      {!merge &&
                        cellSymbols[rowIndex]?.[colIndex] && (
                          <span
                            style={{
                              display: "inline-block",
                              width: normalColWidth,
                              fontSize: SYMBOL_FONT_SIZE,
                              lineHeight: `${LINE_HEIGHT}px`,
                              whiteSpace: "nowrap"
                            }}
                          >
                            {repeatToFill(
                              cellSymbols[rowIndex][colIndex],
                              normalColWidth
                            )}
                          </span>
                        )}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}