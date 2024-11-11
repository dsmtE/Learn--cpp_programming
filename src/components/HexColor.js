import React from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function HexColor ({ hex }) {
    const { colorMode } = useColorMode();

    const hex_without_prefix = hex.startsWith("#") ? hex.slice(1) : (hex.startsWith("0x") ? hex.slice(2) : hex );

    // find the right text color using luminance that will make the text readable
    const hex_as_int = parseInt(hex_without_prefix, 16);
    const luminance = (0.299 * ((hex_as_int >> 16) & 255) + 0.587 * ((hex_as_int >> 8) & 255) + 0.114 * (hex_as_int & 255)) / 255;

    const styles = {
        backgroundColor: `#${hex_without_prefix}`,
        color: luminance > 0.5 ? "#222" : "#fff",
        padding: "0 4px",
        "border-radius": "5px",
        "font-weight": "bold",
    };

    return (
    <span style={styles}>{hex}</span>
    );
}