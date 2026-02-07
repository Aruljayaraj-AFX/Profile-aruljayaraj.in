function InnerTable({ isMobileOrTablet }) {
  // Responsive settings
  const settings = isMobileOrTablet
    ? {
        ROWS: 8,
        COLS: 10,
        FIRST_COL_WIDTH: 10,
        DASH_ROWS: [1, 4, 7, 8],
        MERGES: [
          { startRow: 2, span: 2, text: "FastAPI &" },
          { startRow: 5, span: 2, text: "AI engineer " }
        ]
      }
    : {
        ROWS: 10,
        COLS: 10,
        FIRST_COL_WIDTH: 10,
        DASH_ROWS: [1, 5, 9, 10],
        MERGES: [
          { startRow: 2, span: 3, text: "FastAPI &" },
          { startRow: 6, span: 3, text: "AI engineer " }
        ]
      };

  const { ROWS, COLS, FIRST_COL_WIDTH, DASH_ROWS, MERGES } = settings;

  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: `repeat(${ROWS}, 1fr)`,
        gridTemplateColumns: `${FIRST_COL_WIDTH}px repeat(${COLS - 1}, 1fr)`,
        width: "100%",
        height: "100%",
        marginLeft: "8px"
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
            lineHeight: "15px",
            color: "#aaa",
            fontFamily: "monospace"
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
            minWidth: 0,
            whiteSpace: "nowrap",
            fontSize: "clamp(20px, 6cqw, 60px)",
            lineHeight: "15px",
            fontWeight: 750,
            wordSpacing: -5,
            paddingTop: "17px",
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
          (MERGES.some(({ startRow, span }) => row >= startRow && row < startRow + span && col >= 2))
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
              fontSize: "10px",
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