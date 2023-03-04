- get font working

maybe make multicolumn detecting work
.container:not(:has(*)) { /* 0 elements */
  background: yellow;
}
.container:has(> :last-child:nth-child(1)) { /* 1 element */
  background: red;
}
.container:has(> :last-child:nth-child(2)) { /* 2 elements */
  background: blue;
}
.container:has(> :last-child:nth-child(3)) { /* 3 elements */
  background: green;
}