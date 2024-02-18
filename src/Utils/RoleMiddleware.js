// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// const permissions = JSON.parse(localStorage.getItem("permissions"));

// export const CheckRole = (route) => {
//   let arr = [];
//   const navigate = useNavigate();
//   permissions.map((per) => {
//     arr.push(per.Permission.value);
//   });
//   useEffect(() => {
//     if (arr.includes(route)) {
//       navigate("/" + route);
//     } else {
//       navigate("/");
//     }
//   }, [route]);
// };
