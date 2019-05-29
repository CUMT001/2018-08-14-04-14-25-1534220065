module.exports = function main(num) {
    console.log("Debug Info");
	var a = "._.";
	var b = "...";
	var c = "|.|";
	var d = "..|";
	var e = "._|";
	var f = "|_|";
	var g = "|_.";
	var i = num;
	var dig = [];
	while(i>1){
		var temp = i%10;
		i = Math.floor(i/10);
		dig.push(temp);
	}
	var up = [];
	var mid = [];
	var bottom = [];
	for(var i=dig.length-1; i>=0; i--)
	{
		if(dig[i] == 0)
		{
			up.push(a);
			mid.push(c);
			bottom.push(f);
		}
		if(dig[i] == 1)
		{
			up.push(b);
			mid.push(d);
			bottom.push(d);
		}
		if(dig[i] == 2)
		{
			up.push(a);
			mid.push(e);
			bottom.push(g);
		}
		if(dig[i] == 3)
		{
			up.push(a);
			mid.push(e);
			bottom.push(e);
		}
		if(dig[i] == 4)
		{
			up.push(b);
			mid.push(f);
			bottom.push(d);
		}
		if(dig[i] == 5)
		{
			up.push(a);
			mid.push(g);
			bottom.push(e);
		}
		if(dig[i] == 6)
		{
			up.push(a);
			mid.push(g);
			bottom.push(f);
		}
		if(dig[i] == 7)
		{
			up.push(a);
			mid.push(d);
			bottom.push(d);
		}
		if(dig[i] == 8)
		{
			up.push(a);
			mid.push(f);
			bottom.push(f);
		}
		if(dig[i] == 9)
		{
			up.push(a);
			mid.push(f);
			bottom.push(d);
		}
	}
	up.push("\n");
	mid.push("\n");
	bottom.push("\n");
	var str1 = up.join(" ");
	var str2 = mid.join(" ");
	var str3 = bottom.join(" ");
	var r = str1 + str2 + str3;
	return r;
};