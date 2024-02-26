/* ************************************************************************** */
/*                                                                            */
/*                                                      :::    :::    :::     */
/*   Problem Number: 1008                              :+:    :+:      :+:    */
/*                                                    +:+    +:+        +:+   */
/*   By: xxxch7 <boj.kr/u/xxxch7>                    +#+    +#+          +#+  */
/*                                                  +#+      +#+        +#+   */
/*   https://boj.kr/1008                           #+#        #+#      #+#    */
/*   Solved: 2024/02/26 15:41:55 by xxxch7        ###          ###   ##.kr    */
/*                                                                            */
/* ************************************************************************** */
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
const a = +input[0];
const b = +input[1];
console.log(a / b);