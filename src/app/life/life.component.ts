import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-life',
  templateUrl: './life.component.html',
  styleUrls: ['./life.component.css']
})
export class LifeComponent implements OnInit {

  constructor() { }

  tablero: boolean[][] = [[], []];


  ngOnInit() {
    const x = 15
    const y = 44

    for (let i: number = 0; i < x; i++) {
      this.tablero[i] = []
      for (let j: number = 0; j < y; j++) {
        this.tablero[i][j] = Math.random() >= 0.5;
      }
    }


  }

  async jugar() {
    this.tablero = await this.estadoCelula(1, 1, this.tablero)
  }

  async  estadoCelula(x: number, y: number, tablero_param: boolean[][]) {

    let contador = 0;
    let celula_1: any
    let celula_2: any
    let celula_3: any
    let celula_4: any
    let celula_5: any
    let celula_6: any
    let celula_7: any
    let celula_8: any

    let tablero: boolean[][] = JSON.parse(JSON.stringify(tablero_param))
    let auxtablero: boolean[][] = JSON.parse(JSON.stringify(tablero))

    for (let i = 0; i < tablero.length; i++) {
      contador = 0;
      for (let j = 0; j < tablero[i].length; j++) {
        if (i == 0) {
          if (j == 0) {
            celula_1 = tablero[0][1]
            celula_2 = tablero[1][1]
            celula_3 = tablero[1][0]
            if (celula_1) {
              contador++;
            }
            if (celula_2) {
              contador++;
            }
            if (celula_3) {
              contador++;
            }
            if (contador < 2) {
              auxtablero[0][0] = false;
            } else {
              if (!tablero[0][0] && contador == 3)
                auxtablero[0][0] = true;
              else
                auxtablero[0][0] = false;
              if (tablero[0][0] && contador <= 3)
                auxtablero[0][0] = true;
            }
          }
          contador = 0;
          if (j == tablero[i].length - 1) {
            celula_1 = tablero[0][tablero[i].length - 2]
            celula_2 = tablero[1][tablero[i].length - 2]
            celula_3 = tablero[1][tablero[i].length - 1]
            if (celula_1) {
              contador++;
            }
            if (celula_2) {
              contador++;
            }
            if (celula_3) {
              contador++;
            }
            if (contador < 2) {
              auxtablero[0][tablero[i].length - 1] = false;
            } else {
              if (!tablero[0][tablero[i].length - 1] && contador == 3)
                auxtablero[0][tablero[i].length - 1] = true;
              else
                auxtablero[0][tablero[i].length - 1] = false;
              if (tablero[0][tablero[i].length - 1] && contador <= 3)
                auxtablero[0][tablero[i].length - 1] = true;
            }
          }
          if (j > 0 && j < tablero[i].length - 1) {
            contador = 0;
            celula_1 = tablero[0][j - 1]
            celula_2 = tablero[1][j - 1]
            celula_3 = tablero[1][j]
            celula_4 = tablero[1][j + 1]
            celula_5 = tablero[0][j + 1]
            if (celula_1) {
              contador++;
            }
            if (celula_2) {
              contador++;
            }
            if (celula_3) {
              contador++;
            }
            if (celula_4) {
              contador++;
            }
            if (celula_5) {
              contador++;
            }
            if (!tablero[0][j] && contador == 3)
              auxtablero[0][j] = true;

            if (tablero[0][j] && (contador == 3 || contador == 2))
              auxtablero[0][j] = true;

            if (tablero[0][j] && (contador < 2 || contador > 3))
              auxtablero[0][j] = false;
          }
        }

        if (i < tablero.length - 1 && i > 0) {
          contador = 0;
          celula_1 = tablero[i - 1][j - 1]
          celula_2 = tablero[i - 1][j]
          celula_3 = tablero[i - 1][j + 1]
          celula_4 = tablero[i][j - 1]
          celula_5 = tablero[i][j + 1]
          celula_6 = tablero[i + 1][j - 1]
          celula_7 = tablero[i + 1][j]
          celula_8 = tablero[i + 1][j + 1]

          if (celula_1) {
            contador++;
          }
          if (celula_2) {
            contador++;
          }
          if (celula_3) {
            contador++;
          }
          if (celula_4) {
            contador++;
          }
          if (celula_5) {
            contador++;
          }
          if (celula_6) {
            contador++;
          }
          if (celula_7) {
            contador++;
          }
          if (celula_8) {
            contador++;
          }

          if (!tablero[i][j] && contador == 3)
            auxtablero[i][j] = true;

          if (tablero[i][j] && (contador == 3 || contador == 2))
            auxtablero[i][j] = true;

          if (tablero[i][j] && (contador < 2 || contador > 3))
            auxtablero[i][j] = false;
        }

        if (i == tablero.length - 1) {
          contador = 0;

          celula_1 = tablero[tablero.length - 1][1]
          celula_2 = tablero[tablero.length - 2][1]
          celula_3 = tablero[1][tablero.length - 1]
          if (celula_1) {
            contador++;
          }
          if (celula_2) {
            contador++;
          }
          if (celula_3) {
            contador++;
          }
          if (contador < 2) {
            auxtablero[tablero.length - 1][0] = false;
          } else {
            if (!tablero[tablero.length - 1][0] && contador == 3)
              auxtablero[tablero.length - 1][0] = true;
            else
              auxtablero[tablero.length - 1][0] = false;
            if (tablero[tablero.length - 1][0] && contador <= 3)
              auxtablero[tablero.length - 1][0] = true;
          }
        }

      }
    }



    return auxtablero;

  }

}