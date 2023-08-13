import { useEffect, useState } from "react";

export default function ComponentTable(props) {
  const { maxHeights, table, loading, x, align } = props;

  const [maxHeightValue, setMaxHeightValue] = useState(0);
  useEffect(() => {
    if (maxHeights) {
      setMaxHeightValue(maxHeights);
    }
  }, [maxHeights]);

  return (
    <div
      className="mt-3 overflow-auto"
      style={{
        maxHeight: `${maxHeightValue ? `${maxHeightValue}vh` : "100%"}`,
      }}
    >
      <div className="table-responsive-lg">
        <table className="w-100">
          <thead
            className={`bg-primary-blue ${
              x === "x" ? null : "position-sticky"
            }`}
            style={{ top: "0px" }}
          >
            <tr className="text-white text-left">
              {table.th === undefined
                ? ""
                : table.th.map((menu, idx) =>
                    idx === 0 ? (
                      <th
                        className="text-left py-2 px-3 rounded-start"
                        key={idx}
                      >
                        {menu}
                      </th>
                    ) : idx === table.th.length - 1 ? (
                      <th className="text-left py-2 px-3 rounded-end" key={idx}>
                        {menu}
                      </th>
                    ) : (
                      <th className="text-left py-2 px-3" key={idx}>
                        {menu}
                      </th>
                    )
                  )}
            </tr>
          </thead>

          <tbody>
            {table.tb === undefined || table.tb.length === 0 ? (
              <tr>
                <td
                  colSpan={`${table.th.length}`}
                  className="py-4 text-center text-muted"
                >
                  Data Tidak Ada
                </td>
              </tr>
            ) : (
              table?.tb.map((row, index) => (
                <tr
                  key={index}
                  style={{
                    background: `${index % 2 === 1 ? "#e2f4fd" : "white"}`,
                  }}
                >
                  {row.map((raw, ind) =>
                    ind == 0 ? (
                      <td
                        key={ind}
                        className={`px-2 py-1 px-3 text-left rounded rounded-start`}
                      >
                        {raw}
                      </td>
                    ) : ind === row.length - 1 ? (
                      <td key={ind} className={`px-2 py-1 px-3 text-left rounded-end`}>
                        {raw}
                      </td>
                    ) : (
                      <td key={ind} className={`px-2 py-1 px-3 text-left`}>
                        {raw}
                      </td>
                    )
                  )}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
