const colorSorter = require('color-sorter');

const input = `
<color-swatch data-color="ffffff">white</color-swatch>
<color-swatch data-color="f5f5f5">whitesmoke</color-swatch>
<color-swatch data-color="dcdcdc">gainsboro</color-swatch>
<color-swatch data-color="c0c0c0">silver</color-swatch>
<color-swatch data-color="a9a9a9">darkgray, darkgrey</color-swatch>
<color-swatch data-color="808080">gray, grey</color-swatch>
<color-swatch data-color="696969">dimgray, dimgrey</color-swatch>
<color-swatch data-color="000000">black</color-swatch>
<color-swatch data-color="d3d3d3">lightgray, lightgrey</color-swatch>
<color-swatch data-color="2f4f4f">darkslategray, darkslategrey</color-swatch>
<color-swatch data-color="708090">slategray, slategrey</color-swatch>
<color-swatch data-color="778899">lightslategray, lightslategrey</color-swatch>
<color-swatch data-color="800000">maroon</color-swatch>
<color-swatch data-color="8b0000">darkred</color-swatch>
<color-swatch data-color="a52a2a">brown</color-swatch>
<color-swatch data-color="b22222">firebrick</color-swatch>
<color-swatch data-color="dc143c">crimson</color-swatch>
<color-swatch data-color="ff0000">red</color-swatch>
<color-swatch data-color="ff4500">orangered</color-swatch>
<color-swatch data-color="ff6347">tomato</color-swatch>
<color-swatch data-color="ff7f50">coral</color-swatch>
<color-swatch data-color="fa8072">salmon</color-swatch>
<color-swatch data-color="e9967a">darksalmon</color-swatch>
<color-swatch data-color="ffa07a">lightsalmon</color-swatch>
<color-swatch data-color="b8860b">darkgoldenrod</color-swatch>
<color-swatch data-color="cd853f">peru</color-swatch>
<color-swatch data-color="daa520">goldenrod</color-swatch>
<color-swatch data-color="deb887">burlywood</color-swatch>
<color-swatch data-color="d2b48c">tan</color-swatch>
<color-swatch data-color="f5deb3">wheat</color-swatch>
<color-swatch data-color="eee8aa">palegoldenrod</color-swatch>
<color-swatch data-color="fafad2">lightgoldenrodyellow</color-swatch>
<color-swatch data-color="f0fff0">honeydew</color-swatch>
<color-swatch data-color="8b4513">saddlebrown</color-swatch>
<color-swatch data-color="a0522d">sienna</color-swatch>
<color-swatch data-color="d2691e">chocolate</color-swatch>
<color-swatch data-color="f4a460">sandybrown</color-swatch>
<color-swatch data-color="ff8c00">darkorange</color-swatch>
<color-swatch data-color="ffa500">orange</color-swatch>
<color-swatch data-color="ffd700">gold</color-swatch>
<color-swatch data-color="ffff00">yellow</color-swatch>
<color-swatch data-color="556b2f">darkolivegreen</color-swatch>
<color-swatch data-color="808000">olive</color-swatch>
<color-swatch data-color="6b8e23">olivedrab</color-swatch>
<color-swatch data-color="bdb76b">darkkhaki</color-swatch>
<color-swatch data-color="f0e68c">khaki</color-swatch>
<color-swatch data-color="8fbc8f">darkseagreen</color-swatch>
<color-swatch data-color="9acd32">yellowgreen</color-swatch>
<color-swatch data-color="adff2f">greenyellow</color-swatch>
<color-swatch data-color="7cfc00">lawngreen</color-swatch>
<color-swatch data-color="7fff00">chartreuse</color-swatch>
<color-swatch data-color="00ff00">lime</color-swatch>
<color-swatch data-color="32cd32">limegreen</color-swatch>
<color-swatch data-color="006400">darkgreen</color-swatch>
<color-swatch data-color="008000">green</color-swatch>
<color-swatch data-color="2e8b57">seagreen</color-swatch>
<color-swatch data-color="228b22">forestgreen</color-swatch>
<color-swatch data-color="3cb371">mediumseagreen</color-swatch>
<color-swatch data-color="00fa9a">mediumspringgreen</color-swatch>
<color-swatch data-color="00ff7f">springgreen</color-swatch>
<color-swatch data-color="90ee90">lightgreen</color-swatch>
<color-swatch data-color="98fb98">palegreen</color-swatch>
<color-swatch data-color="66cdaa">mediumaquamarine</color-swatch>
<color-swatch data-color="20b2aa">lightseagreen</color-swatch>
<color-swatch data-color="00ced1">darkturquoise</color-swatch>
<color-swatch data-color="48d1cc">mediumturquoise</color-swatch>
<color-swatch data-color="40e0d0">turquoise</color-swatch>
<color-swatch data-color="7fffd4">aquamarine</color-swatch>
<color-swatch data-color="008080">teal</color-swatch>
<color-swatch data-color="008b8b">darkcyan</color-swatch>
<color-swatch data-color="5f9ea0">cadetblue</color-swatch>
<color-swatch data-color="00ffff">aqua</color-swatch>
<color-swatch data-color="afeeee">paleturquoise</color-swatch>
<color-swatch data-color="e0ffff">lightcyan</color-swatch>
<color-swatch data-color="f0ffff">azure</color-swatch>
<color-swatch data-color="00bfff">deepskyblue</color-swatch>
<color-swatch data-color="87ceeb">skyblue</color-swatch>
<color-swatch data-color="add8e6">lightblue</color-swatch>
<color-swatch data-color="b0e0e6">powderblue</color-swatch>
<color-swatch data-color="f0f8ff">aliceblue</color-swatch>
<color-swatch data-color="191970">midnightblue</color-swatch>
<color-swatch data-color="000080">navy</color-swatch>
<color-swatch data-color="00008b">darkblue</color-swatch>
<color-swatch data-color="0000cd">mediumblue</color-swatch>
<color-swatch data-color="0000ff">blue</color-swatch>
<color-swatch data-color="4169e1">royalblue</color-swatch>
<color-swatch data-color="4682b4">steelblue</color-swatch>
<color-swatch data-color="1e90ff">dodgerblue</color-swatch>
<color-swatch data-color="6495ed">cornflowerblue</color-swatch>
<color-swatch data-color="b0c4de">lightsteelblue</color-swatch>
<color-swatch data-color="87cefa">lightskyblue</color-swatch>
<color-swatch data-color="483d8b">darkslateblue</color-swatch>
<color-swatch data-color="6a5acd">slateblue</color-swatch>
<color-swatch data-color="7b68ee">mediumslateblue</color-swatch>
<color-swatch data-color="9370db">mediumpurple</color-swatch>
<color-swatch data-color="4b0082">indigo</color-swatch>
<color-swatch data-color="663399">rebeccapurple</color-swatch>
<color-swatch data-color="800080">purple</color-swatch>
<color-swatch data-color="8b008b">darkmagenta</color-swatch>
<color-swatch data-color="8a2be2">blueviolet</color-swatch>
<color-swatch data-color="9400d3">darkviolet</color-swatch>
<color-swatch data-color="9932cc">darkorchid</color-swatch>
<color-swatch data-color="ba55d3">mediumorchid</color-swatch>
<color-swatch data-color="c71585">mediumvioletred</color-swatch>
<color-swatch data-color="ff1493">deeppink</color-swatch>
<color-swatch data-color="ff00ff">fuchsia</color-swatch>
<color-swatch data-color="ff69b4">hotpink</color-swatch>
<color-swatch data-color="da70d6">orchid</color-swatch>
<color-swatch data-color="ee82ee">violet</color-swatch>
<color-swatch data-color="dda0dd">plum</color-swatch>
<color-swatch data-color="d8bfd8">thistle</color-swatch>
<color-swatch data-color="e6e6fa">lavender</color-swatch>
<color-swatch data-color="f8f8ff">ghostwhite</color-swatch>
<color-swatch data-color="f5fffa">mintcream</color-swatch>
<color-swatch data-color="bc8f8f">rosybrown</color-swatch>
<color-swatch data-color="cd5c5c">indianred</color-swatch>
<color-swatch data-color="db7093">palevioletred</color-swatch>
<color-swatch data-color="f08080">lightcoral</color-swatch>
<color-swatch data-color="ffb6c1">lightpink</color-swatch>
<color-swatch data-color="ffc0cb">pink</color-swatch>
<color-swatch data-color="ffe4e1">mistyrose</color-swatch>
<color-swatch data-color="fff0f5">lavenderblush</color-swatch>
<color-swatch data-color="faf0e6">linen</color-swatch>
<color-swatch data-color="fdf5e6">oldlace</color-swatch>
<color-swatch data-color="fff5ee">seashell</color-swatch>
<color-swatch data-color="fffaf0">floralwhite</color-swatch>
<color-swatch data-color="fffafa">snow</color-swatch>
<color-swatch data-color="ffdead">navajowhite</color-swatch>
<color-swatch data-color="ffe4b5">moccasin</color-swatch>
<color-swatch data-color="ffdab9">peachpuff</color-swatch>
<color-swatch data-color="ffe4c4">bisque</color-swatch>
<color-swatch data-color="ffebcd">blanchedalmond</color-swatch>
<color-swatch data-color="faebd7">antiquewhite</color-swatch>
<color-swatch data-color="ffefd5">papayawhip</color-swatch>
<color-swatch data-color="fff8dc">cornsilk</color-swatch>
<color-swatch data-color="f5f5dc">beige</color-swatch>
<color-swatch data-color="fffacd">lemonchiffon</color-swatch>
<color-swatch data-color="ffffe0">lightyellow</color-swatch>
<color-swatch data-color="fffff0">ivory</color-swatch>
`
	.trim()
	.split('\n');

const colors = input.map(line => {
	const match = line.match(/data-color="(\w+)"/);
	return `#${match[1]}`;
});

const sortedColors = colorSorter(colors);

const output = sortedColors
	.map(color => input.find(line => line.includes(color.slice(1))))
	.join('\n');

console.log(output);
