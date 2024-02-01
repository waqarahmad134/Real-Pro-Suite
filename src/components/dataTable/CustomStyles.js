import { createTheme } from "react-data-table-component";

const customStyles = {
    rows: {
        style: {
            minHeight: "80px",
            margin: "4px 0",
            borderRadius: "8px",
            overflow: "hidden",
            
           
        },
    },
    headCells: {
        style: {
            fontSize: "16px",
            fontWeight: "800",
            color: "rgba(0, 0, 0, 0.6)",
        },
    },
    cells: {
        style: {
            fontSize: "16px",
            fontWeight: "300",
            color: "black",
            background: "white",   
        },
    },
};

const theme = createTheme("myTheme", {
    background: {
        default: "transparent",
    },
    divider: {
        default: "transparent",
    },
});

export default customStyles;
export { theme };