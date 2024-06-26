// icon:speedometer | Material Design Icons https://materialdesignicons.com/ | Austin Andrews
import * as React from "react";

function Dashboard(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      height="1.5em"
      width="1.5em"
      {...props}
    >
      <path d="M12 16a3 3 0 01-3-3c0-1.12.61-2.1 1.5-2.61l9.71-5.62-5.53 9.58c-.5.98-1.51 1.65-2.68 1.65m0-13c1.81 0 3.5.5 4.97 1.32l-2.1 1.21C14 5.19 13 5 12 5a8 8 0 00-8 8c0 2.21.89 4.21 2.34 5.65h.01c.39.39.39 1.02 0 1.41-.39.39-1.03.39-1.42.01A9.969 9.969 0 012 13 10 10 0 0112 3m10 10c0 2.76-1.12 5.26-2.93 7.07-.39.38-1.02.38-1.41-.01a.996.996 0 010-1.41A7.95 7.95 0 0020 13c0-1-.19-2-.54-2.9L20.67 8C21.5 9.5 22 11.18 22 13z" />
    </svg>
  );
}

export default Dashboard;
