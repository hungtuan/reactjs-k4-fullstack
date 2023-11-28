import React, { useLayoutEffect, useState, useTransition } from "react";
import data from "./db.json";

const Students = () => {
  const [value, setValue] = useState("");
  const [pending, startTransition] = useTransition();

  // Handle
  const handleSearch = (e) => {
    startTransition(() => {
      setValue(e.target.value);
    });
  };

  return (
    <div>
      <input
        type="search"
        placeholder="Từ khóa tìm kiếm..."
        onChange={handleSearch}
      />
      <hr />
      {pending && <h3>Đang xử lý...</h3>}
      <div>
        {data.map(({ id, fullName }) => {
          const position = fullName.toLowerCase().indexOf(value.toLowerCase());
          if (value && position !== -1) {
            return (
              <h3 key={id}>
                {fullName.slice(0, position)}
                <span style={{ background: "#ebe8cf" }}>
                  {fullName.slice(position, position + value.length)}
                </span>
                {fullName.slice(position + value.length)}
              </h3>
            );
          }
          return <h3 key={id}>{fullName}</h3>;
        })}
      </div>
    </div>
  );
};

export default Students;
