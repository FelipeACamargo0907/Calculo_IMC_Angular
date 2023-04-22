import { Component } from '@angular/core';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {

  altura: number = 0;
  peso: number = 0;
  sexo: string = "";
  resultado: string = "";
  imc: number = 0;
  classificacao: string = "";

  Calcular() {
    this.imc = this.peso / (this.altura * this.altura);

    if (this.imc < 16)
      this.classificacao = "Magreza Extrema";
    else if (this.imc >= 16 && this.imc < 17)
      this.classificacao = "Magreza Moderada";
    else if (this.imc >= 17 && this.imc < 18.5)
      this.classificacao = "Magreza leve";
    else if (this.imc >= 18.5 && this.imc < 25)
      this.classificacao = "Saudável";
    else if (this.imc >= 25 && this.imc < 30)
      this.classificacao = "Sobrepeso";
    else if (this.imc >= 30 && this.imc < 35)
      this.classificacao = "Obesidade Grau I";
    else if (this.imc >= 35 && this.imc < 40)
      this.classificacao = "Obesidade Grau II (considerada severa)";
    else if (this.imc >= 40)
      this.classificacao = "Obesidade Grau III (considerada mórbida)";
    else
      this.classificacao = "Verifique seu peso e altura e tente novamente!";

    this.resultado = "Seu IMC: "+this.imc.toFixed(2) + "\n" + "Classificação: "+this.classificacao + "\n" + "Sexo: "+this.sexo;
  }
}
