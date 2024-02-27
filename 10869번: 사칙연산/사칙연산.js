/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10869                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: xxxch7 <boj.kr/u/xxxch7>                    +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10869                          #+#        #+#      #+#    */
/*   Solved: 2024/02/27 10:10:55 by xxxch7        ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(Math.floor(a/b))
console.log(a%b)
