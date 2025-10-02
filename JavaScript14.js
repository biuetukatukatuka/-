function myenter() {
  const x = prompt("円の半径を入力して下さい(半角数字)");
  const y = x * x * 3.14;
  alert(`円の半径を${x}cm とした場合、面積は${y}cm2 です。`);
}
