i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
k = i[0];
i[0] = i[i.length - 1];
i[i.length - 1] = k;


p = i[1];
i[1] = i[i.length - 2];
i[i.length - 2] = p;

console.log(i);