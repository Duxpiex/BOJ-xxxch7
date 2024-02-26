/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 10998                             :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: xxxch7 <boj.kr/u/xxxch7>                    +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/10998                          #+#        #+#      #+#    */
/*   Solved: 2024/02/26 15:34:19 by xxxch7        ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(a * b);
