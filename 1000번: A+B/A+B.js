/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1000                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: xxxch7 <boj.kr/u/xxxch7>                    +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1000                           #+#        #+#      #+#    */
/*   Solved: 2024/02/26 11:07:33 by xxxch7        ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(a + b);