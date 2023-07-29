// Color design tokens export
// export const colorTokens = {
//     // Instagram's blues
//     primary: {
//       50: "#F0F5FC",
//       100: "#DDEAF9",
//       200: "#C8E2F5",
//       300: "#B3D9F2",
//       400: "#8CCAF0",
//       500: "#66BAED",
//       600: "#3EA9EB",
//       700: "#3598CC",
//       800: "#2B80A7",
//       900: "#1F607D",
//     },
//     // Instagram's grays
//     grey: {
//       0: "#FFFFFF",
//       10: "#FAFAFA",
//       50: "#F0F0F0",
//       100: "#E0E0E0",
//       200: "#C2C2C2",
//       300: "#A3A3A3",
//       400: "#858585",
//       500: "#666666",
//       600: "#4D4D4D",
//       700: "#333333",
//       800: "#1A1A1A",
//       900: "#0A0A0A",
//       1000: "#000000",
//     },
//   };
  
//   // MUI theme settings
//   export const themeSettings = (mode) => {
//     return {
//       palette: {
//         mode: mode,
//         ...(mode === "dark"
//           ? {
//               // palette values for dark mode
//               primary: {
//                 dark: colorTokens.primary[600],
//                 main: colorTokens.primary[800],
//                 light: colorTokens.primary[100],
//               },
//               neutral: {
//                 dark: colorTokens.grey[100],
//                 main: colorTokens.grey[200],
//                 mediumMain: colorTokens.grey[300],
//                 medium: colorTokens.grey[400],
//                 light: colorTokens.grey[700],
//               },
//               background: {
//                 default: colorTokens.grey[900],
//                 alt: colorTokens.grey[800],
//               },
//             }
//           : {
//               // palette values for light mode
//               primary: {
//                 dark: colorTokens.primary[700],
//                 main: colorTokens.primary[500],
//                 light: colorTokens.primary[50],
//               },
//               neutral: {
//                 dark: colorTokens.grey[700],
//                 main: colorTokens.grey[500],
//                 mediumMain: colorTokens.grey[400],
//                 medium: colorTokens.grey[300],
//                 light: colorTokens.grey[50],
//               },
//               background: {
//                 default: colorTokens.grey[10],
//                 alt: colorTokens.grey[0],
//               },
//             }),
//       },
//       typography: {
//         fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//         fontSize: 12,
//         h1: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 40,
//         },
//         h2: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 32,
//         },
//         h3: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 24,
//         },
//         h4: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 20,
//         },
//         h5: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 16,
//         },
//         h6: {
//           fontFamily: ["Noto Sans Vithkuqi", "sans-serif"].join(","),
//           fontSize: 14,
//         },
//       },
//     };
//   };
  














// color design tokens export
export const colorTokens = {
    grey: {
      0: "#FFFFFF",
      10: "#F6F6F6",
      50: "#F0F0F0",
      100: "#E0E0E0",
      200: "#C2C2C2",
      300: "#A3A3A3",
      400: "#858585",
      500: "#666666",
      600: "#4D4D4D",
      700: "#333333",
      800: "#1A1A1A",
      900: "#0A0A0A",
      1000: "#000000",
    },
    primary: {
      50: "#c7ab46",
      100: "#FCAF45",
      200: "#F77737",
      300: "#F56040",
      400: "#FD1D1D",
      500: "#E1306C",
      600: "#C13584",
      700: "#833AB4",
      800: "#5B51D8",
      900: "#405DE6",
    },
  };
  
  // mui theme settings
  export const themeSettings = (mode) => {
    return {
      palette: {
        mode: mode,
        ...(mode === "dark"
          ? {
            //   palette values for dark mode
              primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
              },
              neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
              },
              background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
              },
            }
          : {
              // palette values for light mode
              primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
              },
              neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
              },
              background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
              },
            }),
      },
      typography: {
        fontFamily: ['Inconsolata', " monospace"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ['Inconsolata', " monospace"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ['Inconsolata', "monospace"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ['Inconsolata', "monospace"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ['Inconsolata', " monospace"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ['Inconsolata', " monospace"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ['Inconsolata', " monospace"].join(","),
          fontSize: 14,
        },
      },
    };
  };